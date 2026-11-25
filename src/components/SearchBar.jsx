import React from "react";
export default function SearchBar({
  searchText,
  setSearchText,
  selectedRole,
  setSelectedRole,
  selectedRank,
  setSelectedRank,
  selectedCountry,
  setSelectedCountry
}) {
  return (
    <div className="search-panel">
      <div className="search-input-wrap">
        <i className="bi bi-search"></i>
        <input
          type="search"
          className="form-control"
          placeholder="Name..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>

      <select
        className="form-select filter-select"
        value={selectedCountry}
        onChange={(event) => setSelectedCountry(event.target.value)}
        aria-label="Country"
      >
        <option value="USA">Country: USA</option>
        <option value="All">All countries</option>
      </select>

      <select
        className="form-select filter-select"
        value={selectedRole}
        onChange={(event) => setSelectedRole(event.target.value)}
        aria-label="Roles"
      >
        <option value="All">Roles: All</option>
        <option value="Light tank">Light tank</option>
        <option value="SPAA">SPAA</option>
        <option value="Tank destroyer">Tank destroyer</option>
        <option value="Heavy tank">Heavy tank</option>
      </select>

      <select
        className="form-select filter-select rank-select"
        value={selectedRank}
        onChange={(event) => setSelectedRank(event.target.value)}
        aria-label="Rank"
      >
        <option value="All">Rank: All</option>
        <option value="I">I</option>
        <option value="II">II</option>
        <option value="IV">IV</option>
        <option value="V">V</option>
        <option value="VI">VI</option>
        <option value="VII">VII</option>
        <option value="VIII">VIII</option>
      </select>
    </div>
  );
}
