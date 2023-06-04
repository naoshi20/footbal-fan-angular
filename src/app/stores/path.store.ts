import { Injectable } from '@angular/core'
import { Store, StoreConfig } from '@datorama/akita'

export interface pathState {
  currentPath: string | undefined
}

export function createInitialState(): pathState {
  return {
    currentPath: undefined
  }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'path' })
export class pathStore extends Store<pathState> {
  constructor() {
    super(createInitialState())
  }
}
