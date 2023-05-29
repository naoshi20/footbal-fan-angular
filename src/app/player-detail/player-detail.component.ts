import { Component, OnInit } from '@angular/core';
import { PlayerDetailService } from '../service/player-detail.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
})
export class PlayerDetailComponent implements OnInit {
  id = '1';
  name = 'naoshi';

  constructor(private playerDetailService: PlayerDetailService) {}
  ngOnInit(): void {}

  onClick(): void {
    this.playerDetailService.updateName('mai');
  }
}
