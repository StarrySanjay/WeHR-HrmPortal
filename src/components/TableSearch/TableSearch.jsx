import { useState } from "react";
import SearchIcon from "../../assets/icons/Tables/TableSearch.svg";
import "./TableSearch.css";

const TableSearch = ({ placeholder, onSearch }) => {
  const [query, setquery] = useState("");

  const handlesearch = (e) => {
    setquery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="tableSearch-container">
      <span className="tableSearch-icon">
        <img src={SearchIcon} alt="search" />
      </span>
      <input
        type="text"
        placeholder={placeholder || "Type to Search..."}
        value={query}
        onChange={handlesearch}
        className="tableSearch-input"
      />
    </div>
  );
};

export default TableSearch;
