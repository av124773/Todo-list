// 引入 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引入 Todo model
const Todo = require('../../models/todo')
// 定義首頁路由
router.get('/', (req, res) => {
  Todo.find() // 取出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 model 物件轉換成乾淨的 JavaScript 資料陣列
    .sort({ _id: 'asc' })
    .then(todos => res.render('index', { todos })) // 將資料傳給 index 樣版
    .catch(error => console.error(error)) // 錯誤處理
})
// 準備引入路由模組
// 匯出路由器
module.exports = router

