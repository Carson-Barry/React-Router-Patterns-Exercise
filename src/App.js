import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import './App.css';
import DogList from './DogList';
import DogDetails from "./DogDetails"

//Dog images all from solution code
import whiskey from "./img/whiskey.jpg"
import tubby from "./img/tubby.jpg"
import duke from "./img/duke.jpg"
import perry from "./img/perry.jpg"


const dogInfo = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/dogs" element={<DogList dogs={dogInfo}/>}/>
          <Route path="/dogs/:dogName" element={<DogDetails dogs={dogInfo}/>}/>
          <Route path="*" element={<Navigate to="/dogs" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;