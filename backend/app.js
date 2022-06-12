const express = require('express')
const restful = require('node-restful')

const server = express()
const mongoose = restful.mongoose

const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://db/mydb')

server.use(bodyParser.urlencoded({extends:true}))
server.use(bodyParser.json())
server.use(cors())

const ObjectReceived = restful.model('ObjReceived', {
   received: { type: object, required: true}
})

ObjectReceived.methods(['get', 'post'])

ObjectReceived.register(server, '/obj')
server.listen(3000)