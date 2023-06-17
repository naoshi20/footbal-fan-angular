import { Component, OnInit } from '@angular/core'
import { Player, SupabaseService } from '../supabase.service'

export const ALL_TEAM = [
  'アーセナル',
  'アストンヴィラ',
  'ウエストハム',
  'ウォルバーハンプトン',
  'エヴァートン',
  'クリスタルパレス',
  'サウサンプトン',
  'チェルシー',
  'トッテナム',
  'ニューカッスル',
  'ノッティンガムフォレスト',
  'ブライトン',
  'フラム',
  'ブレントフォード',
  'ボーンマス',
  'マンチェスターシティ',
  'マンチェスターユナイテッド',
  'リーズ',
  'リヴァプール',
  'レスター'
]

@Component({
  selector: 'app-player-list-page',
  templateUrl: './player-list-page.component.html',
  styleUrls: ['./player-list-page.component.scss']
})
export class PlayerListPageComponent implements OnInit {
  players: any = []
  loading = false
  lastPlayerId: number = 0
  // boolean[] = Array(Object.keys(ALL_TEAM).length).fill(true) // Map<string,number> = new Map().set('key1', true)
  teamsDisplayed: { [key: string]: boolean } = {}

  //  ['アーセナル', 'アストンヴィラ', ...]
  teams: string[] = Object.values(ALL_TEAM)

  constructor(private readonly supabaseService: SupabaseService) {}

  async ngOnInit(): Promise<void> {
    for (let team of this.teams) {
      this.teamsDisplayed[team] = true
    }
  }

  toggle(teamName: string) {
    this.teamsDisplayed[teamName] = !this.teamsDisplayed[teamName]
    console.log(this.teamsDisplayed)
  }
}
