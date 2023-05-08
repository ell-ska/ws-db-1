const express = require('express')

const router = express.Router()

let apiKeys = [
    'ag1683558446589',
    'lw1683558461808',
    'oc1683558465457'
]

const generateApiKey = () => {
    return String.fromCharCode(Math.random() * (122 - 97) + 97) + String.fromCharCode(Math.random() * (122 - 97) + 97) + new Date().getTime()
}

const authenticateApiKey = (apiKey, res, next) => {
    if (!apiKey) {
        return res.status(401).json({ message: 'You need to provide an api key' })
    }

    const apiKeyIsValid = apiKeys.find(key => key === apiKey)
    if (!apiKeyIsValid) {
        return res.status(403).json({ message: 'Your api key is not valid' })
    }

    next()
}

router.post('/', (req, res) => {
    const newApiKey = generateApiKey()

    apiKeys = [...apiKeys, newApiKey]
    res.json({ message: 'Successfully generated new api key', apiKey: newApiKey })
})

router.delete('/:key', (req, res) => {
    const currentKey = apiKeys.find(key => key === req.params.key)
    if (!currentKey) {
        return res.status(404).json({ message: 'Api key not found' })
    }

    apiKeys = apiKeys.filter(key => key !== currentKey)
    res.json({ message: 'Api key successfully deleted', apiKey: currentKey })
})

module.exports = {
    keys: router,
    auth: authenticateApiKey
}