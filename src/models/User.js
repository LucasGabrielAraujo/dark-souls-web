const {mongoose} = require('mongoose');

/**
 * @openapi
 * components:
 *    schemas:
 *      User:
 *        type: object
 *        properties:
 *          username: 
 *            type: string
 *            example: AdmiralR
 *          email:
 *            type: string
 *            example: lucas@mail.com
 *          hashed_password:
 *            type: string
 *          name:
 *            type: string
 *            example: Lucas
 *          surname:
 *            type: string
 *            example: Araujo
 *          yearold: 
 *            type: integer
 *            example: 23
 *          registerDate:
 *            type: date
 *            example: 3/14/2024, 4:01 AM
 *          lastOnline:
 *            type: date
 *            example: 3/14/2024, 4:07 AM
 *          role:
 *            type: string
 *            example: admin
 *          online:
 *            type: boolean
 *            example: true
 *  */

const userSchema = new mongoose.Schema({
    username:{type:String, required:true, unique:true},
    email: {type:String, required:true, unique:true},
    hashed_password: {type:String, required:true},
    name: String,
    surname: String,
    yearold:  Number,
    registerDate: {type: Date, default:Date.now},
    lastOnline: Date,
    role:  { type : String , default:'usuario'},
    online: {type:Boolean, default:true},
})

const User = mongoose.model('User',userSchema);

module.exports= User;