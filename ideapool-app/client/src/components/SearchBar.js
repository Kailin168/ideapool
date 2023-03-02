import React, { useState } from 'react';


function SearchBar({ ideas }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(ideas);
  console.log(ideas);

  function handleSearch(event) {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const newFilteredItems = ideas.filter(item =>
      item.content.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    console.log(newFilteredItems.length !== 0);

    setFilteredItems(newFilteredItems);
  }

  return (
    <div>
      <input type="text" value={searchTerm} placeholder="Search..." onChange={handleSearch} />
      {searchTerm.length !== 0 &&
        <ul>
          {filteredItems.map(item => <li key={item.id}>{item.content}</li>)}
          {/* Can do a onclick here */}
        </ul>
      }
    </div>
  );
}

export default SearchBar;
