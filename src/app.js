import { errorHandler, notFound } from '@lgdweb/common-express-helpers'
import { json } from 'body-parser'
import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import morgan from 'morgan'

import { inProd, hostUrl, port } from '~/config'
import { bootcampsRoutes, coursesRoutes } from '~/routes'

export const createApp = () => {
  const app = express()

  app.use(json())
  app.use(cors())

  if (!inProd) {
    app.use(morgan('dev'))
  }

  app.use('/api/bootcamps', bootcampsRoutes)
  app.use('/api/courses', coursesRoutes)
  app.all('*', notFound)
  app.use(errorHandler)

  const server = app.listen(port, '0.0.0.0', () =>
    console.info(`Server is listening on ${hostUrl}:${port}`)
  )

  return server
}
