import { useEffect } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import { Link, Navigate } from "react-router-dom";
import { Home } from "@pages";

export default function App() {


  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Home/>
      </nav>
    </div>
  );
}
