const express = require('express');
const app = express();
const vegetables = require('./models/vegetables'); // importing vegetables from wherever it is
const reactViews = require('express-react-views')
const createEngine = reactViews.createEngine
const renderFile = createEngine()


app.set('view engine', 'jsx');
app.engine('jsx', renderFile);

// MIDDLEWARE 
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    console.log(req.body)
    next()
})

//INDEX week10day3
app.get('/', (req, res) => {
    res.send(`<h1>hello</h1>`)
});

app.get('/vegetables', (req, res) => {
    res.render("/home/runner/FunctionalGloriousInstitute/views/vegetables/Index.jsx", { vegetables })
});

//NEW week11day01
app.get('/vegetables/new', (req, res) => {
    res.render("/home/runner/FunctionalGloriousInstitute/views/vegetables/New.jsx");
})

//DELETE

//UPDATE

//CREATE
app.post('/vegetables', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    vegetables.push(req.body)
    res.redirect('/vegetables')
})

//EDIT

//SHOW week10day3
app.get('/vegetables/:indexOfvegetablesArray', (req, res) => {
    res.render('Show', {
        vegetable: vegetables[req.params.indexOfvegetablesArray]
    })
})


// listening on port 3000
app.listen(3000, () => {
    console.log('If you are reading this I am still listening')
})