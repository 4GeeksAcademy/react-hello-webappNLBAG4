import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Star Wars
      </button>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/personajes">Personajes</Link></li>
        <li><Link className="dropdown-item" to="/planetas">Planetas</Link></li>
        <li><Link className="dropdown-item" to="/curiosidades">Curiosidades</Link></li>
        <li><Link className="dropdown-item" to="/cronologia">Cronología</Link></li>
      </ul>
    </div>
  );
};

export default DropdownMenu;