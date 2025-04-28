import { getImageUrl } from "../data/imageCatalog";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Card from "../components/Card";

const Personajes = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Personajes de Star Wars</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {store.characters.map((personaje) => (
          <div className="col" key={personaje.id}>
           <Card
  title={personaje.name}
  imageUrl={personaje.imageUrl}
  linkUrl={`/single/character/${personaje.id}`}
/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personajes;