function PokemonCard(props) {
  const { pokemon } = props;

  return (
    <div className="Card">
      <div className="CardMedia">
        <img src={pokemon.urlImage} />
      </div>
      <div className="CardContent">
        <h2>{pokemon.name}</h2>
        <p>Tipos: {pokemon.types.join(', ')}</p>
      </div>
    </div>
  )
}

export default PokemonCard;
