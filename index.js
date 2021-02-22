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

app.get('/attendClass',async(req,res) => {
const  data = await   handleRequestForOnlineClass()
 res.send(data)
})


app.listen(PORT, () => console.log('server has started'))
