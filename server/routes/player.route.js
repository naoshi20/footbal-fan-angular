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
    name: 'デイヴィッド・モイーズ',
    belongings: 'ウエストハム',
    position: '監督',
    back_number: '',
    country: 'スコットランド',
    representative_flag: 'FALSE',
    birthday: '1963/4/25',
    img: ''
  },
  {
    id: 2,
    name: 'ルカシュ・ファビアンスキ',
    belongings: 'ウエストハム',
    position: 'GK',
    back_number: 1,
    country: 'ポーランド',
    representative_flag: 'TRUE',
    birthday: '1985/4/18',
    img: ''
  },
  {
    id: 3,
    name: 'アルフォンス・アレオラ',
    belongings: 'ウエストハム',
    position: 'GK',
    back_number: 23,
    country: 'フランス',
    representative_flag: 'TRUE',
    birthday: '1993/2/27',
    img: ''
  },
  {
    id: 4,
    name: 'ダレン・ランドルフ',
    belongings: 'ウエストハム',
    position: 'GK',
    back_number: 38,
    country: 'アイルランド',
    representative_flag: 'TRUE',
    birthday: '1987/5/12',
    img: ''
  },
  {
    id: 5,
    name: 'クリスティアン・ヘギー',
    belongings: 'ウエストハム',
    position: 'DF',
    back_number: 2,
    country: 'ハンガリー',
    representative_flag: 'FALSE',
    birthday: '2002/9/24',
    img: ''
  },
  {
    id: 6,
    name: 'ベン・ジョンソン',
    belongings: 'ウエストハム',
    position: 'DF',
    back_number: 4,
    country: 'イングランド',
    representative_flag: 'TRUE',
    birthday: '2000/1/24',
    img: ''
  },
  {
    id: 7,
    name: 'アーロン・クレスウェル',
    belongings: 'ウエストハム',
    position: 'DF',
    back_number: 5,
    country: 'イングランド',
    representative_flag: 'TRUE',
    birthday: '1989/12/15',
    img: ''
  },
  {
    id: 8,
    name: 'クルト・ズーマ',
    belongings: 'ウエストハム',
    position: 'DF',
    back_number: 6,
    country: 'フランス',
    representative_flag: 'TRUE',
    birthday: '1994/10/27',
    img: ''
  },
  {
    id: 9,
    name: 'ヴラディミール・ツォウファル',
    belongings: 'ウエストハム',
    position: 'DF',
    back_number: 29,
    country: 'チェコ',
    representative_flag: 'TRUE',
    birthday: '1992/8/22',
    img: ''
  },
  {
    id: 10,
    name: 'クレイグ・ドーソン',
    belongings: 'ウエストハム',
    position: 'DF',
    back_number: 30,
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '1990/5/6',
    img: ''
  },
  {
    id: 11,
    name: 'アンジェロ・オグボンナ',
    belongings: 'ウエストハム',
    position: 'DF',
    back_number: 34,
    country: 'イタリア',
    representative_flag: 'TRUE',
    birthday: '1988/5/23',
    img: ''
  },
  {
    id: 12,
    name: 'ティロ・ケーラー',
    belongings: 'ウエストハム',
    position: 'DF',
    back_number: 55,
    country: 'ドイツ',
    representative_flag: 'FALSE',
    birthday: '1996/9/21',
    img: ''
  },
  {
    id: 13,
    name: 'ナイーフ・アゲール',
    belongings: 'ウエストハム',
    position: 'DF',
    back_number: '',
    country: 'モロッコ',
    representative_flag: 'FALSE',
    birthday: '1996/3/30',
    img: ''
  },
  {
    id: 14,
    name: 'エメルソン',
    belongings: 'ウエストハム',
    position: 'DF',
    back_number: '',
    country: 'ブラジル',
    representative_flag: 'FALSE',
    birthday: '1994/8/3',
    img: ''
  },
  {
    id: 15,
    name: 'ハリソン・アシュビー',
    belongings: 'ウエストハム',
    position: 'DF',
    back_number: '',
    country: 'スコットランド',
    representative_flag: 'TRUE',
    birthday: '2001/11/14',
    img: ''
  },
  {
    id: 16,
    name: 'ジャマル・バプティスト',
    belongings: 'ウエストハム',
    position: 'MF',
    back_number: 7,
    country: 'イングランド',
    representative_flag: 'TRUE',
    birthday: '2003/11/11',
    img: ''
  },
  {
    id: 17,
    name: 'リーガン・クレイトン',
    belongings: 'ウエストハム',
    position: 'MF',
    back_number: 10,
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '2004/11/11',
    img: ''
  },
  {
    id: 18,
    name: 'パブロ・フォルナルス',
    belongings: 'ウエストハム',
    position: 'MF',
    back_number: 13,
    country: 'スペイン',
    representative_flag: 'TRUE',
    birthday: '1996/2/22',
    img: ''
  },
  {
    id: 19,
    name: 'マヌエル・ランシーニ',
    belongings: 'ウエストハム',
    position: 'MF',
    back_number: 14,
    country: 'アルゼンチン',
    representative_flag: 'TRUE',
    birthday: '1993/2/15',
    img: ''
  },
  {
    id: 20,
    name: 'ルーカス・パケタ',
    belongings: 'ウエストハム',
    position: 'MF',
    back_number: 15,
    country: 'ブラジル',
    representative_flag: 'FALSE',
    birthday: '1997/8/27',
    img: ''
  },
  {
    id: 21,
    name: 'フリン・ダウンズ',
    belongings: 'ウエストハム',
    position: 'MF',
    back_number: 20,
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '1999/1/20',
    img: ''
  },
  {
    id: 22,
    name: 'トマーシュ・ソーチェク',
    belongings: 'ウエストハム',
    position: 'MF',
    back_number: 22,
    country: 'チェコ',
    representative_flag: 'TRUE',
    birthday: '1995/2/27',
    img: ''
  },
  {
    id: 23,
    name: 'コナー・コヴェントリー',
    belongings: 'ウエストハム',
    position: 'MF',
    back_number: 25,
    country: 'アイルランド',
    representative_flag: 'TRUE',
    birthday: '2000/3/25',
    img: ''
  },
  {
    id: 24,
    name: 'デクラン・ライス',
    belongings: 'ウエストハム',
    position: 'MF',
    back_number: 27,
    country: 'イングランド',
    representative_flag: 'TRUE',
    birthday: '1999/1/14',
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p204480.png'
  },
  {
    id: 25,
    name: 'ピエール・エクワー',
    belongings: 'ウエストハム',
    position: 'MF',
    back_number: '',
    country: 'フランス',
    representative_flag: 'FALSE',
    birthday: '2002/1/15',
    img: ''
  },
  {
    id: 26,
    name: 'カマライ・スワイアー',
    belongings: 'ウエストハム',
    position: 'MF',
    back_number: '',
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '2002/12/4',
    img: ''
  },
  {
    id: 27,
    name: 'フレディー・ポッツ',
    belongings: 'ウエストハム',
    position: 'MF',
    back_number: '',
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '2003/9/12',
    img: ''
  },
  {
    id: 28,
    name: 'キーナン・フォーソン',
    belongings: 'ウエストハム',
    position: 'MF',
    back_number: '',
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '2001/10/16',
    img: ''
  },
  {
    id: 29,
    name: 'オリバー・スカールズ',
    belongings: 'ウエストハム',
    position: 'FW',
    back_number: 11,
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '2005/12/12',
    img: ''
  },
  {
    id: 30,
    name: 'ジャンルカ・スカマッカ',
    belongings: 'ウエストハム',
    position: 'FW',
    back_number: 18,
    country: 'イタリア',
    representative_flag: 'FALSE',
    birthday: '1999/1/1',
    img: ''
  },
  {
    id: 31,
    name: 'ミカイル・アントニオ',
    belongings: 'ウエストハム',
    position: 'FW',
    back_number: 19,
    country: 'ジャマイカ',
    representative_flag: 'TRUE',
    birthday: '1990/3/28',
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p57531.png'
  },
  {
    id: 32,
    name: 'マクスウェル・コルネ',
    belongings: 'ウエストハム',
    position: 'FW',
    back_number: 21,
    country: 'コートジボワール',
    representative_flag: 'FALSE',
    birthday: '1996/9/27',
    img: ''
  },
  {
    id: 33,
    name: 'ジャロッド・ボーウェン',
    belongings: 'ウエストハム',
    position: 'FW',
    back_number: 28,
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '1996/12/20',
    img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p178186.png'
  },
  {
    id: 34,
    name: 'サイド・ベンラーマ',
    belongings: 'ウエストハム',
    position: 'FW',
    back_number: 22,
    country: 'アルジェリア',
    representative_flag: 'TRUE',
    birthday: '1995/8/10',
    img: ''
  },
  {
    id: 35,
    name: 'ディビン・ムバマ',
    belongings: 'ウエストハム',
    position: 'FW',
    back_number: 72,
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '2004/10/25',
    img: ''
  },
  {
    id: 36,
    name: 'ロベルト・デ・ツェルビ',
    belongings: 'ブライトン',
    position: '監督',
    back_number: '',
    country: 'イタリア',
    representative_flag: 'FALSE',
    birthday: '1979/6/6',
    img: ''
  },
  {
    id: 37,
    name: 'ロベルト・サンチェス',
    belongings: 'ブライトン',
    position: 'GK',
    back_number: 1,
    country: 'スペイン',
    representative_flag: 'TRUE',
    birthday: '1997/11/18',
    img: ''
  },
  {
    id: 38,
    name: 'ジェイソン・スティール',
    belongings: 'ブライトン',
    position: 'GK',
    back_number: 23,
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '1990/8/18',
    img: ''
  },
  {
    id: 39,
    name: 'トーマス・マクギル',
    belongings: 'ブライトン',
    position: 'GK',
    back_number: 38,
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '2000/3/25',
    img: ''
  },
  {
    id: 40,
    name: 'タリック・ランプティ',
    belongings: 'ブライトン',
    position: 'DF',
    back_number: 2,
    country: 'イングランド',
    representative_flag: 'TRUE',
    birthday: '2000/9/30',
    img: ''
  },
  {
    id: 41,
    name: 'アダム・ウェブスター',
    belongings: 'ブライトン',
    position: 'DF',
    back_number: 4,
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '1995/1/4',
    img: ''
  },
  {
    id: 42,
    name: 'ルイス・ダンク',
    belongings: 'ブライトン',
    position: 'DF',
    back_number: 5,
    country: 'イングランド',
    representative_flag: 'TRUE',
    birthday: '1991/11/21',
    img: ''
  },
  {
    id: 43,
    name: 'リーヴァイ・コルウィル',
    belongings: 'ブライトン',
    position: 'DF',
    back_number: 6,
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '2003/2/26',
    img: ''
  },
  {
    id: 44,
    name: 'ヤン・ポール・ヘッケ',
    belongings: 'ブライトン',
    position: 'DF',
    back_number: 29,
    country: 'オランダ',
    representative_flag: 'FALSE',
    birthday: '2000/6/8',
    img: ''
  },
  {
    id: 45,
    name: 'ペルビス・エストゥピニャン',
    belongings: 'ブライトン',
    position: 'DF',
    back_number: 30,
    country: 'エクアドル',
    representative_flag: 'FALSE',
    birthday: '1998/1/21',
    img: ''
  },
  {
    id: 46,
    name: 'ジョエル・フェルトマン',
    belongings: 'ブライトン',
    position: 'DF',
    back_number: 34,
    country: 'オランダ',
    representative_flag: 'TRUE',
    birthday: '1992/1/15',
    img: ''
  },
  {
    id: 47,
    name: 'エド・ターンズ',
    belongings: 'ブライトン',
    position: 'DF',
    back_number: 55,
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '2002/10/18',
    img: ''
  },
  {
    id: 48,
    name: 'ジェイムズ・ファーロング',
    belongings: 'ブライトン',
    position: 'DF',
    back_number: '',
    country: 'アイルランド',
    representative_flag: 'FALSE',
    birthday: '2002/6/7',
    img: ''
  },
  {
    id: 49,
    name: 'オデル・オフィアー',
    belongings: 'ブライトン',
    position: 'DF',
    back_number: '',
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '2002/10/26',
    img: ''
  },
  {
    id: 50,
    name: 'アンテフ・ツォングイ',
    belongings: 'ブライトン',
    position: 'DF',
    back_number: '',
    country: 'ベルギー',
    representative_flag: 'FALSE',
    birthday: '2002/12/30',
    img: ''
  },
  {
    id: 51,
    name: 'ソリー・マーチ',
    belongings: 'ブライトン',
    position: 'MF',
    back_number: 7,
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '1994/7/20',
    img: ''
  },
  {
    id: 52,
    name: 'アレクシス・マクアリスター',
    belongings: 'ブライトン',
    position: 'MF',
    back_number: 10,
    country: 'アルゼンチン',
    representative_flag: 'TRUE',
    birthday: '1998/12/24',
    img: ''
  },
  {
    id: 53,
    name: 'パスカル・グロス',
    belongings: 'ブライトン',
    position: 'MF',
    back_number: 13,
    country: 'ドイツ',
    representative_flag: 'FALSE',
    birthday: '1991/6/15',
    img: ''
  },
  {
    id: 54,
    name: 'アダム・ララーナ',
    belongings: 'ブライトン',
    position: 'MF',
    back_number: 14,
    country: 'イングランド',
    representative_flag: 'TRUE',
    birthday: '1988/5/10',
    img: ''
  },
  {
    id: 55,
    name: 'ヤクブ・モダー',
    belongings: 'ブライトン',
    position: 'MF',
    back_number: 15,
    country: 'ポーランド',
    representative_flag: 'TRUE',
    birthday: '1999/4/7',
    img: ''
  },
  {
    id: 56,
    name: 'フリオ・エンシソ',
    belongings: 'ブライトン',
    position: 'MF',
    back_number: 20,
    country: 'パラグアイ',
    representative_flag: 'FALSE',
    birthday: '2004/1/23',
    img: ''
  },
  {
    id: 57,
    name: '三笘 薫',
    belongings: 'ブライトン',
    position: 'MF',
    back_number: 22,
    country: '日本',
    representative_flag: 'TRUE',
    birthday: '1997/5/20',
    img: ''
  },
  {
    id: 58,
    name: 'モイセス・カイセド',
    belongings: 'ブライトン',
    position: 'MF',
    back_number: 25,
    country: 'エクアドル',
    representative_flag: 'TRUE',
    birthday: '2001/11/2',
    img: ''
  },
  {
    id: 59,
    name: 'ビリー・ギルモア',
    belongings: 'ブライトン',
    position: 'MF',
    back_number: 27,
    country: 'スコットランド',
    representative_flag: 'FALSE',
    birthday: '2001/6/11',
    img: ''
  },
  {
    id: 60,
    name: 'ジャック・ヒンチー',
    belongings: 'ブライトン',
    position: 'MF',
    back_number: '',
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '2003/1/30',
    img: ''
  },
  {
    id: 61,
    name: 'キャメロン・ピピオン',
    belongings: 'ブライトン',
    position: 'MF',
    back_number: '',
    country: 'オーストラリア',
    representative_flag: 'FALSE',
    birthday: '2002/9/23',
    img: ''
  },
  {
    id: 62,
    name: 'ジャック・スポング',
    belongings: 'ブライトン',
    position: 'MF',
    back_number: '',
    country: 'イングランド',
    representative_flag: 'FALSE',
    birthday: '2002/2/4',
    img: ''
  },
  {
    id: 63,
    name: 'アンディー・モーラン',
    belongings: 'ブライトン',
    position: 'MF',
    back_number: '',
    country: 'アイルランド',
    representative_flag: 'TRUE',
    birthday: '2003/10/15',
    img: ''
  },
  {
    id: 64,
    name: 'レアンドロ・トロサール',
    belongings: 'ブライトン',
    position: 'FW',
    back_number: 11,
    country: 'ベルギー',
    representative_flag: 'TRUE',
    birthday: '1994/12/4',
    img: ''
  },
  {
    id: 65,
    name: 'ダニー・ウェルベック',
    belongings: 'ブライトン',
    position: 'FW',
    back_number: 18,
    country: 'イングランド',
    representative_flag: 'TRUE',
    birthday: '1990/11/26',
    img: ''
  },
  {
    id: 66,
    name: 'ジェレミー・サルミエント',
    belongings: 'ブライトン',
    position: 'FW',
    back_number: 19,
    country: 'エクアドル',
    representative_flag: 'TRUE',
    birthday: '2002/6/16',
    img: ''
  },
  {
    id: 67,
    name: 'デニス・ウンダヴ',
    belongings: 'ブライトン',
    position: 'FW',
    back_number: 21,
    country: 'ドイツ',
    representative_flag: 'FALSE',
    birthday: '1996/7/19',
    img: ''
  },
  {
    id: 68,
    name: 'エヴァン・ファーガソン',
    belongings: 'ブライトン',
    position: 'FW',
    back_number: 28,
    country: 'アイルランド',
    representative_flag: 'TRUE',
    birthday: '2004/10/19',
    img: ''
  }
]
