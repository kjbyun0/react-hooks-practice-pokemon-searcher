import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  function handleAddPokemon(newPokemon) {
    setPokemonList([...pokemonList, newPokemon]);
  }

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(pokemons => setPokemonList([...pokemons]));
  }, []);

  // console.log('in PokemonPage, searchKey: ', searchKey);

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search onSetSearchKey={setSearchKey} />
      <br />
      <PokemonCollection pokemonList={pokemonList} searchKey={searchKey}/>
    </Container>
  );
}

export default PokemonPage;
