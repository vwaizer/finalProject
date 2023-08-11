import { database } from "/finalProject/public/js/basket/database.js";

function findName(pram) {
    let newArray = [];
    pram.forEach((element) => {
      newArray.push(element.price);
    });
    return newArray;
  }
  const a = findName(database);
  document.getElementById("itemleftbox").innerHTML = a;