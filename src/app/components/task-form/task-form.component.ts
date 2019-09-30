import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit() {
  }

  create(name: HTMLInputElement, team: HTMLInputElement, age: HTMLInputElement, position: HTMLInputElement, country: HTMLInputElement){
    console.log('creating player...');
    this.taskService.addPlayer({
      name: name.value,
      team: team.value,
      age: age.value,
      position: position.value,
      country: country.value
      
    })

    name.value="";
    team.value="";
    age.value="";
    position.value="";
    country.value="";
    return false;
  }
}
