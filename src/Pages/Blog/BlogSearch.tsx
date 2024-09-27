import React, { useState } from "react";
import "../../Components/Search/Search.css"

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const BlogSearch: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm); // Trigger the search when the form is submitted
  };

  return (
    <section className="section search">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search blogs..."
            className="search-input"
          />
        </div>
        <div>
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
      </form>
    </section>
  );
};

export default BlogSearch;
