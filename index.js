const express = require('express')
const { engine } = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const conn = require('./db/conn')

const authRouters = require('./routes/authRouters')
const dashRouters = require('./routes/dashRouters')

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use(session({
    name: 'session',
    secret: 'ProgramadoresCariocas',
    resave: true,
    saveUninitialized: false,
    store: new FileStore({
        logFn: function () { },
        path: require('path').join(require('os').tmpdir(), 'sessions'),
        cookie: {
            secure: false,
            maxAge: 3600000,
            expires: new Date( Date.now() + 3600000 ),
            httpOnly: true
        }
    })
}))

app.use( (req, res, next) => {
    
    if(req.session.idUser){
        res.locals.session = req.session
    }
    next()
})

app.use('/', authRouters)
app.use('/transactions', dashRouters)


conn
    .sync()
    .then(() => {
        app.listen(3000)
        console.log('rodando...')
    })
    .catch((err) => console.log(err))