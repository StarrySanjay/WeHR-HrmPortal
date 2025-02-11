import { useState } from "react";
import SearchIcon from "../../assets/icons/Topbar/Search.svg";
import "./Searchbar.css";

const Searchbar = ({ placeholder, onSearch }) => {
  const [query, setquery] = useState("");

  const handlesearch = (e) => {
    setquery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder={placeholder || "Type to Search..."}
        value={query}
        onChange={handlesearch}
        className="search-input"
      />
      <span className="search-icon">
        <img src={SearchIcon} alt="search" />
      </span>
    </div>
  );
};

export default Searchbar;
