/*
Imports
*/
    // NodeJS
    require('dotenv').config(); // variable d'environnement
    const express = require('express'); // configuration du serveur
    const ejs = require('ejs'); // moteur de template
    const path = require('path'); // gestion du dossier client

    // Inner
    const {mainRouter} = require('./routes/main.Router');
//

/*
Configuration
*/
    // Creer le serveur
    const server = express();
    const port = process.env.PORT;

    // COnfigurer dossier www
    server.set('views', __dirname + '/www');
    server.use(express.static(path.join(__dirname, 'www')));

    // COnfigurer le moteur de rendu
    server.set('view engine','ejs');

    // Configurer le moteur de rendu
    server.use(`/`, mainRouter);

//

/*
Lancer le serveur
*/
    server.listen(port, () => {
      console.log(`Server is listenning on port ${port}.`)
    });
//