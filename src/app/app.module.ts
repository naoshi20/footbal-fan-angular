import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerDetailService } from './service/player-detail.service';

@NgModule({
  declarations: [AppComponent, PlayerDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PlayerDetailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
