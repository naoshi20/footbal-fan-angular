import { Component, OnInit } from '@angular/core'
import { Player, SupabaseService } from '../supabase.service'

export const PLAYERS_DISPLAYED_PAR_PAGE: number = 10

@Component({
  selector: 'app-all-player-list',
  templateUrl: './all-player-list.component.html',
  styleUrls: ['./all-player-list.component.scss']
})
export class AllPlayerListComponent implements OnInit {
  players: any = []
  loading = false
  lastPlayerId: number = 0

  constructor(private readonly supabaseService: SupabaseService) {}

  async ngOnInit(): Promise<void> {
    await this.retrieveAllPlayers()
  }

  public async onChangePage() {
    const from = this.lastPlayerId + 1
    await this.retrieveAllPlayers(from)
  }

  async retrieveAllPlayers(from?: number): Promise<void> {
    try {
      this.loading = true

      let {
        data: players,
        error,
        status
      } = await this.supabaseService.retrievePlayersFromSpecificId(
        undefined, // teamは指定しない
        from
      )

      this.loading = false

      if (error && status !== 406) {
        throw error
      }

      if (players) {
        // players.mai_team
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
