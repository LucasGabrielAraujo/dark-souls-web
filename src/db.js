const mongoose = require('mongoose');
require('dotenv').config()
const uri = process.env.MONGODBURI;

/* async function conectarDB() {
  try {
    await mongoose.connect(uri, {
    });
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos', error);
    throw error;
  }
} */

(async()=>{
    const db = await mongoose.connect(uri)
    console.log("DB conectado a", db.connection.name);
})()
