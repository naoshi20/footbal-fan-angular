import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class PlayerService {
  constructor(private http: HttpClient) {} //HttpClientという型を持ったhttp変数を宣言

  getPlayers(): Observable<any> {
    return this.http.get('http://localhost:3000/player') //相対パスで指定、CORSの問題でエラーが発生するので、Proxyを挟んで対応する（/proxy.conf.json参照）
  }

  getPlayerById(playerId: string): Observable<any> {
    return this.http.get('http://localhost:3000/player/' + playerId)
  }
}
