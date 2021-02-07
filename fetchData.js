const axios = require('axios');
const fs = require('fs');


async function main() {
    try {
        const { data: { results } } = await axios({
            method: 'get',
            url: 'https://pokeapi.co/api/v2/pokemon?offset=400&limit=100'

        })
        let count = 1;
        const pokemonesPromises = results.map(async result => {
            const { data: { id, name, types }} = await axios({
                method: 'GET',
                url: result.url
            });

            const stringTypes = types.map(type => type.type.name);

            const dataToReturn = { id, name, types: stringTypes, urlImage: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`}

            console.log(count++, 'Pokemon atrapado: ', id, name);

            return dataToReturn;

        })

        const pokemons = await Promise.all(pokemonesPromises);

        fs.writeFile("pokemon400.json", JSON.stringify(pokemons, null, 2), function (err) {
            if (err) {
                console.log(err);
            }
        });

        // console.log(results);
    } catch (error) {
        console.log(error);
    }

}

function mergePokemons() {
    const idxs = [0, 1, 2, 3, 4];

    let pokemons = [];

    idxs.map(idx => {
        const subPokemons = require(`../pokemon${idx}00.json`)

        pokemons = [...pokemons, ...subPokemons]
    })

    fs.writeFile("pokemons.json", JSON.stringify(pokemons, null, 2), function (err) {
        if (err) {
            console.log(err);
        }
    });
}

mergePokemons()