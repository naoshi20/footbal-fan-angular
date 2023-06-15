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
    ['/', 'お気に入り'],
    ['/players', '選手一覧'],
    ['/all-players', '全選手']
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
      this.currentPath = result ?? ''
    })
  }

  public styleButton(index: number): string {
    const remainder = index % 3
    /// remainderを使ってボタンのスタイルを変えることも可能
    let buttonType = 'secondary'
    return buttonType
  }
}
