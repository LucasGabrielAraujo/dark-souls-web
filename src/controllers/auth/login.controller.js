const passport = require('../../config/passport-config')

const login = async (req, res) => {
    // Autenticar el usuario
    if (req.session.userId) {
        return res.send('Autenticado')
    }
    passport.authenticate('local', async (err, user, info) => {
        if (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        // Autenticación exitosa, almacenar el ID del usuario en la sesión
        req.session.userId = user._id;
        res.redirect('/api/weapons');
    })(req, res); // Llamada a passport.authenticate con los objetos req y res
    
    // No envíes ninguna respuesta aquí, ya que la autenticación se maneja dentro de passport.authenticate
};
const getLogin = (req, res)=>{
    if (req.user) {
        res.json({username: req.user.username})
    } else{
        res.json('fail')
    }
}

module.exports = {login, getLogin}



/* 
    passport.authenticate('local', {
        successMessage: 'Login Successful!', 
        failureRedirect:'/api/login'
    })
    //verificar si esta autenticado
    if (req.session.userId) {
        res.send('Authenticado')
    }
    //autenticar el usuario
    let {username, password} = req.body;
    let user = await User.findOne({'username': username})
    if (!user) {
        res.status(401).json({message: 'Invalid username or password'})
    }
    const validPassword = await bcrypt.compare(password, user.hashed_password);
    if (!validPassword) {
        res.status(401).json({message: 'Invalid username or password.'})
    }
    //alacenar el id del usuario en la sesion
    req.session.userId = await user._id
    res.redirect('/api/weapons')
*/