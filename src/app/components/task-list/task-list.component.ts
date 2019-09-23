import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  players: Player[];

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.players = this.taskService.getPlayers()
  }

}
