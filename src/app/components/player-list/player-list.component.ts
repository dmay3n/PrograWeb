import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  //players: Player[];
  players: any;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.players = this.taskService.getPlayers();
    //console.log(this.players);
  }

  addPlayer(player: Player) {
    //console.log(player);
    this.taskService.addPlayer(player);
  }

}
