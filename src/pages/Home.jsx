import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 20000); // ⏳ Después de 20 segundos, cambiamos a contenido normal

    return () => clearTimeout(timer); // Limpiamos el timer si cambia algo
  }, []);

  return (
    <>
      {showIntro ? (
        <div className="intro-container">
          <div className="intro-text">
            <p>Hace mucho tiempo</p>
            <p>en una galaxia muy, muy lejana...</p>
            <br />
            <p>Bienvenido al Blog de Star Wars</p>
            <p>Explora Personajes, Planetas, Curiosidades y más.</p>
          </div>
        </div>
      ) : (
        <div className="container mt-5 text-center">
          <h1 className="mb-4">Bienvenido al Blog de Star Wars</h1>
          <p className="mb-4">¡Explora personajes, planetas, curiosidades y más!</p>
          <div>
            <Link to="/personajes" className="btn btn-primary m-2">Ver Personajes</Link>
            <Link to="/planetas" className="btn btn-success m-2">Ver Planetas</Link>
            <Link to="/curiosidades" className="btn btn-warning m-2">Ver Curiosidades</Link>
            <Link to="/cronologia" className="btn btn-info m-2">Ver Cronología</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
