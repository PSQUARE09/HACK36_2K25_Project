// Backend Server of our project

const express = require('express')
const app = express();
const path = require('path');
const fs = require('fs');
const userModel = require('./models/user');


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))



app.get('/', (req, res) => {
    res.render("main");
})
app.get('/login', (req, res) => {
    res.render("login");
} )



app.post("/new", function(req, res){
    fs.writeFile(`./files/${req.body.name.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect("/");
    })
})
// tried mongodb server but all last store data in NOSQL.
// app.get('/home',(req,res) => {
//     res.render("main.ejs");
// })

// app.post("/new", async (req, res) => {
//     try {
//         await userModel.create({
//             name: req.body.name,
//             email: req.body.email,
//             details: req.body.details
//         });
//         res.redirect("/"); // After saving, redirect back to home (or show a success page if you want)
//     } catch (err) {
//         res.send("Error saving data: " + err.message);
//     }
// });


app.listen(3000)
