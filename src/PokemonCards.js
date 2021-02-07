import PokemonCard from "./PokemonCard";

const renderPokemons = pokemons => {
  return pokemons.map(pokemon => (
    <PokemonCard key={pokemon.id} pokemon={pokemon} />
  ));
}

function PokemonCards(props) {
  const { data, filter } = props;
  const datafilter = data.filter(pokemon => {
    const lowerFilter = filter.toLowerCase();

    if (lowerFilter.startsWith('type:')) {
      const newFilter = lowerFilter.split(':').slice(1).join('');
      if(newFilter === '') return false;
      return pokemon.types.join(', ').includes(newFilter);
    }

    return pokemon.name.includes(lowerFilter);
  });

  return (
    <div className="Cards">
      {renderPokemons(datafilter)}
    </div>
  )
}

export default PokemonCards;
