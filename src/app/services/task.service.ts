import { Injectable } from '@angular/core';
import { Player } from '../models/Player';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  players: Player[];
  currentPlayer: Player;
  
  constructor() { }

  getPlayers() {
    if(localStorage.getItem('players') === null) {
      this.players = [];
    } else {
      this.players = JSON.parse(localStorage.getItem('players'));
    }
    return this.players;
  }

  getPlayer(id: number){
    let players = [];
    players = JSON.parse(localStorage.getItem('players'));
    for (let i = 0; i < this.players.length; i++) {
      if(id == players[i].id){
        return players[i];
      }
    }
    return 0
  }

  addPlayer(player: Player) {
    this.players.push(player);
    let players = [];
    if(localStorage.getItem('players') === null) {
      players = [];
      players.push(player);
      localStorage.setItem('players', JSON.stringify(players));
    } else {
      players = JSON.parse(localStorage.getItem('players'));
      players.push(player); 
      localStorage.setItem('players', JSON.stringify(players));
    }
  }

  deletePlayer(player: Player) {
    for (let i = 0; i < this.players.length; i++) {
      if (player == this.players[i]) {
        this.players.splice(i, 1);
        localStorage.setItem('players', JSON.stringify(this.players));
      }
    }
  }

  getId(){
    let highestId = 0;
    for (let i = 0; i < this.players.length; i++){
      if(this.players[i].id > highestId){
        highestId = this.players[i].id;
      }
    }
    return highestId;
  }

  defineCurrentPlayer(player: Player){
    this.currentPlayer = player;
  }

  updatePlayer(updatedPlayer: Player){
    this.players = this.getPlayers();
    console.log("PLAYERS LIST");
    console.log(this.players);
    for (let i = 0; i < this.players.length; i++) {
      console.log(updatedPlayer.id + "-" + this.players[i].id)
      if (updatedPlayer.id == this.players[i].id) {
        this.players[i] = updatedPlayer;
        localStorage.setItem('players', JSON.stringify(this.players));
        return;
      }
    }
  }
}
