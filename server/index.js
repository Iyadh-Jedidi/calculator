import express from 'express'
import routes from './src/routes/routes.js'
import { PORT } from './src/config/env.js'
import bodyParser from 'body-parser'
import cors from 'cors'


const app = express();

app.use(bodyParser.json());

app.use('/api', cors(), routes);


app.listen(PORT, () => {
    console.log(`✓ - Successfully started application on port ${PORT}`)
})