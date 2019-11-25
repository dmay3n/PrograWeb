import { Injectable } from '@angular/core';
import { Player } from '../models/Player';
import { HttpClient } from '@angular/common/http';
//const proxyurl = "https://cors-anywhere.herokuapp.com/";
var baseUrl = 'http://backendmayen.westus.azurecontainer.io:4000/api/v1/player/';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  players: any;
  playerToUpdate: any;

  constructor(private http: HttpClient) { }

  getPlayers() {
    this.players = this.http.get(baseUrl)
    return this.players;
  }

  getPlayer(id: number) {
    let players = [];
    players = JSON.parse(localStorage.getItem('players'));
    for (let i = 0; i < this.players.length; i++) {
      if (id == players[i].id) {
        return players[i];
      }
    }
    return 0
  }

  getUpdatePlayer(){
    console.log(this.playerToUpdate)
    return this.playerToUpdate;
  }

  addPlayer(player: Player) {
    this.http.post(baseUrl, player, {responseType: 'text'}).subscribe((ok)=>{console.log(ok)});
  }

  deletePlayer(player: Player) {
    this.http.delete(baseUrl+player.id, {responseType: 'text'}).subscribe((ok)=>{console.log(ok)});
  }

  getId() {
    let highestId = 0;
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].id > highestId) {
        highestId = this.players[i].id;
      }
    }
    return highestId;
  }

  setUpdatePlayer(updatedPlayer: Player) {
    console.log(updatedPlayer.id)
    this.playerToUpdate = updatedPlayer;
  }

  updatePlayer(updatedPlayer: any, id: Number){
    this.http.put(baseUrl+id, updatedPlayer, {responseType: 'text'}).subscribe((ok)=>{console.log(ok)});
  }
}
