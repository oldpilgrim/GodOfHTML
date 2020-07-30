const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    res.send("Your chav level is " + Number(num1 + num2));
})

/*
app.get("/lol", (request, response) => {
    response.send("nah");
})
*/

app.listen(3000, () => {
    console.log("yeaeeaheahea");
});