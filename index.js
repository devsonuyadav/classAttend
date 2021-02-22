const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const handleRequestForOnlineClass = require('./puppeteer')
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res) => {
  res.send('hey there')
})

app.get('/attendClass', (req,res) => {
  handleRequestForOnlineClass()
  res.send('Bot is trying to attend your class')
})


app.listen(PORT, () => console.log('server has started'))
