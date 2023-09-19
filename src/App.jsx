import { useState } from "react";
import reactLogo from "./assets/react.svg";
import hsgLogo from "/hsg_logo.svg";
import "./App.css";

function Card() {
  const randNum = Math.floor(Math.random * 6) + 1;
  return (
    <input type="image" src="/images/fff.png"/> 
  );
}

function App() {
  return (
    <>
      <h1>Choose a card</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

    </>
  );
}

export default App;
