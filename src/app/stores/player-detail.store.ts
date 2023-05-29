import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface PlayerDetailState {
  id: string;
  name: string;
  favoriteFood: string | undefined;
  height: number | undefined;
  weight: number | undefined;
}

export function createInitialState(): PlayerDetailState {
  return {
    id: '',
    name: '',
    favoriteFood: undefined,
    height: undefined,
    weight: undefined,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'playerDetail' })
export class PlayerDetailStore extends Store<PlayerDetailState> {
  constructor() {
    super(createInitialState());
  }
}
