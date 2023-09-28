import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonList, searchKey }) {
  const filteredPokemonList = pokemonList.filter(pokemon => pokemon.name.includes(searchKey));
  // console.log('in PokemonCollection, length: ', filteredPokemonList.length, ', filteredPokemonList: ', filteredPokemonList)

  const dispPokemonList = filteredPokemonList.map(pokemon => 
    <PokemonCard key={pokemon.id} pokemon={pokemon} />);
  // console.log('in PokemonCollection, dispPokemonList length: ', dispPokemonList.length);

  return (
    <Card.Group itemsPerRow={6}>
      {dispPokemonList}
    </Card.Group>
  );
}

export default PokemonCollection;
