import { useState } from "react";
import Navbar from "./components/Navbar.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>Galeria zdjęć</h1>
      </div>
    </>
  );
}

export default App;
