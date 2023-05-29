import { Injectable } from '@angular/core';
import { PlayerDetailStore } from '../stores/player-detail.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PlayerDetailService {
  constructor(
    private playerDetailStore: PlayerDetailStore,
    private http: HttpClient
  ) {}

  updateName(newName: string) {
    this.playerDetailStore.setLoading(true);
    const result = 'success'; // await this.http.get('./../../server.js');
    this.playerDetailStore.update({ name: newName });
    this.playerDetailStore.setLoading(false);
    return result;
  }

  updateHeight(newHeight: number) {
    this.playerDetailStore.setLoading(true);
    const result = 'success'; // await this.http.get('./../../server.js');
    this.playerDetailStore.update({ height: newHeight });
    this.playerDetailStore.setLoading(false);
    return result;
  }
}
