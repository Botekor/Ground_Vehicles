import React, { useState } from "react";

export default function IntroduceButton() {
  const [name, setName] = useState(() => localStorage.getItem("vehiclePortalName") || "");

  function introduce() {
    const enteredName = window.prompt("Jak masz na imię?");

    if (enteredName && enteredName.trim() !== "") {
      const cleanName = enteredName.trim();
      localStorage.setItem("vehiclePortalName", cleanName);
      setName(cleanName);
    }
  }

  return (
    <div className="welcome-area">
      <button type="button" className="btn btn-primary introduce-button" onClick={introduce}>
        <i className="bi bi-person-plus-fill me-2"></i>
        Przedstaw się
      </button>
      {name !== "" && <span className="welcome-text">Witaj ponownie, {name}!</span>}
    </div>
  );
}
