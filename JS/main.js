// we will creat div and h, p tag and insert images on JS

//const div = document.createElement("div");
/* div.innerText = "My name is : Zahidul Hoque Molla";
 */
//div.innerHTML = "My name is: Maria Mehbin";
//console.log(div);

// now we will creat p tag on Div thats why we will use append command

//const p = document.createElement("p");
//p.innerHTML = "My name is Ayra mehbin";

// we will use InnerHTML not Innertext because inner text will only show text

//div.append(p);
//console.log(div);

// we will catch ul now

/* const ul = document.querySelector(".ul");
console.log(ul.children);
const allchil = ul.children;
console.log(allchil[1].nextElementSibling.innerHTML); */

// call sibling bodys sibling is js

//console.log(ul.nextElementSibling);

// To catch Button, we will make it responsive; Event Listener

// Eventlistener shunbe then action then function korbo:

/* const button = document.querySelector("button");
button.addEventListener("Click", function () {
  console.log("Take action :");
}); */

// now  will insert H1 tag Div , Images

const body = document.body; // give all things to body
const div = document.createElement("div");
const img = document.createElement("img");
const h1 = document.createElement("h1");
const span = document.createElement("span");
const button = document.createElement("button");

//console.log(div, img, h1, button);

// Insert attribute on image tag.. Like SRC tag

img.setAttribute("src", "./Image/text Image.jpg");
img.setAttribute("allt", "This is image.jpg");
img.setAttribute("title", "Picture of flowers");

// to give style to image
img.style.width = "100%";
img.style.objectFit = "cover";

// Insert h1 tag: With some text,
h1.innerHTML = "This is begaining of era 2024:";

// give style to h1 tag:
h1.style.textAlign = "center";
h1.style.color = "blue";
h1.style.textTransform = "uppercase";

// Now we will add on span tag in H1 tag

button.innerHTML = "Click Me";

// Now we will add style on Button Tag

button.style.color = "red";
button.style.margin = "auto";
button.style.display = "block";
button.style.cursor = "pointer";

// Now we will introduce span tag

span.innerHTML = " :Zahidul";

// now we will give style on span tag

span.style.color = "green";

// appen whole things to body

body.appendChild(div); // creat div om body
div.appendChild(img); // insert img on div
div.appendChild(h1); // insert text on Div
h1.appendChild(span); // add span tag on H1 tag
div.appendChild(button); // insert button on div
console.log(div);

button.addEventListener("click", function () {
  alert("Yes it has been clicked:");
  span.style.padding = "10px,20px";
  span.style.color = "pink";
  // give style to h1 tag
  h1.style.background = "red";
  // make resize image
  img.style.width = "50%";
  img.style.margin = "auto";
  img.style.display = "block";

  // give style to body
  body.style.background = "black";
}); // here we make afunction that if we click on button then it will give one alert

// Other way to make maindiv it will help us to insert more variable

// the process is same jast maindiv  akta const add korte hobe
// this is the harder syntex. Not wise to use this

/* const maindiv = body.appendChild(div);
const maindivImg = div.appendChild(img);
const maindivh1 = div.appendChild(h1);
const maindivButton = div.appendChild(button);
console.log(maindiv); */
