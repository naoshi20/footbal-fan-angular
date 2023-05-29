import { Injectable } from '@angular/core';
import { PlayerStore } from '../core/state/player/player.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PlayerDetailService {
  constructor(private playerStore: PlayerStore, private http: HttpClient) {}

  async updateName(newName: string) {
    this.playerStore.setLoading(true);
    const result = 'success'; // await this.http.get('./../../server.js');
    this.playerStore.update({ name: newName });
    this.playerStore.setLoading(false);
    return result;
  }
}
