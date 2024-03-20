const btn1 = document.querySelector("#btn1");
btn1.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

  const btn = document.querySelector("#btn");
  btn.onclick = alertFunction;
  btn.addEventListener("click", alertFunction);
  // this way, there are 2 scripts running on the same btn so you get 2 alert messages popups
    
// 3 methods for function call
// btn1.onclick = () => alert("Hello World"); || inline arrow function call 
// btn2.addEventListener("click", () => { }) || inline arrow function call since there's another elemtn you need the {}
// btn.addEventListener("click", function (e) { }) || callback function call and creation
// btn.addEventListener("click", alertFunction); \ function alertFunction (e) {}  || callback function call with reference somewhere else

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });











// a <p> with red text that says “Hey I’m red!”

const container = document.querySelector("#container");

const pRed = document.createElement("p");
pRed.style.color = "red";   
pRed.textContent = "Hey, I'm red!"

container.appendChild(pRed);

// an <h3> with blue text that says “I’m a blue h3!”

const h3Blue = document.createElement("h3");
h3Blue.style.color = "blue";
h3Blue.textContent = "I'm a blue h3!"

container.appendChild(h3Blue);

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, 
// append the <h1> and <p> to it before adding it to the container.

const newDiv = document.createElement("div");

const h1 = document.createElement("h1");
const secondP = document.createElement("p");
newDiv.append(h1, secondP); // if you have multiple childs to append, using ".append" works instead of ".appendChild"
// to append children to the container "newDiv", first you need to declare those variables with createElement

h1.textContent = "I'm in the div!";
secondP.textContent = "ME TOO!";
container.appendChild(newDiv);




