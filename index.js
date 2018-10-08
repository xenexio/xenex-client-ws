const io = require('socket.io-client')
const config = require('./config.nextech')

const socket = io(config.socket.server)

socket.on('connect', () => {
  console.log('connect ok')
  socket.emit('signin', {
    user: config.socket.user,
    pass: config.socket.pass,
  })

  socket.emit('subscribe', config.topic)
  socket.off(config.topic, processData)
  socket.on(config.topic, processData)
})

function processData(data) {
  console.log('GOT:', data)
  // TODO: process data
  // { version: 1,
  //   code: '00200005',
  //   list:
  //    [ { type: 'temp',
  //        mac: 'AC233FA052B2',
  //        batt: 100,
  //        temp: -22.56,
  //        humi: 69.5 },
  //      { type: 'beacon',
  //        uuid: 'E2C56DB5DFFB48D2B060D0F5A71096E0',
  //        major: 0,
  //        minor: 0,
  //        rssi: -71 },
  //    ],
  // }
}
