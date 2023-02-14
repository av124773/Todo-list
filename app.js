const express = require('express')
const mongoose = require('mongoose')

// 僅在非正式環境時，使用dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const port = 3001

mongoose.connect(process.env.MONGODB_URI) // 設定連線到 mongoDB

app.get('/', (req,res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`App is running on port:${port}`)
})