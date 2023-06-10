import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PlayerDetailComponent } from './player-detail/player-detail.component'
import { PlayerListComponent } from './player-list/player-list.component'

const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'players', component: PlayerListComponent },
  { path: 'player', component: PlayerDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
