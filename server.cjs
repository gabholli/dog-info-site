// defining the server port
const port = 5000

// initializing installed dependencies
const express = require('express')
require('dotenv').config()
const axios = require('axios')
const app = express()
const cors = require('cors')
app.use(cors())

// listening for port 5000
app.listen(5000, () => console.log(`Server is running on ${port}`))

function getRequest(options, res, req) {

    axios.request(options)
        .then(function (response) {
            res.json(response.data)
        })
        .then(data => console.log(data))
        .catch(function (error) {
            console.error(error)
        })

}

// API request
app.get('/', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api.thedogapi.com/v1',
        headers: {
            'x-api-key': process.env.VITE_SOME_KEY,
            'X-api-host': 'api.thedogapi.com'
        }
    }

    getRequest(options, res, req)
})

app.get('/breeds', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api.thedogapi.com/v1/breeds',
        headers: {
            'x-api-key': process.env.VITE_SOME_KEY,
            'X-api-host': 'api.thedogapi.com'
        }
    }

    getRequest(options, res, req)
})

app.get('/breeds/:id', (req, res) => {
    const options = {
        method: 'GET',
        url: `https://api.thedogapi.com/v1/breeds/${req.params.id}`,
        headers: {
            'x-api-key': process.env.VITE_SOME_KEY,
            'X-api-host': 'api.thedogapi.com'
        }
    }

    getRequest(options, res, req)
})

// app.get('/images/search', (req, res) => {
//     let query = req.query
//     const options = {
//         method: 'GET',
//         url: `https://api.thedogapi.com/v1/images/search?breed_id=${query}`,
//         headers: {
//             'x-api-key': process.env.VITE_SOME_KEY,
//             'X-api-host': 'api.thedogapi.com'
//         }
//     }

//     getRequest(options, res, req)
// })

app.get('/images/search', (req, res) => {
    let query = req.query
    res.send(query)
})