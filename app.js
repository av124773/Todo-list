const express = require('express')
const mongoose = require('mongoose')
const todo = require('./models/todo')
const exphbs = require('express-handlebars')

// 僅在非正式環境時，使用dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const port = 3001

app.engine('hbs', exphbs({ default: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

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
  res.render('index')
})

app.listen(port, () => {
  console.log(`App is running on port:${port}`)
})