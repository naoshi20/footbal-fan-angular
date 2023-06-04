// const Player = require('./models/player.model')

// class SampleDb {
//   constructor() {
//     this.payers = [
//       {
//         id: 1,
//         char_name: 'モンキー・D・ルフィ',
//         ship_name: 'サウザンド・サニー号',
//         birthday: '05-05'
//       },
//       {
//         id: 2,
//         char_name: 'ロロノア・ゾロ',
//         ship_name: 'サウザンド・サニー号',
//         birthday: '11-11'
//       },
//       {
//         id: 3,
//         char_name: 'ナミ',
//         ship_name: 'サウザンド・サニー号',
//         birthday: '07-03'
//       }
//     ]
//   }

//   async initDb() {
//     await this.cleanDb()
//     this.pushPlayersToDb()
//   }

//   async cleanDb() {
//     await Player.deleteMany({})
//   }

//   pushPlayersToDb() {
//     this.players.forEach(player => {
//       const newPlayer = new Player(player)
//       newPlayer.save()
//     })
//   }

//   seeDb() {
//     this.pushPlayersToDb()
//   }
// }

// module.exports = SampleDb
