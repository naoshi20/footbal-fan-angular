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
  teamsDisplayed: { [key: string]: boolean } = {}
  //  ['アーセナル', 'アストンヴィラ', ...]
  teams: string[] = Object.values(ALL_TEAM)

  constructor(private readonly supabaseService: SupabaseService) {}

  async ngOnInit(): Promise<void> {
    this.addAllCheckMarks()

    const team_list = this.convertTeamObjectToList()
    await this.retrieveSpecificTeamPlayers(team_list)
  }

  public async onChangePage() {
    const from = this.lastPlayerId + 1
    const team_list = this.convertTeamObjectToList()
    await this.retrieveSpecificTeamPlayers(team_list, from)
  }

  async retrieveSpecificTeamPlayers(
    team?: string[], // teamがundefinedの場合は全チーム
    from?: number
  ): Promise<void> {
    try {
      this.loading = true

      let {
        data: players,
        error,
        status
      } = await this.supabaseService.retrievePlayersFromSpecificId(team, from)

      this.loading = false

      if (error && status !== 406) {
        throw error
      }

      if (players) {
        this.players = [...this.players, ...players]
        console.log(this.players)
        if (this.players.length === 0) {
          return
        }
        const lastPlayer = this.players.slice(-1)[0].id
        console.log(players)
        return
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.loading = false
    }
  }

  async toggle(teamName: string) {
    this.teamsDisplayed[teamName] = !this.teamsDisplayed[teamName]

    this.players = []
    const team_list = this.convertTeamObjectToList()
    await this.retrieveSpecificTeamPlayers(team_list)
  }

  clearAllCheckMarks() {
    for (let team of this.teams) {
      this.teamsDisplayed[team] = false
    }
    console.log('clear')
  }

  async addAllCheckMarks() {
    for (let team of this.teams) {
      this.teamsDisplayed[team] = true
    }
    const team_list = this.convertTeamObjectToList()
    await this.retrieveSpecificTeamPlayers(team_list)
  }

  convertTeamObjectToList() {
    // playersを初期化して再度APIを呼び直す

    let team_list = []
    for (const [key, value] of Object.entries(this.teamsDisplayed)) {
      if (value === false) {
        continue
      }
      team_list.push(key)
    }
    return team_list
  }
}
