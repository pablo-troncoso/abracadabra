// Importar Express
const express = require('express');

//Instanciar Express
const app = express();

//Levantar el Servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

//Middleware de uso General
app.use(express.static("assets"));

//Arreglo 4 Nombres
const nombres=["Pablo", "Francisco","Juan", "Maria"];

//Creación Rutas
app.get('/abracadabra/usuarios', (req, res) => {
  res.send({nombres});
})
  
//Creación Middleware de la Segunda Ruta
app.use("/abracadabra/juego/:usuario", (req, res) => {
  nombres.includes(req.params.usuario) ? next() : res.redirect("/who.jpeg") 
});



//Página no existe
app.get("*", (req, res) => {
  //console.log("objeto res:"res);
  res.send("Esta página no existe");
});

//


app.get('/', (req, res) => {
  res.send('¡Bienvenido al sitio web de Abracadabra!');
});


//Hay o no Usuarios
const validarUsuario = (req, res, next) => {
    const usuario = req.params.usuario;
    if (nombres.includes(usuario)) {
      next();
    } else {
      res.status(404).send('No se encuentra el Usuario');
    }
  };




// Conejo
app.get('/abracadabra/conejo/:n', (req, res) => {
    const n = parseInt(req.params.n);
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    if (n === randomNumber) {
      res.sendFile(__dirname + '/assets/img/conejito.jpg');
    } else {
      res.sendFile(__dirname + '/assets/img/voldemort.jpg');
    }
  });

 




