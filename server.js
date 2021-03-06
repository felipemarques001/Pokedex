const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

//THE REQUEST COMING FROM FETCH WILL BE PROCESSED HERE
app.get('/pokemon/:id', async (req, res) =>{
    try {
        const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`);
        let pokemon= [
            data.name,
            data.types[0].type.name, 
            data.abilities[0].ability.name, 
            data.stats[0].base_stat,
            data.stats[1].base_stat,
            data.stats[2].base_stat,
            data.stats[5].base_stat
        ];
        return res.json(pokemon)
    } catch (error) {
        console.error(error)
    }
})


//SERVER PORT
app.listen(3000, () =>{
    console.log('Server running on port 3000')
})