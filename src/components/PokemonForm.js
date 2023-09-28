import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [newPokemon, setNewPokemon] = useState({
    name: '',
    hp: '',
    sprites: {
      front: '',
      back: '',
    },
  });

  function handleInputChange(e) {
    switch(e.target.name) {
      case 'name':
        setNewPokemon({...newPokemon, name: e.target.value});
        break;
      case 'hp':
        setNewPokemon({...newPokemon, hp: e.target.value});
        break;
      case 'frontUrl': 
        setNewPokemon({...newPokemon, sprites: {front: e.target.value, back: newPokemon.sprites.back}});
        break;
      case 'backUrl': 
        setNewPokemon({...newPokemon, sprites: {front: newPokemon.sprites.front, back: e.target.value}});
        break;
    }
  }

  function handleSubmit(e) {
    //e.preventDefault();
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokemon),
    })
    .then(resp => resp.json())
    .then(pokemon => onAddPokemon(pokemon));

    setNewPokemon({
      name: '',
      hp: '',
      sprites: {
        front: '',
        back: '',
      },
    });
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name"
           value={newPokemon.name} onChange={handleInputChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" 
          value={newPokemon.hp} onChange={handleInputChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.sprites.front}
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.sprites.back}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
