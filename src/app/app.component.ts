import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'football-fan'

  pageLinks: Map<string, string> = new Map([
    ['', 'ホーム'],
    ['player', 'プレイヤー'],
    ['button', 'ボタン']
  ])

  ngOnInit(): void {
    console.log(this.pageLinks)
  }
}
