//defining the object
const HomeInventoryDatabase = {}
//starting arrays for each category
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

// craft data item
const artSupplies = {
    name: "Art Supplies Box",
    location: "Closet",
    description: "This holds all the things I need for crafts."
}

// craft data item
const painting = {
    name: "Painting of Santorini",
    location: "Living Room",
    description: "This painting was given to me from my friend, emily."
}

//pushing crafts to array
homeinventorydatabase.crafts.push(artSupplies, painting);

// furniture data item
const pinkChair = {
    name: "Velvet Pink Chair",
    location: "Living Room",
    description: "This antique chair was my Great-Grandma Dot's."
}

// furniture data item
const table = {
    name: "Heart Pine Crafted Table",
    location: "Dining Room",
    description: "This table was crafted by my dad for me."
}

// furniture data item
const blueChair = {
    name: "Blue Chair",
    location: "Living Room",
    description: "This chair was given to me from my mom."
}

// furniture data item
const bambooShelf = {
    name: "Bamboo Shelf",
    location: "Living Room",
    description: "This antique bamboo shelf adds flavor to the room."
}

//pushing furniture to array
homeinventorydatabase.furniture.push(pinkChair, table, blueChair, bambooShelf);

// electronics data item
const tv = {
    name: "TV",
    location: "Living Room",
    description: "Small tv but it works!"
}

// electronics data item
const appleTV = {
    name: "Apple TV",
    location: "Living Room",
    description: "Really happy I have one of these."
}

// electronics data item
const alarm = {
    name: "Alarm",
    location: "Living Room",
    description: "REALLY glad we have this since... #eastnashville."
}

// electronics data item
const keurig = {
    name: "Keurig Coffee Maker",
    location: "Dining Room",
    description: "Great for quick coffee in the morning."
}

//pushing eletronics to array
homeinventorydatabase.electronics.push(tv, appleTV, alarm, keurig);



const saveDatabase = function (databaseObject, localStorageKey) {

    //convert to string
    const stringifiedDatabase = JSON.stringify(databaseObject);

    //create key in local storage and store string in inventory database as the value
    localStorage.setItem(localStorage, stringifiedDatabase);
}

saveDatabase(homeinventoryDatabase, "HomeInventory");