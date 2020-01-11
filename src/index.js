const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const user = require("./app/controllers/userController")
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', user)


app.listen(process.env.PORT || 3000)