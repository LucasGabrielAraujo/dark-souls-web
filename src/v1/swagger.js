const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Documentacion de la API'
        },
    },
    apis: [path.resolve(__dirname, '../v1/routes/*.routes.js'), path.resolve(__dirname, '../models/*.js')],
};
console.log(path.resolve(__dirname, '../v1/routes/*.routes.js'));
const specs = swaggerJsdoc(options);
module.exports = specs;