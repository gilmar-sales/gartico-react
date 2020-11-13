const express = require('express')
const cors = require('cors')

const routes = require('./routes')

const app = express()
const host = process.env.APP_URL || 'localhost'
const port = process.env.PORT || 3333

app.use(express.json())
app.use(cors())
app.use('/api', routes)

app.listen(port, host, () => {
	console.log(`Server running on http://${host}:${port}`)
})
