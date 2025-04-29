import React, { useState } from 'react';


/**
 * SearchBar Component
 * 
 * A reusable search input component that allows users to filter data based on a search term.
 * It immediately notifies the parent component of search input changes.
 * 
 * Props:
 * - onSearch (function): Callback function invoked with the current search term on every change.
 * - mode (boolean): Determines the theme (true for dark mode, false for light mode).
 * 
 * Features:
 * - Real-time search input handling.
 * - Clear button appears when text is entered, allowing for quick reset.
 * - Styled for both dark and light modes.
 */


function SearchBar({ onSearch, mode }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Notify the parent component of the search term
  };

  return (
    <div className={ mode ? "flex items-center border rounded-md p-2 w-full text-white" : "flex items-center border rounded-md p-2 w-full text-black"}>
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