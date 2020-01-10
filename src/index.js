const express = require('express')
const bodyParser = require('body-parser')

const user = require("./app/controllers/userController")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', user)


app.listen(3003)