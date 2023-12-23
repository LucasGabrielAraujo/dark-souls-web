const {Router} = require('express')
const { getAllWeapons, getWeaponsByCategory, getWeaponsByName, getWeaponsByEffect, postWeaponImage, getWeaponById, updateWeaponById } = require('../controllers/weapons.controller')
const router = Router()
const fs = require('fs')
const multer = require('multer')

//configuracion multer
const storage = multer.memoryStorage(); //almacenar la imagen
const upload = multer({storage:storage})


router.get('/weapons', getAllWeapons)
router.get('/weapons/:id', getWeaponById);
router.get('/weapons/type', getWeaponsByCategory);
router.get('/weapons/name', getWeaponsByName);
router.get('/weapons/effect', getWeaponsByEffect)
router.post('/weapons/upload', upload.single('image'), postWeaponImage);
router.put('/weapons/:id', updateWeaponById);

module.exports = {
    router,
    fs
}