import { Component, Input, OnInit } from '@angular/core'
import { Player, SupabaseService } from '../supabase.service'

export const PLAYERS_DISPLAYED_PAR_PAGE: number = 10

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  @Input() players: any = []

  constructor(private readonly supabaseService: SupabaseService) {}

  async ngOnInit(): Promise<void> {}

  trackByFn(index: number, player: Player) {
    return player.id
  }
}
