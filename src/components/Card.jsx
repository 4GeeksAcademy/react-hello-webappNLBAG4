import { Link } from "react-router-dom";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Card = ({ id, title, imageUrl, linkUrl, type }) => {
  const [loaded, setLoaded] = useState(false);
  const { store, dispatch } = useGlobalReducer();

  const isFav = store.favorites.some(fav => fav.id === id && fav.type === type);

  const toggleFavorite = () => {
    dispatch({
      type: "toggle_favorite",
      payload: { id, type, title, imageUrl, linkUrl }
    });
  };

  return (
    <div className="card h-100 hologram-card position-relative">
      <img
        src={imageUrl}
        alt={title}
        className={`card-img-top ${loaded ? "fade-in" : ""}`}
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
          setLoaded(true);
        }}
      />

      {/* ❤️ Favorito */}
      <button
        className="btn position-absolute top-0 end-0 m-2"
        onClick={toggleFavorite}
        style={{ background: "none", border: "none", fontSize: "1.5rem", color: isFav ? "red" : "white" }}
        aria-label="Agregar a favoritos"
      >
        <i className={`fa${isFav ? 's' : 'r'} fa-heart`}></i>
      </button>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title starwars-font">{title}</h5>
        <Link to={linkUrl} className="btn btn-primary mt-auto">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Card;
