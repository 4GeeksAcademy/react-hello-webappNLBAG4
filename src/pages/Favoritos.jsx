import useGlobalReducer from "../hooks/useGlobalReducer";
import Card from "../components/Card";

const Favoritos = () => {
  const { store } = useGlobalReducer();

  const personajesFavoritos = store.favorites.filter(fav => fav.type === "character");
  const planetasFavoritos = store.favorites.filter(fav => fav.type === "planet");

  if (store.favorites.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>No hay favoritos aún</h2>
        <p>Marca personajes o planetas con ❤️ para agregarlos a tu lista.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Mis Favoritos</h1>

      {personajesFavoritos.length > 0 && (
        <>
          <h3 className="text-start mt-4 mb-3 starwars-font">👤 Personajes</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {personajesFavoritos.map((fav) => (
              <div className="col" key={`${fav.type}-${fav.id}`}>
                <Card
                  id={fav.id}
                  title={fav.title}
                  imageUrl={fav.imageUrl}
                  linkUrl={fav.linkUrl}
                  type={fav.type}
                />
              </div>
            ))}
          </div>
        </>
      )}

      {planetasFavoritos.length > 0 && (
        <>
          <h3 className="text-start mt-5 mb-3 starwars-font">🪐 Planetas</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {planetasFavoritos.map((fav) => (
              <div className="col" key={`${fav.type}-${fav.id}`}>
                <Card
                  id={fav.id}
                  title={fav.title}
                  imageUrl={fav.imageUrl}
                  linkUrl={fav.linkUrl}
                  type={fav.type}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Favoritos;
