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
  activated: boolean = false

  constructor(private readonly supabaseService: SupabaseService) {}

  ngOnInit(): void {
    this.activated = this.favorite === 'true'
  }

  public async registerPlayerAsFavorite(): Promise<void> {
    this.activated = !this.activated
    const result = await this.supabaseService.updatePlayerFavoriteStatus(
      Number(this.playerId),
      this.activated
    )
    return
  }
}
