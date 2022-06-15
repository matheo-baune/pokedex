const express = require('express')
const app = express()
const port = 3000

const fs = require('fs')


let database = JSON.parse(fs.readFileSync('pokedex.json'));

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile((__dirname + '/public') + "/index.html")
})

app.get('/types', (req,res) => {
    res.send(database.types.map(elt => elt.nom))
})

app.get('/pokemons/type/:type' , (req,res) => {
    res.send(getPokemonsByType(req.params.type))
})

app.get('/pokemons/name/:name', (req,res)=>{
    res.send(database.pokemons.filter(pokemon => pokemon.nom.toLowerCase().includes(req.params.name)))
})

app.listen(port, () => {
    console.log(`Pokedex listening on port ${port}`)
})


function getPokemonsByType(typeChoosen){
    return ['all','tous'].includes(typeChoosen.toLowerCase()) ?
        database.pokemons :
        database.pokemons.filter( pokemon => pokemon.types.map(type => type.nom.toLowerCase()).includes(typeChoosen.toLowerCase()))
}