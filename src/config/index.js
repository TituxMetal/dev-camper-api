export const mode = process.env.NODE_ENV || 'development'
export const mongoUri = process.env.MONGO_URI
export const port = parseInt(process.env.PORT, 10) || 5000
