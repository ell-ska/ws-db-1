const express = require('express')
const data = require('../data')

const router = express.Router()
let movies = data

const checkRequiredFields = (input) => {
    const requiredFields = ['Title', 'Year', 'Released', 'Genre']
    return requiredFields.filter(required => !(required in input))
    // FIX: no empty values, ''
}

const validateDates = (dates) => {
    return dates.filter(date => isNaN(Date.parse(date)))
}

router.get('/', (req, res) => {
    res.json(movies)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const currentMovie = movies.find(movie => movie.imdbID === id)
    if (!currentMovie) {
        return res.status(404).json({ message: 'Movie not found' })
    }

    res.json(currentMovie)
})

let id = 1
router.post('/', (req, res) => {
    const input = req.body.movie
    if (!input) {
        return res.status(400).json({ message: 'Missing information about the new movie' })
    }

    const missingFields = checkRequiredFields(input)
    if (missingFields.length > 0) {
        return res.status(400).json({ message: 'Missing required information', missingInformation: missingFields })
    }

    const invalidDates = validateDates([input.Year, input.Released])
    if (invalidDates.length > 0) {
        return res.status(400).json({ message: 'Not a valid date', invalidDates: invalidDates })
    }

    const newMovie = {
        id: id.toString(),
        ...input
    }
    id++
    movies = [...movies, newMovie]
    res.json({ message: `${newMovie.Title} was successfully added`, movie: newMovie })
})
// {
//     "movie": {
//         "Title": "James Bond: Hello world",
//         "Year": "2023",
//         "Released": "8 May 2023",
//         "Genre":  "Action, Adventure"
//     }
// }

router.put('/:id', (req, res) => {
    const id = req.params.id
    const index = movies.findIndex(movie => movie.imdbID === id)
    if (index === -1) {
        return res.status(404).json({ message: 'Movie not found' })
    }
    
    const changes = req.body.movie
    if (!changes) {
        return res.status(400).json({ message: 'No changes made' })
    }

    const missingFields = checkRequiredFields(changes)
    if (missingFields.length > 0) {
        return res.status(400).json({ message: 'Missing required information', missingInformation: missingFields })
    }

    const invalidDates = validateDates([changes.Year, changes.Released])
    if (invalidDates.length > 0) {
        return res.status(400).json({ message: 'Not a valid date', invalidDates: invalidDates })
    }

    movies[index] = {...movies[index], ...changes}
    res.json({ message: 'The movie was successfully updated', movie: movies[index] })
})
// tt1692489

router.delete('/:id', (req, res) => {
    const id = req.params.id
    const currentMovie = movies.find(movie => movie.imdbID === id)
    if (!currentMovie) {
        return res.status(404).json({ message: 'Movie not found' })
    }

    movies = movies.filter(movie => movie !== currentMovie)
    res.json({ message: 'The movie was successfully deleted', movie: currentMovie })
})
// tt2604350

module.exports = router