// src/data/imageCatalog.js

const imageCatalog = {
    characters: {
      1: "https://starwars-visualguide.com/assets/img/characters/1.jpg", // Luke Skywalker
      2: "https://starwars-visualguide.com/assets/img/characters/2.jpg", // C-3PO
      3: "https://starwars-visualguide.com/assets/img/characters/3.jpg", // R2-D2
      4: "https://starwars-visualguide.com/assets/img/characters/4.jpg", // Darth Vader
      5: "https://starwars-visualguide.com/assets/img/characters/5.jpg", // Leia Organa
      10: "https://starwars-visualguide.com/assets/img/characters/10.jpg", // Obi-Wan Kenobi
      13: "https://starwars-visualguide.com/assets/img/characters/13.jpg", // Chewbacca
      14: "https://starwars-visualguide.com/assets/img/characters/14.jpg", // Han Solo
      20: "https://starwars-visualguide.com/assets/img/characters/20.jpg", // Yoda
      21: "https://starwars-visualguide.com/assets/img/characters/21.jpg", // Palpatine
    },
    planets: {
      1: "https://starwars-visualguide.com/assets/img/planets/1.jpg", // Tatooine
      2: "https://starwars-visualguide.com/assets/img/planets/2.jpg", // Alderaan
      3: "https://starwars-visualguide.com/assets/img/planets/3.jpg", // Yavin IV
      4: "https://starwars-visualguide.com/assets/img/planets/4.jpg", // Hoth
      5: "https://starwars-visualguide.com/assets/img/planets/5.jpg", // Dagobah
      6: "https://starwars-visualguide.com/assets/img/planets/6.jpg", // Bespin
      7: "https://starwars-visualguide.com/assets/img/planets/7.jpg", // Endor
      8: "https://starwars-visualguide.com/assets/img/planets/8.jpg", // Naboo
      9: "https://starwars-visualguide.com/assets/img/planets/9.jpg", // Coruscant
      10: "https://starwars-visualguide.com/assets/img/planets/10.jpg", // Kamino
    }
  };
  
  export default imageCatalog;
  
  // Función para buscar imagen usando el tipo y el id
  export const getImageUrl = (type, id) => {
    if (imageCatalog[type] && imageCatalog[type][id]) {
      return imageCatalog[type][id];
    }
    return "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"; // fallback
  };
  