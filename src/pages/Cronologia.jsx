import useGlobalReducer from "../hooks/useGlobalReducer";

const Cronologia = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Cronología de las Películas</h1>
      <div className="timeline">
        {store.timeline.map((movie) => (
          <div className="timeline-item" key={movie.id}>
            <div className="timeline-content">
              <h5>{movie.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cronologia;
