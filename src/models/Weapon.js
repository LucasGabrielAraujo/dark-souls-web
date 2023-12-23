const {Schema, model, mongoose} = require('mongoose')

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
  });

  const Weapon = mongoose.model('Weapon', weaponSchema)

  module.exports = Weapon;