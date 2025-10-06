import React from "react";
import { TalentLaboratoryTeam } from "./TalentLaboratoryTeam";
import { Card } from "./Card";

const teamMembers = [
  {
    name: "Ana Torres",
    role: "Desarrolladora Frontend",
    image:
      "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2VudGUlMjBhbGVhdG9yaWF8ZW58MHx8MHx8fDA%3D?text=Ana",
  },
  {
    name: "Carlos Gómez",
    role: "Diseñador UX/UI",
    image:
      "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww?text=Carlos",
  },
  {
    name: "Lucía Fernández",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww?text=Lucía",
  },
  {
    name: "Martín López",
    role: "Desarrollador Backend",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2VudGUlMjBhbGVhdG9yaWF8ZW58MHx8MHx8fDA%3D?text=Martín",
  },
  {
    name: "Sofía Ramírez",
    role: "QA Tester",
    image:
      "https://e1.pxfuel.com/desktop-wallpaper/989/24/desktop-wallpaper-pin-di-00l-random-people.jpg?text=Sofía",
  },
];

const projects = [
  {
    title: "Plataforma de Gestión",
    description:
      "Una herramienta para optimizar la gestión de equipos y tareas.",
    buttonText: "Explorar proyecto",
  },
  {
    title: "Tienda Virtual",
    description:
      "Un ecommerce moderno con pasarela de pagos y panel de administración.",
    buttonText: "Ver detalles",
  },
  {
    title: "Aplicación de Viajes",
    description:
      "Permite a los usuarios buscar destinos y reservar paquetes turísticos.",
    buttonText: "Conocer más",
  },
  {
    title: "Dashboard de Análisis",
    description:
      "Un panel interactivo para visualizar métricas de negocio en tiempo real.",
    buttonText: "Abrir dashboard",
  },
  {
    title: "Red Social para Músicos",
    description:
      "Conecta artistas y fans mediante publicaciones, eventos y mensajes.",
    buttonText: "Ir al proyecto",
  },
];

function Main() {
  return (
    <main>
      <h2>Contenido Principal</h2>
      <p>Este es un ejemplo de contenido dentro del área principal.</p>
      <TalentLaboratoryTeam teamMembers={teamMembers} />
      <div className="projects-container">
        {projects.map((p, index) => (
          <Card
            key={index}
            title={p.title}
            description={p.description}
            buttonText={p.buttonText}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
