const { mongoose } = require('mongoose')

/**
 * @openapi
 * components:
 *    schemas:
 *      Weapon:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            example: 655528dc21de714d0cc34f6c
 *          name:
 *            type: string
 *            example: Uchigatana
 *          category:
 *            type: string
 *            example: Katana
 *          reinforcement:
 *            type: string
 *            example: Regular
 *          damage:
 *            type: string
 *            example: 115/0/0/0/0
 *          damageReduction:
 *            type: string
 *            example: 45/25/20/20/25
 *          auxEffects:
 *            type: string
 *            example: 0/30/0
 *          statRequirements:
 *            type: string
 *            example: 11/16/0/0
 *          statBonuses:
 *            type: string
 *            example: E/C/-/-
 *          critical:
 *            type: integer
 *            example: 100
 *          weight:
 *            type: float
 *            example: 5.5
 *          stability:
 *            type: integer
 *            example: 30
 *          durability:
 *            type: integer
 *            example: 35
 *          sellPrice:
 *            type: integer
 *            example: 100
 *          spellBuff:
 *            type: string
 *            example: N/A
 *          range:
 *            type: string
 *            example: N/A
 *          buffable:
 *            type: string
 *            example: Yes
 *          infusable:
 *            type: string
 *            example: Yes
 *          img:
 *            type: string
 *            example: C:\\Users\\genericUser\\images\\uchigatana.webp
 */

const weaponSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  reinforcement: { type: String, required: true },
  damage: { type: String, required: true },
  damageReduction: { type: String, required: true },
  auxEffects: { type: String, required: true },
  statRequirements: { type: String, required: true },
  statBonuses: { type: String, required: true },
  critical: { type: Number, required: true },
  weight: { type: Number, required: true },
  stability: { type: Number, required: true },
  durability: { type: Number, required: true },
  sellPrice: { type: Number, required: true },
  spellBuff: { type: String, required: true },
  range: { type: String, required: true },
  buffable: { type: String, required: true },
  infusable: { type: String, required: true },
  img: { type: String, required: true },
});

const Weapon = mongoose.model('Weapon', weaponSchema)

module.exports = Weapon;