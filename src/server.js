import express from 'express'
import morgan from 'morgan'

import { mode } from './config'
import { bootcampsRoutes, coursesRoutes } from './routes'

const server = express()

if (mode === 'development') {
  server.use(morgan('dev'))
}

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use('/api/bootcamps', bootcampsRoutes)
server.use('/api/courses', coursesRoutes)

export default server
