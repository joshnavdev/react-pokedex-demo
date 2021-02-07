function PokemonSearch(props) {
  const { search, onSearch, onClick } = props;
  return (
    <div className="Search">
      <input className="SearchInput" value={search} onChange={onSearch} />
      <button className="SearchButton" onClick={onClick}>X</button>
    </div>
  )
}

export default PokemonSearch;
