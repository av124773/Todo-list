const express = require('express')
const mongoose = require('mongoose')

// 僅在非正式環境時，使用dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const port = 3001

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB

//取得資料庫連現狀態
const db = mongoose.connection
// 連現異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongoose connected!')
})

app.get('/', (req,res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`App is running on port:${port}`)
})