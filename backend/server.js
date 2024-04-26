import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/messages.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
  connectToMongoDB()
})