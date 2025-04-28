import { Link } from "react-router-dom";
import { useState } from "react";

const Card = ({ title, imageUrl, linkUrl }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="card h-100 hologram-card">
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
      <div className="card-body d-flex flex-column">
        <h5 className="card-title starwars-font">{title}</h5>
        
        {/* Solo mostramos el botón */}
        <Link to={linkUrl} className="btn btn-primary mt-auto">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Card;
