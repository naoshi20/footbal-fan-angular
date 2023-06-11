import { Injectable } from '@angular/core'
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  SupabaseClient,
  Session
} from '@supabase/supabase-js'
import { environment } from 'src/environments/environment'

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
  async retrieveSpecificPlayers(from: number = 1, to: number = 10) {
    const result = await this.supabase
      .from('players')
      .select('*')
      .gte('id', from)
      .lt('id', to)
    console.log(result)
    return result
  }
}
