import { useState } from "react";
import classNames from 'classnames';

function PokemonSearch(props) {
  const [isHidden, setIsHidden] = useState(false);
  const { search, onSearch, onClick } = props;
  const buttonStyle = classNames({
    'SearchButton': true,
    'isHidden': search === '',
  });

  return (
    <div className="Search">
      <input className="SearchInput" value={search} onChange={onSearch} />
      <button className={buttonStyle} onClick={onClick}>X</button>
    </div>
  )
}

export default PokemonSearch;
