const displayShoes = async() => {
    const shoesJson = await getShoes();
    const shoesContainer = document.getElementById("shoes");

    if(shoesJson == ""){
        console.log("Invaild");
        return;
    }

    shoesJson.forEach((shoes) => {
        const section = document.createElement("section");
        shoesContainer.append(section);

        const h3 = document.createElement("h3");
        h3.innerHTML = shoe.type;
        section.append(h3);

        const brand = document.createElement("p");
        brand.innerHTML = `<strong>Brand: </strong> ${shoes.brand}`;
        section.append(brand);

        const type = document.createElement("p");
        type.innerHTML = `<strong>Type: </strong> ${shoes.type}`;
        section.append(type);

        const color = document.createElement("p");
        color.innerHTML = `<strong>Colors: </strong> ${shoes.color}`
        section.append(colors);

        const price_range = document.createElement("p");
        price_range.innerHTML = `<strong>Price Range: </strong> ${shoes.price_range}`
        section.append(price_range);

        const img = document.createElement("img");
        img.src = "https://node-project-5db4.onrender.com" + shoes.img;
        section.append(img);

    });
}

const getShoes = async() => {
    try{
        return (await fetch("https://node-project-5db4.onrender.com/api/shoes")).json();
    }catch(error){
        console.log("There was an error retrieving JSON.");
        return " ";
    }
}

window.onload = () => displayShoes();