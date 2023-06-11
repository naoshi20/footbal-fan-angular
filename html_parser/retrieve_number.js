const { parse } = require('node-html-parser')
const fs = require('fs')

const source = fs.readFileSync('./source_html/2223.html')

const root = parse(source)

const aTags = root.getElementsByTagName('a') //.slice(0, 10)

const rows = []
for (aTag of aTags) {
  const playerName = aTag.text
  const imgTag = aTag.getElementsByTagName('img')[0]
  const playerId = imgTag.getAttribute('data-player')
  rows.push([playerName, playerId])
}

let csvContent = ''
rows.forEach(function (rowArray) {
  let row = rowArray.join(',')
  csvContent += row + '\r\n'
})

fs.appendFile('./outputs/2223.csv', csvContent, function (err) {
  if (err) throw err
  console.log('Saved!')
})
