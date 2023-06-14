import { Component, OnInit } from '@angular/core'
import { Player, SupabaseService } from '../supabase.service'

@Component({
  selector: 'app-favorite-player-list',
  templateUrl: './favorite-player-list.component.html',
  styleUrls: ['./favorite-player-list.component.scss']
})
export class FavoritePlayerListComponent implements OnInit {
  players: any = []
  loading = false
  lastPlayerId: number = 0

  constructor(private readonly supabaseService: SupabaseService) {}

  async ngOnInit(): Promise<void> {
    await this.retrieveFavoritePlayers()
  }

  public async onChangePage() {
    const from = this.lastPlayerId + 1
    await this.retrieveFavoritePlayers(from)
  }

  async retrieveFavoritePlayers(from?: number) {
    try {
      this.loading = true

      let {
        data: players,
        error,
        status
      } = await this.supabaseService.retrieveFavoritePlayersFromSpecificId(from)

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
