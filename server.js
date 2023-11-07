const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html")
});

app.get("/api/shoes", (req, res) => {
    const shoes = [];
    shoes[0] ={
        brand: "Birkenstock",
        type: "Sandals",
        activity:"Casual",
        colors: ["Brown", "Beige"],
        price_range: "$$",
        img: "images/birkenstocks.jpeg"
    };
    shoes[1] ={
        brand: "Converse",
        type: "Sneaker",
        activity:"Skateboarding",
        colors: "White",
        price_range: "$",
        img: "images/converse.webp"
    };
    shoes[2] ={
        brand: "Crocs",
        type: "Sandal",
        activity:"Comfort",
        colors: "Baby Blue",
        price_range: "$",
        img: "images/crocs.webp"
    };
    shoes[3] ={
        brand: "Nike",
        type: "Sneaker",
        activity:"Casual",
        colors: "White and Blue",
        price_range: "$$",
        img: "images/converse.webp"
    };
    shoes[4] ={
        brand: "Christian Louboutin",
        type: "Heels",
        activity:"Dressy",
        colors: "Beige",
        price_range: "$$$$",
        img: "images/lilac.jpg"
    };
    shoes[5] ={
        brand: "Adidas",
        type: "Sneaker",
        activity:"Athletic",
        colors: "Black, White, and Grey",
        price_range: "$$",
        img: "images/nmd.avif"
    };
    

    res.json(shoes);
});

app.listen(3000, () => {
    console.log("I'm listening");
});