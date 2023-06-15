import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PlayerDetailComponent } from './player-detail/player-detail.component'
import { PlayerListComponent } from './player-list/player-list.component'
import { FavoritePlayerListComponent } from './favorite-player-list/favorite-player-list.component'
import { AllPlayerListComponent } from './all-player-list/all-player-list.component'

const routes: Routes = [
  { path: '', component: FavoritePlayerListComponent },
  { path: 'players', component: PlayerListComponent },
  { path: 'all-players', component: AllPlayerListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
