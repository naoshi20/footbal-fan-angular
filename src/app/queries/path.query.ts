import { Query } from '@datorama/akita'
import { Injectable } from '@angular/core'
import { pathState, pathStore } from '../stores/path.store'

@Injectable({ providedIn: 'root' })
export class PathQuery extends Query<pathState> {
  constructor(protected override store: pathStore) {
    super(store)
  }
}
