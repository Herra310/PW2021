const express = require('express');

//inicializarla 

const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);
//Ruta

app.get('/', (req, res) =>{
        console.log("hola");
        res.json({mensaje: "Mensaje de bienvenida"});
});

app.get('/Ramon', (req, res) =>{
    console.log("hola");
    res.json({mensaje: "SIU"});
});

//Levantar

app.listen(app.get('port'), (error) =>{
    if(error) {
        console.log("Ha petado tio", error); 
    }else{
        console.log("servidor en puerto: ", app.get('port'));
    }
});

//grande el kite ya me acompleta todo no como con el bot de discord