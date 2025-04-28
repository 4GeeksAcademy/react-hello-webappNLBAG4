import useGlobalReducer from "../hooks/useGlobalReducer";

const Curiosidades = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Curiosidades de Star Wars</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {store.curiosities.map((curio) => (
          <div className="col" key={curio.id}>
            <div className="curiosity-card">
              <h4>{curio.title}</h4>
              <p>{curio.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curiosidades;
