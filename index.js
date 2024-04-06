const express = require('express');
const app = express();

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.send('¡Bienvenido al sitio web de Abracadabra!');
});

//Usuarios
app.get('/abracadabra/usuarios', (req, res) => {
    const usuarios = ["Juan", "Jocelyn", "Astrid", "Maria", "Ignacia", "Javier", "Brian"];
    res.json({ usuarios });
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

// Juego
app.use('/abracadabra/juego/:usuario', validarUsuario, (req, res) => {
    const usuario = req.params.usuario;
    res.send(`¡Hola ${usuario}! Estás listo para jugar.`);
  });

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

  app.use((req, res) => {
    res.status(404).send('Esta página no existe...');
  });


//Servidor 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

