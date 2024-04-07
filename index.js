// Importar Express
const express = require('express');

// Instanciar Express
const app = express();

// Levantar el Servidor
app.listen(3000, () => {
  console.log('Servidor escuchando por el puerto 3000');
});

// Middleware de uso General
app.use(express.static("assets"));

// Arreglo 4 Nombres
const nombres= ["Pablo", "Francisco","Juan", "Maria"];

// Creación Rutas
app.get("/abracadabra/usuarios", (req, res) => {
  res.send({ nombres })
})
  
// Creación Middleware de la Segunda Ruta
app.use("/abracadabra/juego/:usuario", (req, res, next) => {
  nombres.includes(req.params.usuario) ? next() : res.redirect("/who.jpeg") 
});

// Juego
app.get("/abracadabra/juego/:usuario", (req, res) => {
  res.sendFile(__dirname + '/index.html') 
});

// Conejo
app.get("/abracadabra/conejo/:n", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 4) + 1; 
  const n = parseInt(req.params.n); 

  if (n == randomNumber) {
        res.sendFile(__dirname + '/assets/conejo.jpg');
  } else {
       res.sendFile(__dirname + '/assets/voldemort.jpg');
  }
});

// Pagina no existe
app.use((req, res) => {
  res.status(404).send("Oh oh! Esta página no existe");
});




