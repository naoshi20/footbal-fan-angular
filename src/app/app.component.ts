import { Component } from '@angular/core'
import { PathService } from './service/path.service'
import { PathQuery } from './queries/path.query'
import { SupabaseService } from './supabase.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'football-fan'

  session = this.supabase.session

  pageLinks: Map<string, string> = new Map([
    ['/', 'ホーム'],
    ['/players', '選手一覧'],
    ['/player', '選手'],
    ['/button', 'ボタン']
  ])

  currentPath = ''

  constructor(
    private pathService: PathService,
    private pathQuery: PathQuery,
    private readonly supabase: SupabaseService
  ) {}

  ngOnInit(): void {
    this.supabase.authChanges((_, session) => (this.session = session))

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
