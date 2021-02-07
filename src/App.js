import { useState } from 'react';
import './App.css';
import PokemonSearch from './PokemonSearch';
import PokemonCards from './PokemonCards';
import pokemonsData from './pokemons.json'

function App() {
  const [search, setSearch] = useState('');

  const onSearch = (ev) => {
    const value = ev.target.value;
    setSearch(value);
  }

  const onClick = (ev) => {
    ev.preventDefault();

    setSearch('');
  }

  return (
    <div className="App">
      <PokemonSearch
        search={search}
        onSearch={onSearch}
        onClick={onClick}
      />
      <PokemonCards filter={search} data={pokemonsData}/>
    </div>
  );
}

export default App;
