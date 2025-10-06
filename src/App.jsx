import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import { ListProducts } from "./components/ListProducts";
import { Card } from "./components/Card";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const products = ["Manzanas", "Peras", "Naranjas"];

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Nav />
      <Main style={{ flex: 1 }} />
      <Footer />
    </div>
  );
}

export default App;
