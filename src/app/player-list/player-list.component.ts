import { Component, OnInit } from '@angular/core'
import { Player, SupabaseService } from '../supabase.service'

export const PLAYERS_DISPLAYED_PAR_PAGE: number = 10
const MAI_TEAM: string[] = [
  'ブレントフォード',
  'ボーンマス',
  'ウェストハム',
  'リヴァプール'
]

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: any = []
  mayTeamPlayers: any = []

  loading = false
  mayTeamPlayersLoading = false

  lastPlayerId: number = 0
  mayTeamLastPlayerId: number = 0

  displayMaiTeam: boolean = true

  constructor(private readonly supabaseService: SupabaseService) {} //private playerService: PlayerService

  async ngOnInit(): Promise<void> {
    await this.retrievePlayersFromSpecificId(MAI_TEAM) //retrievePlayersFromSpecificId
    // await this.retrieveSpecificPlayersById(0, 0 + PLAYERS_DISPLAYED_PAR_PAGE) // 0番目からX個取得するretrievePlayersFromSpecificId
    console.log(this.lastPlayerId)
  }

  // public async onChangePage() {
  //   const from = this.lastPlayerId + 1
  //   const to = from + PLAYERS_DISPLAYED_PAR_PAGE
  //   await this.retrieveSpecificPlayersById(from, to)
  //   this.lastPlayerId = to
  // }

  public async onChangePageMaiTeam() {
    console.log(this.mayTeamLastPlayerId)
    const from = this.mayTeamLastPlayerId + 1
    console.log(from)
    await this.retrievePlayersFromSpecificId(MAI_TEAM, from)
  }

  async retrievePlayersFromSpecificId(
    team: string[],
    from?: number
  ): Promise<void> {
    try {
      this.mayTeamPlayersLoading = true

      let {
        data: players,
        error,
        status
      } = await this.supabaseService.retrievePlayersFromSpecificId(team, from)

      this.mayTeamPlayersLoading = false

      if (error && status !== 406) {
        throw error
      }

      if (players) {
        // players.mai_team
        this.mayTeamPlayers = [...this.mayTeamPlayers, ...players]
        this.mayTeamLastPlayerId = this.mayTeamPlayers.slice(-1)[0].id
        return
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.mayTeamPlayersLoading = false
    }
  }

  trackByFn(index: number, player: Player) {
    return player.id
  }

  toggleMaiTeam() {
    this.displayMaiTeam = this.displayMaiTeam ? false : true
  }
}
