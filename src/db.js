const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/darksouls3';

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
