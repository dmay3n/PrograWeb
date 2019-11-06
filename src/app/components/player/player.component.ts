import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../models/Player';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;
  playerToUpdate: any;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  deletePlayer(player: Player) {
    if(confirm('Are you sure you want to delete this player?')) {
      this.taskService.deletePlayer(player);
      setTimeout(function(){window.location.reload()}, 1000);
    }
  }

  updatePlayer(player: Player){
    this.taskService.setUpdatePlayer(player);
  }
}