import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  constructor(public taskService: TaskService) { }

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
    name.focus();
    return false;
  }
}
