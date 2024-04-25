const pokemon = [
    { name: 'Pikachu', type: 'Electric', level: 25 },
    { name: 'Bulbasaur', type: 'Grass', level: 20 },
    { name: 'Charizard', type: 'Fire', level: 36 },
    { name: 'Squirtle', type: 'Water', level: 18 },
    { name: 'Jigglypuff', type: 'Normal', level: 22 },
];
//array para encontrar todos los Pokémon de tipo "Fuego"
const fireTypePokemon = pokemon.filter(poke => poke.type === 'Fire');
console.log("Pokémon de tipo 'Fuego':", fireTypePokemon);

//array para encontrar todos los Pokémon que tienen un nivel superior a 30
const highLevelPokemon = pokemon.filter(poke => poke.level > 30);
console.log("Pokémon con nivel superior a 30:", highLevelPokemon);

//cantidad total de Pokémon
const totalPokemonCount = pokemon.length;
console.log("Cantidad total de Pokémon:", totalPokemonCount);
