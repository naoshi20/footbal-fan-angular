import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { HttpClientModule } from '@angular/common/http'
import { PlayerDetailComponent } from './player-detail/player-detail.component'
import { PlayerDetailService } from './service/player-detail.service'

import { PlayerListComponent } from './player-list/player-list.component'
import { HeaderButtonComponent } from './header-button/header-button.component'

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailComponent,
    HeaderButtonComponent,
    PlayerListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PlayerDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
