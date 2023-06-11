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
  mai_team: boolean
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

  // from以上to未満のデータを取得
  async retrieveSpecificPlayers(from: number, to: number) {
    const result = await this.supabase
      .from('players5')
      .select('*')
      .gte('id', from)
      .lt('id', to)
    console.log(result)
    return result
  }

  // from以上to未満のデータを取得
  async retrieveSpecificPlayersByTeamName(
    team: string[],
    from?: number,
    to?: number
  ) {
    if (from && to) {
      const result = await this.supabase
        .from('players5')
        .select('*')
        .in('belongings', team)
        .gte('id', from)
        .limit(PLAYERS_DISPLAYED_PAR_PAGE)
      console.log(result)
      return result
    } else {
      const result = await this.supabase
        .from('players5')
        .select('*')
        .in('belongings', team)
        .limit(PLAYERS_DISPLAYED_PAR_PAGE)
      console.log(result)
      return result
    }
  }
}
