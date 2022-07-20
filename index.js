const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'server UP',
        up: true
    })
})

app.get('/about', (req, res) => {
    res.status(200).json({
        message: 'bbahhhhhhhhhhhhhhhhhh',
        up: true
    })
})

app.get('/teste', (req, res) => {
    res.status(200).json({
        message: 'teste',
        up: true
    })
})

app.listen(3001, () => {
    console.log('server running on port 3001')
})