module.exports = {
  socket: {
    server: process.env.SOCKET_SERVER || 'ASK_FOR_SERVER',
    user: process.env.SOCKET_USER || 'ASK_FOR_USER',
    pass: process.env.SOCKET_PASS || 'ASK_FOR_PASS',
  },
  topic: process.env.TOPIC || 'ASK_FOR_TOPIC'
}
