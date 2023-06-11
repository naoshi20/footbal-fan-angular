import { Component, OnInit } from '@angular/core'
import { SupabaseService } from '../supabase.service'

const PLAYERS_DISPLAYED_PAR_PAGE: number = 10

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: any = []
  loading = false
  lastPlayerId: number = 0

  constructor(private readonly supabaseService: SupabaseService) {} //private playerService: PlayerService

  async ngOnInit(): Promise<void> {
    await this.retrieveSpecificPlayers(0, 0 + PLAYERS_DISPLAYED_PAR_PAGE)
    this.lastPlayerId = PLAYERS_DISPLAYED_PAR_PAGE - 1
    console.log(this.lastPlayerId)
  }

  public onChangePage() {
    const from = this.lastPlayerId + 1
    const to = from + PLAYERS_DISPLAYED_PAR_PAGE
    this.retrieveSpecificPlayers(from, to)
  }

  async retrieveSpecificPlayers(from: number, to: number): Promise<void> {
    try {
      this.loading = true
      let {
        data: players,
        error,
        status
      } = await this.supabaseService.retrieveSpecificPlayers(from, to)
      this.loading = false

      if (error && status !== 406) {
        throw error
      }

      if (players) {
        this.players = [...this.players, ...players]
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
}
