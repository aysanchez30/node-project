const express = require("express"); 
const app = express();

app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/api/cakes', (req, res)=> {
    const cakes = [
        "birthday cake", 
        "red velvet", 
        "cheese cake", 
        "chocolate"
    ];
    res.send(cakes);
});

app.listen(3000, () => {
    console.log("I'm listening");
});