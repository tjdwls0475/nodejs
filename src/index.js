const express = require('express')
const path = require('path')
const hbs = require('hbs')

const bodyParser = require('body-parser')
const { application } = require('express')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
const port = process.env.PORT || 5000

const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDir))

app.get('/*', (req, res)=>{
    res.render('index', {
        제목: 'Sock Shop Closed Temporarily'
    })
})
// app.get('/help', (req,res)=>{
//     res.send('어떤 도움이 필요하십니까?')
// })
// app.get('/about', (req,res)=>{
//     res.send('express server를 작동하는 application입니다.')
// })

// var server = app.listen(port, ()=>{
//     console.log(`Server is up and running at port ${port}`)
// })

var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("App now running in %s mode on port %d", app.get("env"), port);
  });
