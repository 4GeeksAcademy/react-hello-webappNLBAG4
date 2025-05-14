import useGlobalReducer from "../hooks/useGlobalReducer";
import Card from "../components/Card";

const Planetas = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Planetas de Star Wars</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {store.planets.map((planeta) => (
          <div className="col" key={planeta.id}>
            <Card
              id={planeta.id}
              title={planeta.name}
              imageUrl={planeta.imageUrl}
              linkUrl={`/single/planet/${planeta.id}`}
              type="planet"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planetas;
