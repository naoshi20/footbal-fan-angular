import { Injectable } from '@angular/core'
import { Event, RouterEvent, Router } from '@angular/router'
import { distinctUntilChanged, filter, map } from 'rxjs'
import { pathStore } from '../stores/path.store'

@Injectable({ providedIn: 'root' })
export class PathService {
  constructor(public router: Router, private pathStore: pathStore) {
    router.events
      .pipe(
        filter((e: Event): e is RouterEvent => e instanceof RouterEvent),
        map(e => e.url),
        distinctUntilChanged() // 値が変化するまで流さない
      )
      .subscribe((url: string) => {
        this.pathStore.setLoading(true)
        this.pathStore.update({ currentPath: url })
        this.pathStore.setLoading(false)
      })
  }
}
