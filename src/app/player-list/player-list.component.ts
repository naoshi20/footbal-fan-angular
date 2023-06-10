import { Component, OnInit } from '@angular/core'
import { SupabaseService } from '../supabase.service'

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: any = []
  loading = false

  constructor(private readonly supabaseService: SupabaseService) {} //private playerService: PlayerService

  async ngOnInit(): Promise<void> {
    await this.retrievePlayer()
  }

  async retrievePlayer() {
    try {
      this.loading = true
      let {
        data: players,
        error,
        status
      } = await this.supabaseService.retrievePlayers()
      this.loading = false

      if (error && status !== 406) {
        throw error
      }

      if (players) {
        this.players = players
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
