import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { PlayerEditFormComponent } from './components/player-edit-form/player-edit-form.component';


const routes: Routes = [
  {path: 'showPlayers', component: PlayerListComponent},
  {path: 'createPlayer', component: PlayerFormComponent},
  {path: 'editPlayer', component: PlayerEditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PlayerListComponent, PlayerFormComponent, PlayerEditFormComponent]
