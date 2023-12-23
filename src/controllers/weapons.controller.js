const path = require('path');
const Weapon = require('../models/Weapon');
const fs = require('fs')
const mongoose = require('mongoose')



const getAllWeapons = async (req, res) => {

  const armas = await Weapon.find()
  res.status(200).send(armas)
}

const getWeaponById = async (req, res) => {
  const id = req.params.id;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({message: 'ID invalido'});
  }

  const arma = await Weapon.findById(id)
  res.status(200).send(arma)
}
//temporal-- solo para subir las imagenes correspondientes a cada arma
const updateWeaponById = async (req, res) => {
  const id = req.params.id;
  const update = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({message: 'ID invalido'});
  }

  const arma = await Weapon.findById(id)
  console.log(update);
  return res.status(200).send({message: 'Ok'})
  
}

const getWeaponsByCategory = async (req, res) => {

  const categoria = req.body.arma

  const armas = await Weapon.find({ 'Category': categoria }).lean()
  res.status(200).send(armas)
}

const getWeaponsByName = async (req, res) => {
  const name = req.body.nombre
  const armas = await Weapon.find({ 'Name': name }).lean()
  res.status(200).send(armas)
}
const getWeaponsByEffect = async (req, res) => {
  const effect = req.body.efecto
  const armas = await Weapon.find({ 'Aux Effects': effect }).lean()
  res.status(200).send(armas)
}

const postWeaponImage = async (req, res) => {
  //validar que se suba la imagen
  try {
    // Validar que se haya subido un archivo
    if (!req.file) {
      return res.status(400).send('No se proporcionó ningún archivo');
    }

    // Obtener la extensión del archivo
    const extension = path.extname(req.file.originalname).toLowerCase();

    // Validar que la extensión sea una imagen permitida (puedes ajustar las extensiones según tus necesidades)
    const extensionesPermitidas = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    if (!extensionesPermitidas.includes(extension)) {
      return res.status(400).send('Tipo de archivo no permitido. Solo se permiten imágenes.');
    }

    // Resto del código para guardar la imagen
    const imageBuffer = req.file.buffer;
    const nombreImagen = `${Date.now()}_imagen${extension}`;
    const rutaImagen = path.join(__dirname, '..', 'images', nombreImagen);

    fs.writeFile(rutaImagen, imageBuffer, (error) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor');
      }

      console.log('Imagen guardada:', nombreImagen, rutaImagen);
      res.send('Imagen recibida y guardada exitosamente');
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
}

module.exports = {
  getAllWeapons,
  getWeaponById,
  getWeaponsByCategory,
  getWeaponsByName,
  getWeaponsByEffect,
  postWeaponImage,
  updateWeaponById
}