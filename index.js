const express = require("express");
const path = require('path');

const app = express();

//we can using concepts for http:// request
/*
app.get()
app.post()
app.put()
app.delete()
*/

//to render the html files
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    const buttonName = "Hey Whatsapp";
    res.render('index', { buttonName: buttonName, title: "This is a title.." });
});

app.get("/youtube", (req, res) => {
    res.send("hello Youtubers!!");
});

app.listen(3005, () => {
    console.log("Server running on port 3005");
});