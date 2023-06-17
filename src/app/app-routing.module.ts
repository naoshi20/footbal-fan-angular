import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FavoritePlayerListComponent } from './favorite-player-list/favorite-player-list.component'
import { PlayerListPageComponent } from './player-list-page/player-list-page.component'

const routes: Routes = [
  { path: '', component: FavoritePlayerListComponent },
  { path: 'players', component: PlayerListPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
