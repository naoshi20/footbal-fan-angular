import { Component, Input, OnInit } from '@angular/core'
import { SupabaseService } from '../supabase.service'

@Component({
  selector: 'app-star-button',
  templateUrl: './star-button.component.html',
  styleUrls: ['./star-button.component.scss']
})
export class StarButtonComponent implements OnInit {
  @Input() playerId: string = ''
  @Input('favorite') favorite: string = ''
  activated: boolean

  constructor(private readonly supabaseService: SupabaseService) {
    this.activated = Boolean(this.favorite)
    console.log(this.activated)
  }

  ngOnInit(): void {
    //this.supabaseService.fetchPlayerFavoriteStatus(Number(this.playerId))
  }

  public async registerPlayerAsFavorite(): Promise<void> {
    console.log(Number(this.playerId))
    await this.supabaseService.updatePlayerFavoriteStatus(
      Number(this.playerId),
      !Boolean(this.activated)
    )
    return
  }
}
