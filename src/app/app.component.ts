import { Component } from '@angular/core'
import { PathService } from './service/path.service'
import { PathQuery } from './queries/path.query'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'football-fan'

  pageLinks: Map<string, string> = new Map([
    ['/', 'ホーム'],
    ['/player', 'プレイヤー'],
    ['/button', 'ボタン']
  ])

  currentPath = ''

  constructor(private pathService: PathService, private pathQuery: PathQuery) {}

  ngOnInit(): void {
    this.pathQuery.select('currentPath').subscribe(result => {
      console.log('currentPath', result)
      this.currentPath = result ?? ''
    })
  }

  public styleButton(index: number): string {
    const remainder = index % 3
    let buttonType
    if (remainder === 0) {
      buttonType = 'primary'
    } else if (remainder === 1) {
      buttonType = 'secondary'
    } else if (remainder === 2) {
      buttonType = 'ghost'
    } else {
      throw new Error('')
    }
    return buttonType
  }
}
