import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/dogs" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;