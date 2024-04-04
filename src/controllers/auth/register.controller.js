const bcrypt= require('bcrypt');
const User = require('../../models/User');
const register = async (req, res)=>{
    try {
        const {username, email, password, name, surname, yearold} = req.body;
        
        //verificar si existe el usuario
        const existingUser = await User.findOne({ $or: [{'username': username}, {'email':email}]})
        console.log(existingUser);
        if(existingUser){
            return res.status(400).json({message: 'The user already exist'})
        }
        if(!password){
            return res.status(400).json({message: 'Password is required'})
        }
        //hashear la password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        
        //crear usuario
        const newUser = new User({
            username: username,
            email: email,
            hashed_password:hashedPassword,
            name: name,
            surname: surname,
            yearold: yearold
        })
        //guardar usuario
        await newUser.save();

        res.status(201).json({ message: 'User created succesfully'})
    
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error to create an user'})
    }
}
module.exports = {register};