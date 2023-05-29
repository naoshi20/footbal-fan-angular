import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface PlayerState {
  id: string;
  name: string;
  favoriteFood: string | undefined;
}

export function createInitialState(): PlayerState {
  return {
    id: '',
    name: '',
    favoriteFood: undefined,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class PlayerStore extends Store<PlayerState> {
  constructor() {
    super(createInitialState());
  }
}
