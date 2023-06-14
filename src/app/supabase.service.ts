import { BootstrapOptions, Injectable } from '@angular/core'
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  SupabaseClient,
  Session
} from '@supabase/supabase-js'
import { environment } from 'src/environments/environment'
import { PLAYERS_DISPLAYED_PAR_PAGE } from './player-list/player-list.component'

export interface Player {
  id?: number
  name: string
  belongings: string | null
  position: string | null
  back_number: number | null
  country: string | null
  representative_flag: boolean
  birthday: string | null
  img: string | null
}
export interface PlayerId {
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient
  _session: AuthSession | null = null

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    )
  }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session
    })
    return this._session
  }

  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    return this.supabase.auth.onAuthStateChange(callback)
  }

  async retrievePlayersFromSpecificId(team?: string[], from?: number) {
    // 全チーム表示の場合
    if (!team && !from) {
      const result = await this.supabase
        .from('players5')
        .select('*')
        .order('id', { ascending: true })
        .limit(PLAYERS_DISPLAYED_PAR_PAGE)
      return result
    }
    if (!team && from) {
      const result = await this.supabase
        .from('players5')
        .select('*')
        .gte('id', from)
        .order('id', { ascending: true })
        .limit(PLAYERS_DISPLAYED_PAR_PAGE)
      return result
    }

    // 好きなチーム表示の場合
    if (team && !from) {
      const result = await this.supabase
        .from('players5')
        .select('*')
        .in('belongings', team)
        .order('id', { ascending: true })
        .limit(PLAYERS_DISPLAYED_PAR_PAGE)
      return result
    }
    if (team && from) {
      const result = await this.supabase
        .from('players5')
        .select('*')
        .in('belongings', team)
        .gte('id', from)
        .order('id', { ascending: true })
        .limit(PLAYERS_DISPLAYED_PAR_PAGE)
      return result
    }
    throw Error
  }

  async updatePlayerFavoriteStatus(playerId: number, favorite: boolean) {
    const result = await this.supabase
      .from('players5')
      .update({ favorite: favorite })
      .eq('id', playerId)
      .select()
    return result
  }
}
