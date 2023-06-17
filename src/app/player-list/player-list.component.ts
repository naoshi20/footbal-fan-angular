import { Component, OnInit } from '@angular/core'
import { Player, SupabaseService } from '../supabase.service'

export const PLAYERS_DISPLAYED_PAR_PAGE: number = 10

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: any = []
  loading = false
  lastPlayerId: number = 0

  constructor(private readonly supabaseService: SupabaseService) {}

  async ngOnInit(): Promise<void> {
    await this.retrieveSpecificTeamPlayers(undefined)
  }

  public async onChangePage() {
    const from = this.lastPlayerId + 1
    await this.retrieveSpecificTeamPlayers(undefined, from)
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
        this.lastPlayerId = this.players.slice(-1)[0].id
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

  trackByFn(index: number, player: Player) {
    return player.id
  }
}
