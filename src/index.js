const express = require('express')
const { router } = require('./v1/routes/index.routes')
const cors = require('cors');

const app = express()
const logger = require('morgan');

const session = require('express-session')
require('./db');
require('dotenv').config();
const PORT = process.env.PORT || 8080;

const swaggerUi= require('swagger-ui-express');
const specs = require('./v1/swagger');



//configuracion de la sesion
app.use(session({
    secret: 'gato-loco-key',
    resave: false,
    saveUninitialized: false
}))

//middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//logger
app.use(logger('dev'));

//rutas
app.use('/api/v1', router);
//swagger
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(specs));


app.listen(process.env.PORT, () => {
    try {
        console.log(`Example app listening on port http://localhost:${PORT}`)
    } catch (error) {
        console.error(error);
    }
});