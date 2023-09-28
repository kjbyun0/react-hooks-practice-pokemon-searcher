import React, { useState } from "react";

function Search({ onSetSearchKey }) {
  const [key, setKey] = useState('');

  function handleKeyChange(e) {
    setKey(e.target.value);
    onSetSearchKey(e.target.value);
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={key} onChange={handleKeyChange} />
        <i className="search icon"/>
      </div>
    </div>
  );
}

export default Search;
