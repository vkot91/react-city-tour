import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import TourList from "./components/TourList";
function App() {
  return (
    <div className="App">
      <Navbar />
      <TourList />
    </div>
  );
}

export default App;
