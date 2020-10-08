const express = require('express')

const app = express()

app.use(express.json())

const koders = [
  {
    id: 1,
    name: 'Mauro'
  },
  {
    id: 2,
    name: 'Ivan'
  },
  {
    id: 3,
    name: 'Lucho'
  }
]

app.get('/koders', (request, response) => {
  response.json({
    succes: true,
    data: {
      koders: koders
    }
  })
})

app.post('/koders', (request, response) => {
  console.log(request.body)
  const id = koders.length + 1
  const name = request.body.name
  koders.push({
    id: id,
    name: name
  })
  response.json(request.body)
})

app.listen(8080, () => {
  console.log('Server is listening in port 8080')
})
