import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Notify the parent component of the search term
  };

  return (
    <div className="flex items-center border rounded-md p-2 w-full">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className="flex-1 border-none outline-none w-full"
      />
      {searchTerm && (
        <button
          onClick={() => {
            setSearchTerm('');
            onSearch('');
          }}
          className="ml-2 text-gray-500 hover:text-gray-700"
        >
          &#x2715; {/* Unicode for a cross (X) */}
        </button>
      )}
    </div>
  );
}

export default SearchBar;