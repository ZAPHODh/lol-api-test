import express from 'express'
import 'dotenv/config'
import helmet from 'helmet'
import router from './routes'
import cors from 'cors'
import { corsOpptions } from './lib/config/corsOptions'

const app = express()
const port = process.env.PORT

app.use(helmet())
app.use(cors(corsOpptions))

app.use('/', express.json(), router)

app.listen(port, () => {
    console.log(`Server running on port`, port)
})
