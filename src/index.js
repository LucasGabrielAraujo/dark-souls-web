const express = require('express')
const { router } = require('./routes/index.routes')

const app = express()
const logger = require('morgan');

require('./db');
const port = 3000



//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//logger
app.use(logger('dev'));

//rutas
app.use('/api', router);


app.listen(port, () => {
    try {
        console.log(`Example app listening on port http://localhost:${port}`)
    } catch (error) {
        console.error(error);
    }
});