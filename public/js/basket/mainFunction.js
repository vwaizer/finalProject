import { database } from "/public/js/basket/database.js"
let inputArray
inputArray=[database[0].name,15]
localStorage.setItem("item",JSON.stringify(inputArray))
inputArray.push(database[1].name,15)
localStorage.setItem("item",JSON.stringify(inputArray))
localStorage.setItem("database",JSON.stringify(database))
console.log(database[0])