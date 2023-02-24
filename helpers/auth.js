module.exports.checkAuth = function ( req, res, next ) {

    const sessionIdUser = req.session.idUser

    if( !sessionIdUser || sessionIdUser === undefined ) {
        let message = 'O usuário não está logado'
        res.render('authentication/login', {message})
        return
    }

    next()
}