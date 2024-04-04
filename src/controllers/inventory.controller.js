const Inventory = require("../models/Inventory");

const getInventory = async (req, res) => {

    try {
        let inventoryItem = await Inventory.find({userId: req.session.userId});
        
        if (inventoryItem.length<=0){
            return res.status(403).json({message:'No items in your inventory'});
        }
        res.status(200).json({inventory: inventoryItem});
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Error' });
    }
}
const postInventory = async (req, res) => {
    try {
        const id = req.session.userId;
        const { weaponId, quantity } = req.body;

        if (!id) {
            throw new Error('No session active');
        }

        const item = new Inventory({
            userId: id,
            weapon: [{
                weaponId: weaponId,
                quantity: quantity
            }]
        })

        await item.save();
        res.status(201).json(item);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error when create the inventory' });
    }

}
module.exports = { getInventory, postInventory };