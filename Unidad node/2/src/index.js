const express = require('express');
const cors = require('cors');

// inicializarlo
const app = express();

//Config
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//Base de datos
require('./config/connection');

//Rutass
app.use(require('./routes/personasRoutes'));

//Levantar el servidor 
app.listen(app.get('port'), (err) => {
    if (err) {
        console.log(err); //Despierta o k 
    } else {
        console.log(`Servidor en puerto: ${app.get('port')}`)
    }
});

