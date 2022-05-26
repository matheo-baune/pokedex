const express = require('express')
const api = express()
const port = 3000

const fs = require('fs')


let database = JSON.parse(fs.readFileSync('pokedex.json'));

api.use('/assets', express.static(__dirname + '/public'));

api.get('/', (req, res) => {
    res.sendFile((__dirname + '/public') + "/index.html")
})

api.get('/types', (req,res) => {
    res.send(database.types.map(elt => elt.nom))
})

api.get('/pokemons/:type' , (req,res) => {
    res.send(getPokemonsByType(req.params.type))
})

api.listen(port, () => {
    console.log(`Pokedex listening on port ${port}`)
})


function getPokemonsByType(typeChoosen){
    return typeChoosen === "all" ?
        database.pokemons :
        database.pokemons.filter( pokemon => pokemon.types.map(type => type.nom).includes(typeChoosen))
}