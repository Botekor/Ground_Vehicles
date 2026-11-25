import React from "react";
function RoleLabel({ role }) {
  let iconClass = "role-light";
  let icon = "bi-dash-lg";

  if (role === "SPAA") {
    iconClass = "role-spaa";
    icon = "bi-bar-chart-fill";
  } else if (role === "Tank destroyer") {
    iconClass = "role-destroyer";
    icon = "bi-chevron-compact-up";
  } else if (role === "Heavy tank") {
    iconClass = "role-heavy";
    icon = "bi-truck-front-fill";
  }

  return (
    <span className={`role-label ${iconClass}`}>
      <i className={`bi ${icon}`}></i>
      {role}
    </span>
  );
}

export default function VehicleTable({ vehicles }) {
  return (
    <div className="table-responsive vehicle-table-wrap">
      <table className="table table-dark table-hover align-middle vehicle-table mb-0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Main role</th>
            <th className="country-heading"><i className="bi bi-globe-americas"></i></th>
            <th>Rank</th>
            <th>BR</th>
            <th>Purchase</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.length > 0 ? (
            vehicles.map((vehicle, index) => (
              <tr key={`${vehicle[0]}-${index}`}>
                <td className="vehicle-name">
                  <span className="vehicle-mark" aria-hidden="true">▰</span>
                  {vehicle[0]}
                </td>
                <td><RoleLabel role={vehicle[1]} /></td>
                <td className="country-cell" aria-label="United States">🇺🇸</td>
                <td className="rank-cell">{vehicle[2]}</td>
                <td className="br-cell">{vehicle[3]}</td>
                <td className="purchase-cell">{vehicle[4]}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="empty-results">Brak pojazdów pasujących do wyszukiwania.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
