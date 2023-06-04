const express = require('express')
const router = express.Router()
var cors = require('cors')

router.use(cors()) // デフォルトで全てのOriginからのアクセスを許可する。本番環境ではオリジンを制限する必要あり。

router.get('', function (_, res) {
  return res.status(200).send(players)
})

router.get('/:playerId', function (req, res) {
  const playerId = Number(req.params.playerId)

  for (let player of players) {
    if (player.id === playerId) {
      return res.status(200).send(player)
    } else {
      continue
    }
  }

  return res.status(422).send({
    errors: [{ title: 'player error', detail: 'Player not found!' }]
  })
})

module.exports = router

const players = [
  {
    id: 1,
    name: 'ロベルト・デ・ツェルビ',
    position: '監督',
    back_number: '',
    birthday: '1979/6/6',
    country: 'イタリア'
  },
  {
    id: 2,
    name: 'ロベルト・サンチェス',
    position: 'GK',
    back_number: 1,
    birthday: '1997/11/18',
    country: 'スペイン代表'
  },
  {
    id: 3,
    name: 'ジェイソン・スティール',
    position: 'GK',
    back_number: 23,
    birthday: '1990/8/18',
    country: 'イングランドU21歴'
  },
  {
    id: 4,
    name: 'トーマス・マクギル',
    position: 'GK',
    back_number: 38,
    birthday: '2000/3/25',
    country: 'イングランドU20歴'
  },
  {
    id: 5,
    name: 'タリック・ランプティ',
    position: 'DF',
    back_number: 2,
    birthday: '2000/9/30',
    country: 'イングランドU21代表'
  },
  {
    id: 6,
    name: 'アダム・ウェブスター',
    position: 'DF',
    back_number: 4,
    birthday: '1995/1/4',
    country: 'イングランドU19歴'
  },
  {
    id: 7,
    name: 'ルイス・ダンク',
    position: 'DF',
    back_number: 5,
    birthday: '1991/11/21',
    country: 'イングランド代表歴'
  },
  {
    id: 8,
    name: 'リーヴァイ・コルウィル',
    position: 'DF',
    back_number: 6,
    birthday: '2003/2/26',
    country: 'イングランド'
  },
  {
    id: 9,
    name: 'ヤン・ポール・ヘッケ',
    position: 'DF',
    back_number: 29,
    birthday: '2000/6/8',
    country: 'オランダ'
  },
  {
    id: 10,
    name: 'ペルビス・エストゥピニャン',
    position: 'DF',
    back_number: 30,
    birthday: '1998/1/21',
    country: 'エクアドル'
  },
  {
    id: 11,
    name: 'ジョエル・フェルトマン',
    position: 'DF',
    back_number: 34,
    birthday: '1992/1/15',
    country: 'オランダ代表'
  },
  {
    id: 12,
    name: 'エド・ターンズ',
    position: 'DF',
    back_number: 55,
    birthday: '2002/10/18',
    country: 'イングランド'
  },
  {
    id: 13,
    name: 'ジェイムズ・ファーロング',
    position: 'DF',
    back_number: '',
    birthday: '2002/6/7',
    country: 'アイルランドU18歴'
  },
  {
    id: 14,
    name: 'オデル・オフィアー',
    position: 'DF',
    back_number: '',
    birthday: '2002/10/26',
    country: 'イングランド'
  },
  {
    id: 15,
    name: 'アンテフ・ツォングイ',
    position: 'DF',
    back_number: '',
    birthday: '2002/12/30',
    country: 'ベルギーU18歴'
  },
  {
    id: 16,
    name: 'ソリー・マーチ',
    position: 'MF',
    back_number: 7,
    birthday: '1994/7/20',
    country: 'イングランドU21歴'
  },
  {
    id: 17,
    name: 'アレクシス・マクアリスター',
    position: 'MF',
    back_number: 10,
    birthday: '1998/12/24',
    country: 'アルゼンチン代表'
  },
  {
    id: 18,
    name: 'パスカル・グロス',
    position: 'MF',
    back_number: 13,
    birthday: '1991/6/15',
    country: 'ドイツU20歴'
  },
  {
    id: 19,
    name: 'アダム・ララーナ',
    position: 'MF',
    back_number: 14,
    birthday: '1988/5/10',
    country: 'イングランド代表歴'
  },
  {
    id: 20,
    name: 'ヤクブ・モダー',
    position: 'MF',
    back_number: 15,
    birthday: '1999/4/7',
    country: 'ポーランド代表'
  },
  {
    id: 21,
    name: 'フリオ・エンシソ',
    position: 'MF',
    back_number: 20,
    birthday: '2004/1/23',
    country: 'パラグアイ'
  },
  {
    id: 22,
    name: '三笘 薫',
    position: 'MF',
    back_number: 22,
    birthday: '1997/5/20',
    country: '日本U24代表歴'
  },
  {
    id: 23,
    name: 'モイセス・カイセド',
    position: 'MF',
    back_number: 25,
    birthday: '2001/11/2',
    country: 'エクアドル代表'
  },
  {
    id: 24,
    name: 'ビリー・ギルモア',
    position: 'MF',
    back_number: 27,
    birthday: '2001/6/11',
    country: 'スコットランド'
  },
  {
    id: 25,
    name: 'ジャック・ヒンチー',
    position: 'MF',
    back_number: '',
    birthday: '2003/1/30',
    country: 'イングランド'
  },
  {
    id: 26,
    name: 'キャメロン・ピピオン',
    position: 'MF',
    back_number: '',
    birthday: '2002/9/23',
    country: 'オーストラリア'
  },
  {
    id: 27,
    name: 'ジャック・スポング',
    position: 'MF',
    back_number: '',
    birthday: '2002/2/4',
    country: 'イングランド'
  },
  {
    id: 28,
    name: 'アンディー・モーラン',
    position: 'MF',
    back_number: '',
    birthday: '2003/10/15',
    country: 'アイルランドU21代表'
  },
  {
    id: 29,
    name: 'レアンドロ・トロサール',
    position: 'FW',
    back_number: 11,
    birthday: '1994/12/4',
    country: 'ベルギー代表'
  },
  {
    id: 30,
    name: 'ダニー・ウェルベック',
    position: 'FW',
    back_number: 18,
    birthday: '1990/11/26',
    country: 'イングランド代表歴'
  },
  {
    id: 31,
    name: 'ジェレミー・サルミエント',
    position: 'FW',
    back_number: 19,
    birthday: '2002/6/16',
    country: 'エクアドル代表/イングランドU18歴'
  },
  {
    id: 32,
    name: 'デニス・ウンダヴ',
    position: 'FW',
    back_number: 21,
    birthday: '1996/7/19',
    country: 'ドイツ'
  },
  {
    id: 33,
    name: 'エヴァン・ファーガソン',
    position: 'FW',
    back_number: 28,
    birthday: '2004/10/19',
    country: 'アイルランドU21代表'
  }
]
