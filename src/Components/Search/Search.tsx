import React, { useState } from "react";
import "./Search.css";

interface SearchProps {
  onSearch: (searchTerm: string) => void; 
}

const SearchComponent: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); 
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  
  };

  return (
    <section className="section search">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search jobs..."
          className="search-input"
        />
      </form>
      <button type="submit" className="search-button">
        Search
      </button>
    </section>
  );
};

export default SearchComponent;
