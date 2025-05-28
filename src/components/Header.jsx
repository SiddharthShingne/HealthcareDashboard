import { useState } from "react";
import "../style/header.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="navbar">
      <h2 className="logo gray">
        <span style={{ color: "#00ADB5" }}>Health</span>care.
      </h2>

      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="top-right-icons">
        <img className="navImg" src="/assets/bell.png" alt="Notification Bell" />

        <img className="navImg" src="/assets/avatar.png" alt="User Avatar" />

        <img className="navImg" src="/assets/add.png" alt="Add Icon" />
      </div>
    </header>
  );
}

export default Header;
