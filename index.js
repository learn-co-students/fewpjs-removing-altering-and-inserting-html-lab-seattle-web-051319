// Write your code here!
console.log('here')
let el = document.getElementById('main');
el.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
document.body.appendChild(newHeader);

// let champ = document.getElementById("h1#victory");
newHeader.innerHTML = '<h1>YOUR-NAME</h1> is the champion';