const mongoose = require('mongoose')

/**
 * @openapi
 * components:
 *    schemas:
 *      Inventory:
 *        type: object
 *        properties:
 *            _id:
 *              type: string 
 *              example: 655528dc21de714d0cc34f6c
 *            userId:
 *              type: string
 *              example: 655528dc21de714d0cc34f6c
 *            weapon:
 *              type: list
 *              example: [{"_id": "655528dc21de714d0cc34eca","Name": "Fist","Category": "Fists","Reinforcement": "Regular","Damage": "20/0/0/0/0","Damage Reduction": "0/0/0/0/0","Aux Effects": "0/0/0","Stat Requirements": "0/0/0/0","Stat Bonuses": "-/-/-/-","Critical": 100,"Weight": 0,"Stability": 0,"Durability": 0,"Sell Price": 0,"Spell Buff": "N/A","Range": "N/A","Buffable": "No","Infusable": "No"}]
 */


const InventorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    weapon: [{
        weaponId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Weapon',
            required: true
        },
        quantity:{
            type: Number,
            required: true,
            default: 1
        }
    }]
}, { timestamps: true })

const Inventory = mongoose.model('Inventory', InventorySchema)
module.exports = Inventory;