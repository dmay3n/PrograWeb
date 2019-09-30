import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-player-edit-form',
  templateUrl: './player-edit-form.component.html',
  styleUrls: ['./player-edit-form.component.css']
})
export class PlayerEditFormComponent implements OnInit {

  incId: number;
  currentPlayer: Player;
  @Input() player: Player;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.currentPlayer = this.taskService.currentPlayer;
    this.player = this.taskService.getPlayer(this.currentPlayer.id);
  }



  updatePlayer(name: HTMLInputElement, team: HTMLInputElement, age: HTMLInputElement, position: HTMLInputElement, country: HTMLInputElement){
    console.log('updating player with ID: ' + this.currentPlayer.id);
    this.taskService.updatePlayer({
      id: this.currentPlayer.id,
      name: name.value,
      team: team.value,
      age: age.value,
      position: position.value,
      country: country.value
    })

  }

}
