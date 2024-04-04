const {Router} = require('express')
const { getAllWeapons, getWeaponsByCategory, getWeaponsByName, getWeaponsByEffect, postWeaponImage, getWeaponById, updateWeaponById } = require('../../controllers/weapons.controller')
const router = Router()
const fs = require('fs')
const multer = require('multer')
const { register } = require('../../controllers/auth/register.controller')
const { login, getLogin } = require('../../controllers/auth/login.controller')
const { logout } = require('../../controllers/auth/logout.controller')
const { getInventory, postInventory } = require('../../controllers/inventory.controller')

//configuracion multer
const storage = multer.memoryStorage(); //almacenar la imagen
const upload = multer({storage:storage})

//rutas
//armas

/**
 * @swagger
 * tags:
 *   name: Weapons
 *   description: API para armas
 */

/**
 * @openapi
 * /api/v1/weapons:
 *   get:
 *     summary: Obtiene todas las armas
 *     tags: [Weapons]
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Weapon'
 */
router.get('/weapons', getAllWeapons)


/**
 * @openapi
 * /api/v1/weapons/id:
 *  get:
 *    summary: Obtiene arma por ID
 *    tags: [Weapons:ID]
 *    responses:
 *      200:
 *          description: OK
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      items:
 *                          $ref: '#/components/schemas/Weapon'
 */
router.get('/weapons/:id', getWeaponById);


/**
 * @openapi
 * /api/v1/weapons/type:
 *  get:
 *      summary: Obtiene armas por categoria
 *      tags: [Weapons/type]
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Weapon'
 */
router.get('/weapons/type', getWeaponsByCategory);


/**
 * @openapi
 * /api/v1/weapons/name:
 *  get:
 *      summary: Obtiene arma por nombre
 *      tags: [Weapons:name]
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      items:
 *                          $ref: '#/components/schemas/Weapon'
 */
router.get('/weapons/name', getWeaponsByName);
router.get('/weapons/effect', getWeaponsByEffect)
router.post('/weapons/upload', upload.single('image'), postWeaponImage);
router.put('/weapons/:id', upload.single('image'), updateWeaponById);

//login, logout y registro
router.post('/login', login)
router.get('/login', getLogin)
router.post('/register', register)
router.delete('/logout', logout)
 
//control de inventario
router.get('/inventory', getInventory)
router.post('/inventory', postInventory)

module.exports = {
    router,
    fs
}