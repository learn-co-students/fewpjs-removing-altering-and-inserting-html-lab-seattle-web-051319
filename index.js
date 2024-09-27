
// let newHeader = "<h1 id='victory'>Aidi is a champion</h1>" ;

let main = document.querySelector("#main");
main.remove();
let newHeader = document.createElement("h1");
newHeader.id = "victory";

newHeader.textContent = "alsdjf is the champion";
document.body.appendChild(newHeader);
