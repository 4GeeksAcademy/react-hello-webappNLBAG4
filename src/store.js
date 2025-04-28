const initialState = {
  message: null,

  characters: [
    {
      id: 1,
      name: "Luke Skywalker",
      description: "El joven granjero de Tatooine que se convierte en uno de los más grandes Jedi de la historia. Es hijo de Anakin Skywalker y Padmé Amidala, y hermano gemelo de Leia Organa.",

      imageUrl: "https://static.wikia.nocookie.net/starwars/images/6/6c/LukeSkywalker-RotJAVA.png/revision/latest?cb=20250314013820"
    },
    {
      id: 2,
      name: "Darth Vader",
      description: "Antiguamente Anakin Skywalker, fue un Caballero Jedi seducido por el Lado Oscuro de la Fuerza. Se convierte en el temido Darth Vader, aprendiz de Darth Sidious.",
      imageUrl: "https://static.wikia.nocookie.net/starwars/images/6/6e/AnakinVaderVision-GOM.png/revision/latest/scale-to-width-down/1000?cb=20130525233341"
    },
    {
      id: 3,
      name: "Leia Organa",
      description: "Princesa de Alderaan, líder de la Alianza Rebelde y hermana gemela de Luke Skywalker. Una figura central en la resistencia contra el Imperio Galáctico.",
      imageUrl: "https://static.wikia.nocookie.net/starwars/images/9/9b/Princessleiaheadwithgun.jpg/revision/latest/scale-to-width-down/1000?cb=20240522043127"
    },
    {
      id: 4,
      name: "Han Solo",
      description: "Famoso contrabandista y capitán del Halcón Milenario. Inicialmente un escéptico, se convierte en un héroe de la Rebelión y pareja de Leia Organa.",
      imageUrl: "https://static.wikia.nocookie.net/starwars/images/d/d9/HanSolo0BBY-TSWB.png/revision/latest?cb=20241220234647"
    },
    {
      id: 5,
      name: "Obi-Wan Kenobi",
      description: "Maestro Jedi que entrenó tanto a Anakin Skywalker como a su hijo, Luke. Vivió en el exilio en Tatooine tras la caída de la República Galáctica.",
      imageUrl: "https://static.wikia.nocookie.net/starwars/images/c/c5/ObiSWC.png/revision/latest?cb=20250422041447"
    },
    {
      id: 6,
      name: "Yoda",
      description: "Uno de los Maestros Jedi más poderosos y sabios. Líder del Alto Consejo Jedi durante siglos, entrenó a generaciones de caballeros Jedi.",
      imageUrl: "https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest/scale-to-width-down/1000?cb=20150206140125"
    },
    {
      id: 7,
      name: "Palpatine",
      description: "Conocido como Darth Sidious, manipuló la caída de la República y se proclamó Emperador del Imperio Galáctico. Maestro Sith supremo.",
      imageUrl: "https://static.wikia.nocookie.net/starwars/images/a/ab/Palpatine32BBY-Db.png/revision/latest?cb=20250321034334"
    },
    {
      id: 8,
      name: "Chewbacca",
      description: "Fiero guerrero Wookiee y fiel amigo de Han Solo. Copiloto del Halcón Milenario y miembro activo en la Rebelión contra el Imperio.",
      imageUrl: "https://static.wikia.nocookie.net/starwars/images/f/f6/Chewbacca-LCMF.png/revision/latest/scale-to-width-down/1000?cb=20190810023237"
    }
  ],

  planets: [
    {
      id: 1,
      name: "Tatooine",
      description: "Planeta desértico en el Borde Exterior. Hogar de Luke Skywalker y conocido por sus dos soles gemelos y vastos mares de dunas.",
      imageUrl: "https://static.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20241209041104"
    },
    {
      id: 2,
      name: "Naboo",
      description: "Planeta hermoso y exuberante, hogar de Padmé Amidala y del Emperador Palpatine. Conocido por su cultura pacífica y paisajes impresionantes.",
      imageUrl: "https://static.wikia.nocookie.net/starwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20250325014020"
    },
    {
      id: 3,
      name: "Coruscant",
      description: "El centro neurálgico del poder galáctico. Una ciudad-planeta, hogar del Senado Galáctico y lugar del Templo Jedi.",
      imageUrl: "https://static.wikia.nocookie.net/starwars/images/8/84/CoruscantGlobeE1.png/revision/latest?cb=20240513175137"
    },
    {
      id: 4,
      name: "Hoth",
      description: "Mundo helado cubierto de nieve y hielo. Refugio temporal de la Alianza Rebelde en la Base Eco, antes de ser descubierto por el Imperio.",
      imageUrl: "https://static.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png/revision/latest/scale-to-width-down/1000?cb=20160630022322"
    },
    {
      id: 5,
      name: "Dagobah",
      description: "Pantano remoto y salvaje donde Yoda vivió en exilio. Rico en vida salvaje y fuerte en la Fuerza.",
      imageUrl: "https://static.wikia.nocookie.net/starwars/images/7/7d/Dagobah-CGSWG.png/revision/latest/scale-to-width-down/1000?cb=20241208214847"
    },
    {
      id: 6,
      name: "Endor",
      description: "Luna boscosa habitada por los Ewoks. Sitio de la crucial Batalla de Endor, que resultó en la caída del Imperio.",
      imageUrl: "https://static.wikia.nocookie.net/starwars/images/1/1d/Endor_BF2.png/revision/latest?cb=20171014232605"
    }
],

curiosities: [
  {
    id: 1,
    title: "El origen de R2-D2 y C-3PO",
    content: "George Lucas se inspiró en películas japonesas para crear a estos droides icónicos."
  },
  {
    id: 2,
    title: "Yoda iba a ser interpretado por un mono",
    content: "Originalmente, un mono real entrenado iba a interpretar a Yoda."
  },
  {
    id: 3,
    title: "Han Solo iba a ser un alien",
    content: "En los primeros borradores, Han Solo no era humano, sino una criatura verde."
  },
  {
    id: 4,
    title: "E.T. aparece en Star Wars",
    content: "Una raza similar a E.T. aparece brevemente en el Senado Galáctico de 'La Amenaza Fantasma'."
  },
  {
    id: 5,
    title: "El sonido del sable de luz",
    content: "Proviene de la combinación de un viejo proyector de películas y el zumbido de un televisor antiguo."
  },
  {
    id: 6,
    title: "Chewbacca se inspiró en el perro de Lucas",
    content: "George Lucas se inspiró en su perro Alaskan Malamute llamado Indiana para crear a Chewbacca."
  }
],

  timeline: [
    { id: 1, title: "Episodio I: La amenaza fantasma (1999)" },
    { id: 2, title: "Episodio II: El ataque de los clones (2002)" },
    { id: 3, title: "Episodio III: La venganza de los Sith (2005)" },
    { id: 4, title: "Episodio IV: Una nueva esperanza (1977)" },
    { id: 5, title: "Episodio V: El Imperio contraataca (1980)" },
    { id: 6, title: "Episodio VI: El retorno del Jedi (1983)" },
    { id: 7, title: "Episodio VII: El despertar de la Fuerza (2015)" },
    { id: 8, title: "Episodio VIII: Los últimos Jedi (2017)" },
    { id: 9, title: "Episodio IX: El ascenso de Skywalker (2019)" }
  ]
};

export default initialState;
