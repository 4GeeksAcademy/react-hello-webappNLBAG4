import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Demo from "./pages/Demo.jsx";
import Single from "./pages/Single.jsx";
import Layout from "./pages/Layout.jsx";

// NUEVAS IMPORTACIONES
import Personajes from "./pages/Personajes.jsx";
import Planetas from "./pages/Planetas.jsx";
import Curiosidades from "./pages/Curiosidades.jsx";
import Cronologia from "./pages/Cronologia.jsx";
import NotFound from "./pages/NotFound.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/single/:type/:theid" element={<Single />} />
          
          {/* NUEVAS RUTAS */}
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/planetas" element={<Planetas />} />
          <Route path="/curiosidades" element={<Curiosidades />} />
          <Route path="/cronologia" element={<Cronologia />} />

          {/* Ruta para página no encontrada */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;