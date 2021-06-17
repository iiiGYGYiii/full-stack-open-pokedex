const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000
// random comment
app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.status(200).send('ok').end()
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
