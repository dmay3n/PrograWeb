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
    this.player = this.taskService.getPlayer(2);
  }

  chargePlayerData(id: number, name: HTMLInputElement, team: HTMLInputElement, age: HTMLInputElement, position: HTMLInputElement, country: HTMLInputElement){
    this.currentPlayer = this.taskService.getPlayer(id);
    name.value=this.currentPlayer.name;
    team.value=this.currentPlayer.team;
    age.value=this.currentPlayer.age;
    position.value=this.currentPlayer.position;
    country.value=this.currentPlayer.country;
  }

  updatePlayer(name: HTMLInputElement, team: HTMLInputElement, age: HTMLInputElement, position: HTMLInputElement, country: HTMLInputElement){
    this.incId = this.taskService.getId()+1;
    console.log('creating player with ID: ' + this.incId);
    this.taskService.addPlayer({
      id: this.incId,
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
