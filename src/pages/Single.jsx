import { useParams, Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Single = () => {
  const { type, theid } = useParams(); // 👈 ahora sacamos el "type"
  const { store } = useGlobalReducer();

  let item = null;
  let backTo = "/";

  if (type === "character") {
    item = store.characters.find(c => c.id === parseInt(theid));
    backTo = "/personajes";
  } else if (type === "planet") {
    item = store.planets.find(p => p.id === parseInt(theid));
    backTo = "/planetas";
  }

  if (!item) {
    return <div className="container mt-5 text-center"><h1>Elemento no encontrado</h1></div>;
  }

  return (
    <div className="container mt-5">
      <div className="card hologram-card text-center p-4">
        <h2 className="mb-3 starwars-font">{item.name}</h2>
        <img
          src={item.imageUrl}
          alt={item.name}
          className="img-fluid mb-3"
          style={{ width: "100%", maxWidth: "400px", height: "auto", objectFit: "cover", margin: "0 auto" }}
        />
        <p className="card-text">{item.description}</p>

        <div className="mt-4">
          <Link to={backTo} className="btn btn-warning">
            ← Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Single;
