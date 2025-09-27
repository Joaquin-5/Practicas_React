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

const teamMembers = [
  {
    name: "Ana Torres",
    role: "Desarrolladora Frontend",
    image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2VudGUlMjBhbGVhdG9yaWF8ZW58MHx8MHx8fDA%3D?text=Ana",
  },
  {
    name: "Carlos Gómez",
    role: "Diseñador UX/UI",
    image: "https://via.placeholder.com/150/2196F3/FFFFFF?text=Carlos",
  },
  {
    name: "Lucía Fernández",
    role: "Project Manager",
    image: "https://via.placeholder.com/150/FF9800/FFFFFF?text=Lucía",
  },
  {
    name: "Martín López",
    role: "Desarrollador Backend",
    image: "https://via.placeholder.com/150/9C27B0/FFFFFF?text=Martín",
  },
  {
    name: "Sofía Ramírez",
    role: "QA Tester",
    image: "https://via.placeholder.com/150/F44336/FFFFFF?text=Sofía",
  },
];

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Nav />
      <Main style={{ flex: 1 }} />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
