const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sql = require('./db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (rew, res) => {
    res.send('Hello World!');
});

app.get("/students", function(req, res){
    sql.query("SELECT * FROM students", (err, mysqlres) => {
    if (err) {
    console.log("error: ", err);
    res.status(400).send({message: "error in getting all students: " + err});
    return;
    }
    console.log("got all students...");
    res.send(mysqlres);
    return;
    });
    });

app.listen(8080, () => {
    console.log('listening on 8080');
})