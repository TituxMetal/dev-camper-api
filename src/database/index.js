import mongoose from 'mongoose'

import { mongoUri } from '../config'

const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(mongoUri, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    const dbUri = `mongodb://${connection.host}:${connection.port}/${connection.name}`

    process.stdout.write(`Database connected at: ${dbUri}\n`)
  } catch (error) {
    process.stdout.write(`Database error: ${error}\n`)
  }
}

export default connectDb
