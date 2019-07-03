import React, { useState } from "react";
import StationList from "./components/StationList";
import Selector from "./components/ui/Select.jsx";

/**
 * Renders the entry point App component
 * @returns {JSX} App Component
 */
function App() {
  const [selectedDistance, setSelectedDistance] = useState(1);
  return (
    <>
      <header>
        <span>Gas Price App</span>
      </header>
      <main className="container">
        <div className="controls">
          <h1>Gas Stations Near You</h1>
          <Selector
            setSelectedDistance={setSelectedDistance}
            value={selectedDistance}
          />
        </div>
        <StationList selectedDistance={selectedDistance} />
      </main>
    </>
  );
}

export default App;
