// Base de datos completa de juegos
const juegos = {
  "Minecraft": {
    titulo: "Minecraft",
    desarrollador: "Mojang",
    genero: "Sandbox, Aventura",
    anio: 2011,
    descripcion: "Un juego de construcción y supervivencia en un mundo generado proceduralmente.",
    portada: "img/minecraft.jpg",
    videoId: "Cqd0I2jjUUamCNnt",
    descargaUrl: "https://www.minecraft.net"
  },
  "Fortnite": {
    titulo: "Fortnite",
    desarrollador: "Epic Games",
    genero: "Battle Royale",
    anio: 2017,
    descripcion: "Un juego de batalla real con construcción de estructuras.",
    portada: "img/fortnite.jpg",
    videoId: "Yoe-kAC8aAsSAao8",
    descargaUrl: "https://www.epicgames.com/fortnite"
  },
  "God of War": {
    titulo: "God of War",
    desarrollador: "Santa Monica Studio",
    genero: "Acción, Aventura",
    anio: 2018,
    descripcion: "Kratos y su hijo Atreus emprenden un viaje épico por los nueve reinos.",
    portada: "img/godofwar.jpg",
    videoId: "Mjihge4O__MAcgKa",
    descargaUrl: "https://www.playstation.com/god-of-war"
  },
  "Doom": {
    titulo: "Doom",
    desarrollador: "id Software",
    genero: "FPS, Acción",
    anio: 2016,
    descripcion: "Regresa el clásico shooter con acción brutal y demonios.",
    portada: "img/doom.jpg",
    videoId: "pvTIweWcrsqXkhyq",
    descargaUrl: "https://www.doom.com"
  },
  "The Legend of Zelda": {
    titulo: "The Legend of Zelda",
    desarrollador: "Nintendo",
    genero: "Aventura, RPG",
    anio: 2017,
    descripcion: "Un viaje épico por Hyrule lleno de misterios y combates.",
    portada: "img/zelda.jpg",
    videoId: "PLFH865OOvBKWw6E",
    descargaUrl: "https://www.zelda.com"
  },
  "StarCraft": {
    titulo: "StarCraft",
    desarrollador: "Blizzard",
    genero: "Estrategia en tiempo real",
    anio: 1998,
    descripcion: "Controla Terran, Zerg o Protoss en batallas galácticas.",
    portada: "img/starcraft.jpg",
    videoId: "P_cE6K0rqfItOfBG",
    descargaUrl: "https://starcraft.com"
  },
  "Civilization VI": {
    titulo: "Civilization VI",
    desarrollador: "Firaxis Games",
    genero: "Estrategia por turnos",
    anio: 2016,
    descripcion: "Construye un imperio que resista la prueba del tiempo.",
    portada: "img/civ6.jpg",
    videoId: "vTTFDeKDqgx1sjqo",
    descargaUrl: "https://civilization.com"
  },
  "The Witcher 3": {
    titulo: "The Witcher 3",
    desarrollador: "CD Projekt Red",
    genero: "RPG de acción",
    anio: 2015,
    descripcion: "La historia épica de Geralt de Rivia en un mundo de fantasía oscura.",
    portada: "img/witcher.jpg",
    videoId: "sK1VrKlbhUMGCqf8",
    descargaUrl: "https://thewitcher.com"
  },
  "Elden Ring": {
    titulo: "Elden Ring",
    desarrollador: "FromSoftware",
    genero: "RPG de acción",
    anio: 2022,
    descripcion: "Un vasto mundo abierto lleno de desafíos y misterios oscuros.",
    portada: "img/eldenring.jpg",
    videoId: "hqX0opHLhXSJ2a07",
    descargaUrl: "https://www.eldenring.com"
  },
  "Roblox": {
  titulo: "Roblox",
  desarrollador: "Roblox Corporation",
  genero: "Sandbox, Multijugador, Creativo",
  anio: 2006,
  descripcion: "Roblox es una plataforma en línea donde los usuarios pueden crear, compartir y jugar miles de juegos desarrollados por la comunidad. Con herramientas de creación integradas, permite a los jugadores diseñar sus propias experiencias y mundos virtuales.",
  portada: "img/roblox.jpg",
  videoId: "6D9cl4-zP0tGVcKk",
  descargaUrl: "https://www.roblox.com"
}
};

// Búsqueda
function buscarJuego() {
  const nombre = document.getElementById("buscador").value.trim();
  if (juegos[nombre]) {
    localStorage.setItem("juegoActual", JSON.stringify(juegos[nombre]));
    agregarAGaleria(nombre);
    window.location.href = "juego-detalle.html";
  } else {
    alert(`Juego no encontrado. Juegos disponibles: ${Object.keys(juegos).join(", ")}`);
  }
}

// Ir a detalle desde catálogo
function irADetalle(nombre) {
  if (juegos[nombre]) {
    localStorage.setItem("juegoActual", JSON.stringify(juegos[nombre]));
    agregarAGaleria(nombre);
    window.location.href = "juego-detalle.html";
  } else {
    alert("Juego no encontrado.");
  }
}

// Cargar detalles del juego
function cargarDetalle() {
  const juego = JSON.parse(localStorage.getItem("juegoActual"));
  if (juego) {
    document.getElementById("titulo").textContent = juego.titulo;
    document.getElementById("desarrollador").textContent = juego.desarrollador;
    document.getElementById("genero").textContent = juego.genero;
    document.getElementById("anio").textContent = juego.anio;
    document.getElementById("descripcion").textContent = juego.descripcion;
    document.getElementById("portada").src = juego.portada;
  } else {
    alert("No se encontró información del juego.");
    window.location.href = "index.html";
  }
}

// Cargar video y descarga
function cargarVideoYDescarga() {
  const juego = JSON.parse(localStorage.getItem("juegoActual"));
  if (juego) {
    document.getElementById("titulo-video").textContent = `${juego.titulo} - Gameplay`;
    document.getElementById("video-frame").src = `https://www.youtube.com/embed/${juego.videoId}`;
    document.getElementById("enlace-descarga").href = juego.descargaUrl;
  } else {
    alert("No se encontró el juego.");
    window.location.href = "index.html";
  }
}

// Galería
function agregarAGaleria(nombre) {
  let galeria = JSON.parse(localStorage.getItem("galeria")) || [];
  if (!galeria.includes(nombre)) {
    galeria.push(nombre);
    localStorage.setItem("galeria", JSON.stringify(galeria));
  }
}

function cargarGaleria() {
  const galeria = JSON.parse(localStorage.getItem("galeria")) || [];
  const contenedor = document.getElementById("galeria-contenido");
  if (galeria.length === 0) {
    contenedor.innerHTML = "<p>No has visto ningún juego aún.</p>";
  } else {
    galeria.forEach(nombre => {
      const juego = juegos[nombre];
      if (juego) {
        const img = document.createElement("img");
        img.src = juego.portada;
        img.alt = nombre;
        contenedor.appendChild(img);
      }
    });
  }
}

function cargarGaleriaHome() {
  const galeria = JSON.parse(localStorage.getItem("galeria")) || [];
  const contenedor = document.getElementById("galeria-home");
  if (galeria.length === 0) {
    contenedor.innerHTML = "<p>Ninguno aún.</p>";
  } else {
    galeria.slice(0, 3).forEach(nombre => {
      const juego = juegos[nombre];
      if (juego) {
        const img = document.createElement("img");
        img.src = juego.portada;
        img.alt = nombre;
        contenedor.appendChild(img);
      }
    });
  }
}