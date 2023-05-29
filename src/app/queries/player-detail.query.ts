import { Query } from '@datorama/akita';
import {
  PlayerDetailState,
  PlayerDetailStore,
} from '../stores/player-detail.store';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlayerDetailQuery extends Query<PlayerDetailState> {
  // allState$ = this.select();
  // selectName$ = this.select('name');

  constructor(protected override store: PlayerDetailStore) {
    super(store);
  }

  // よく使うSELECT文を保存しておくイメージ。基本は親クラスのメソッドで足りるはず。
  // get getPlayerName() {
  //   return this.getValue().name;
  // }
}
