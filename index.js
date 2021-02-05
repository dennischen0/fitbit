const express = require('express')
const app = express()
const port = 5000

app
  .use(express.static(path.join(__dirname, 'public')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))