import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import VehicleTable from "./components/VehicleTable";
import IntroduceButton from "./components/IntroduceButton";
import FactBox from "./components/FactBox";
import "./Style.css";

// Dane pojazdów przepisane z widocznej tabeli na dostarczonym zrzucie ekranu.
const vehicles = [
  ["ADATS", "SPAA", "VIII", "12.0", "1,080,000"],
  ["AGS", "Light tank", "VII", "12.7", "—"],
  ["CCVL", "Light tank", "VII", "10.3", "—"],
  ["EFV", "Light tank", "VI", "9.0", "—"],
  ["M13 MGMC", "SPAA", "I", "1.7", "700"],
  ["M15 CGMC", "SPAA", "I", "1.7", "2,100"],
  ["M16 MGMC", "SPAA", "II", "2.7", "10,000"],
  ["M3 GMC", "Tank destroyer", "I", "1.7", "6,300"],
  ["HSTV-L", "Light tank", "VII", "12.7", "950,000"],
  ["LAV-AD", "SPAA", "VII", "10.0", "710,000"],
  ["LOSAT", "Tank destroyer", "VII", "10.0", "—"],
  ["LVT(A)(4) (ZIS-2)", "Tank destroyer", "II", "2.3", "—"],
  ["LVT(A)(1) (M24)", "Light tank", "II", "2.7", "700"],
  ["LVT(A)(1)", "Light tank", "I", "1.0", "Free"],
  ["LVT(A)(1)", "Light tank", "I", "1.0", "—"],
  ["LVT(A)(4)", "Light tank", "I", "1.3", "—"],
  ["M10 GMC", "Tank destroyer", "II", "3.3", "22,000"],
  ["M103", "Heavy tank", "V", "7.7", "300,000"],
  ["M109A1", "Tank destroyer", "IV", "6.0", "155,000"]
];

const facts = [
  "Znajdź pojazd, wpisując jego nazwę w wyszukiwarce.",
  "Lista pozwala porównać role, rangi i BR pojazdów.",
  "Wybierz rolę lub rangę, aby zawęzić wyniki tabeli."
];

function App() {
  const [searchText, setSearchText] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedRank, setSelectedRank] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [lightMode, setLightMode] = useState(false);
  const [fact] = useState(() => facts[Math.floor(Math.random() * facts.length)]);

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesName = vehicle[0].toLowerCase().includes(searchText.toLowerCase());
    const matchesRole = selectedRole === "All" || vehicle[1] === selectedRole;
    const matchesRank = selectedRank === "All" || vehicle[2] === selectedRank;
    const matchesCountry = selectedCountry === "All" || selectedCountry === "USA";

    return matchesName && matchesRole && matchesRank && matchesCountry;
  });

  return (
    <main className={lightMode ? "portal-shell light-mode" : "portal-shell"}>
      <Header />

      <div className="portal-tools">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          selectedRank={selectedRank}
          setSelectedRank={setSelectedRank}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />

        <div className="results-line">
          <span>Znaleziono: <strong>{filteredVehicles.length}</strong></span>
          <div className="d-flex align-items-center gap-2">
            <span className="mode-label">RB</span>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary theme-button"
              onClick={() => setLightMode(!lightMode)}
            >
              <i className={lightMode ? "bi bi-moon-stars" : "bi bi-sun"}></i>
              {lightMode ? " Ciemny motyw" : " Jasny motyw"}
            </button>
          </div>
        </div>

        <VehicleTable vehicles={filteredVehicles} />

        <div className="portal-footer">
          <IntroduceButton />
          <FactBox fact={fact} />
        </div>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
