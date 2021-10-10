const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors');

app.listen(3000, () =>{
    console.log('Server running on port 3000')
})

app.use(cors())

app.get('/pokemon/:id', async (req, res) =>{
    try {
        const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`);
        let pokemon= [data.name, data.types[0].type.name];
        return res.json(pokemon)
    } catch (error) {
        console.error(error)
    }
})


