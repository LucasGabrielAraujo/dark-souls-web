const logout = async (req, res) => {
    //limpiar la sesion
    req.session.destroy(err => {
        if (err) {
            console.error('Error when try to close session', err);
            return res.status(500).json({ message: 'Error when try to close session' })
        }
        // redirigir al susuario
        return res.redirect('/api/login');
    });
}

module.exports= {logout}