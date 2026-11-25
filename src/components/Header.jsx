import React from "react";
export default function Header() {
  return (
    <header className="portal-header">
      <div className="header-shade"></div>
      <div className="header-content">
        <div>
          <h1>Ground Vehicles</h1>
          <p>Katalog pojazdów naziemnych</p>
        </div>
        <div className="header-icons" aria-hidden="true">
          <i className="bi bi-trophy-fill"></i>
          <i className="bi bi-dice-5-fill"></i>
        </div>
      </div>
    </header>
  );
}
