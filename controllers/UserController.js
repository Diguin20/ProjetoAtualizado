const User = require('../models/User')
const bcrypt = require('bcryptjs')
const session = require('express-session')


let message

module.exports = class UserController {
    static getLogin(req, res) {
        res.render('authentication/login')
    }

    static async postLogin(req, res) {
        const { email, password } = req.body

        const user = await User.findOne({ where: { email: email } })
        if (!user) {
            message = 'Usuário não encontrado'
            res.render('authentication/login', { message })
            return
        }

        const passwordMatch = bcrypt.compareSync(password, user.password)
        if (!passwordMatch) {
            message = 'Senha inválida'

            res.render('authentication/login', { message })
        }

        req.session.idUser = user.id

        console.log('Login realizado com sucesso')

        req.session.save(function (error) {
            if (error) {
                return next(error)
            }
            res.redirect('/transactions/dashboard')

        })

    }

    static getRegister(req, res) {
        res.render('authentication/register')
    }

    static async postRegister(req, res) {
        const { name, email, password, confirm_password } = req.body

        const userExists = await User.findOne({ where: { email: email } })
        if (userExists) {
            message = 'O usuário já está cadastrado'

            res.render('authentication/register', { message })
            return
        }

        if (password !== confirm_password) {
            message = 'As senhas não conferem'

            res.render('authentication/register', { message })
            return
        }

        const salt = bcrypt.genSaltSync(10)
        const password_cript = bcrypt.hashSync(password, salt)

        const user = {
            name,
            email,
            password: password_cript
        }

        await User.create(user)
            .then(() => {
                res.redirect('/')

            })
            .catch((error) => { console.log(error) })

    }

    static getLogout(req, res) {
        req.session.destroy()
        res.redirect('/')
    }
}