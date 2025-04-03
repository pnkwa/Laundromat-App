import express from 'express'
import http from 'http'
import socketIo from 'socket.io'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new socketIo.Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

const sendLineMessage = async (groupId: string, message: string) => {
  const lineToken = process.env.LINE_ACCESS_TOKEN
  const url = 'https://api.line.me/v2/bot/message/push'
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${lineToken}`,
  }

  const body = JSON.stringify({
    to: groupId,
    messages: [{ type: 'text', text: message }],
  })

  await fetch(url, {
    method: 'POST',
    headers,
    body,
  })
}

io.on('connection', (socket) => {
  socket.on('startWashing', (duration: number) => {
    let timeLeft = duration

    const interval = setInterval(() => {
      timeLeft--
      io.emit('updateTime', { timeLeft })
      if (timeLeft === 60) {
        const groupId = process.env.LINE_GROUP_ID || ''
        sendLineMessage(groupId, '⏳ เหลือ 1 นาที เตรียมรับผ้า!')
      }

      if (timeLeft <= 0) {
        clearInterval(interval)
        io.emit('updateTime', { timeLeft: 0 })
      }
    }, 1000)
  })
})

const port = process.env.PORT || 3002
server.listen(port, () => console.log(`🚀 Server is running on port ${port}`))
