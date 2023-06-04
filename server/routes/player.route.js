const express = require('express')
const router = express.Router()

const players = [
  {
    id: 1,
    char_name: 'モンキー・D・ルフィ',
    ship_name: 'サウザンド・サニー号',
    birthday: '05-05'
  },
  {
    id: 2,
    char_name: 'ロロノア・ゾロ',
    ship_name: 'サウザンド・サニー号',
    birthday: '11-11'
  },
  {
    id: 3,
    char_name: 'ナミ',
    ship_name: 'サウザンド・サニー号',
    birthday: '07-03'
  }
]

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
