const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop("Ralph");
}
function destructivelyRemoveFirstCat(){
    cats.shift("Bob");
}
function appendCat(){
  const allCats=[...cats, "Broom"];
  return allCats;
}
function prependCat(){
    const myCats = ["Arnold", ...cats];
    return myCats;
}
function removeLastCat(){
    const copyOfcats =cats.slice();
    copyOfcats.pop();
    return copyOfcats;
}
function removeFirstCat(){
    const myFavCats=cats.slice();
    myFavCats.shift();
    return myFavCats;
}