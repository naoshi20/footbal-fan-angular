import { Component, OnInit } from '@angular/core';
import { PlayerDetailService } from '../service/player-detail.service';
import { PlayerDetailQuery } from '../queries/player-detail.query';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
})
export class PlayerDetailComponent implements OnInit {
  count: number;

  constructor(
    private playerDetailService: PlayerDetailService,
    private playerDetailQuery: PlayerDetailQuery
  ) {
    this.count = 0;
  }

  ngOnInit(): void {
    console.log('ng onInit');
    this.playerDetailQuery.select('height').subscribe((result) => {
      console.log(result);
      this.count = result ?? 0;
    });
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('ngOndestroy');
  }

  onClick(): void {
    this.count += 1;
    this.playerDetailService.updateHeight(this.count);
  }
}
