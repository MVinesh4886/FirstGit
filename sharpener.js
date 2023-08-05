var header = document.getElementById("main-header");
header.style.borderBottom = "2px solid #000000";

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[3].style.fontWeight = "bold";
// items[3].style.color = "Green";
// items[1].backgroundColor = "yellow";
// // items.style.backgroundColor = "#f4f4f4";

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

//?getElementsByTagName();

// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[3].style.fontWeight = "bold";
// li[3].style.color = "Green";
// li[1].backgroundColor = "yellow";

// // items.style.backgroundColor = "#f4f4f4";

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

//querySelector
var header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc";
var input = document.querySelector("input");
input.value = "hello world";
var submit = document.querySelector('input[type="submit"]');
submit.value = "send";

var item = document.querySelector(".list-group-item");
item.style.color = "red";

var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color = "green";

var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "coral";

//?Query SelectorAll
var titles = document.querySelectorAll(".title");

console.log(titles);
titles[0].textContent = "Hello";

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");
var nthChild = document.querySelectorAll("li:nth-child(2)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
  even[i].style.color = "green";
}
//Traversing The DOm
var itemList = document.querySelector("#items");
//Parent Node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);

// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// //FirstChild
// console.log(itemList.firstChild);
// //FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello";

//lastChild
// console.log(itemList.lastChild);
// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

//nextSibling
// console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementChild.style.color = "green";

//createElement

//create a div
var newDiv = document.createElement("div");

//Add class
newDiv.className = "hello";
//Add id
newDiv.id = "hello1";
//Add attributes
newDiv.setAttribute("title", "Hello Div");

//create text node
var newDivText = document.createTextNode("Hello world");
//Add text to Div
newDiv.appendChild(newDivText);
var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);
newDiv.style.fontSize = "20px";
container.insertBefore(newDiv, h1);


