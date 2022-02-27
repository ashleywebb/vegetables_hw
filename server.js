const express = require('express');
const app = express();
const vegetables = require('./models/vegetables'); // importing vegetables from wherever it is
const reactViews = require('express-react-views')
const createEngine = reactViews.createEngine
const renderFile = createEngine()
const mongoose = require('mongoose')


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

// app.get('/vegetables', (req, res) => {
//     res.render("Index", { vegetables })
// });

app.get('/vegetables', (req,res) => {
    vegetables.find({}, (err, foundVegetables) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('Index', {
                vegetabless: foundVegetables
            })
        }
    })
});

//NEW week11day01
app.get('/vegetables/new', (req, res) => {
    res.render("New");
})

//DELETE

//UPDATE

//CREATE
app.post('/vegetables', (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    vegetables.create(req.body, (err, createdVegetable) => {
        if (err) {
            res.status(403).send(err)
        } else {
            console.log(createdVegetable)
            res.redirect('/fruits')
        }
    })
    
})

//EDIT

//SHOW week10day3
app.get('/vegetables/:id', (req, res) => {
    vegetables.findById(req.params.id, (err, foundVegetables) => {
        if(err) {
            res.status(400).send(err)
        } else {
            res.render('Show', {
                vegetabless: foundVegetables
            })
        }
    })    
})


// listening on port 3000
app.listen(3000, () => {
    console.log('If you are reading this I am still listening')
})