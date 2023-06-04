import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PlayerDetailComponent } from './player-detail/player-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/player', pathMatch: 'full' },
  { path: 'player', component: PlayerDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
