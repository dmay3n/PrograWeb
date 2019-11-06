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
  @Input() player: any;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
    this.player = this.taskService.getUpdatePlayer();
  }

  chargePlayerData(id: number, name: HTMLInputElement, team: HTMLInputElement, age: HTMLInputElement, position: HTMLInputElement, country: HTMLInputElement){
    name.value=this.player.name;
    team.value=this.player.team;
    age.value=this.player.age;
    position.value=this.player.position;
    country.value=this.player.country;
  }

  updatePlayer(name: HTMLInputElement, team: HTMLInputElement, age: HTMLInputElement, position: HTMLInputElement, country: HTMLInputElement){
    this.taskService.updatePlayer({
      name: name.value,
      team: team.value,
      age: age.value,
      position: position.value,
      country: country.value
    }, this.player.id)

    name.value="";
    team.value="";
    age.value="";
    position.value="";
    country.value="";
    name.focus();
    return false;
  }

}
