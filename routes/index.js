// 引入 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引入 home 模組
const home = require('./modules/home')
// 引入 todos 模組
const todos = require('./modules/todos')
// 將網址結構符合 / 字串的 request 導向 home 模組
router.use('/', home)
router.use('/todos', todos)
// 準備引入路由模組
// 匯出路由器
module.exports = router