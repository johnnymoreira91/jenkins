const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'server UP',
        up: true
    })
})

app.listen(8080, () => {
    console.log('server running on port 3001')
})