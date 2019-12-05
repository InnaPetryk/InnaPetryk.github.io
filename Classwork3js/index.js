// const car = {
//     color: "red",
//     euroblyaha: true,
//     age: 4,
//     wheels: [
//         "first",
//         "second",
//         "third",
//         "fourth"
//     ]
// };
// for (let key in car) {
//  if (key === "wheels") {
//     for (let i in car[key]){
//         console.log(car[key][i])
//     }
// else {
// console.log (car[key]);

// for(let i = 0; i < car[key]; i++) {
//     console.log(car[key][i])
// }
// else {
//     console.log(car[key])
// }

// for (let i=1; i < 100; i=i+3) {
//     console.log (i)
// }

// const children = [
// {a: "boy"},
// {a: "girl"},
// {a: "boy"},
// {a: "twince"},

// ];
// for(let i=0; i<children.length; i=i+1){
//     if(children[i].a ==="boy"){
//         console.log("male")
//     }
//     else if (children[i].a ==="girl"){
//         console.log("female")
//     }
//     else {
//         console.log("twince")
//     }
// }


// const arr = [[[[[1]]]]];
// console.log(arr[0][0][0][0][0])
// console.log(obj)

// let i = 1;
// debugger;
// while (i<= 5) {
// console.log(i);
// i = i+1;
// debugger;
// }

// let i = 5;
// while (i<= 1) {
//     console.log(i);
//     i--;
// }
// let from = 1;
// const to = 10;
// const oddNumbers = [];
// const evenNambers = [];
// 	while (from<= to) {
        
//         if (from % 2) {
//         oddNumbers.push(from);
//         }
//         else {
//             evenNumbers.push(from);
//         }
//         from++;
//         debugger;
//     }

// let i = 1;
// while (i <=5) {
//     console.log(i)
//     i++;
// }
// let j = 1;
//     do{
//         console.log(j)
//         j++;
//     }
// //     while (j<=5)

// function myFunction(text) {
//     console.log(text);

// }
// function sum(a, b) {
//     const sum = a+b;
//     console.log(sum);
// }

// sum(2, 2);
// sum(3, 5);
// sum(2, -1);
//     function pow(a, b) {
//         let result = a;
//         for(let i =1; i < b; i++){
//             result *= a;

//         }
//         return result;
//     }
// pow(2, 2);
// pow(2, 3);

// function hello(name) {
//     let name = Inna;
//      return "Hello, Inna" + name + "!";

//     // return "Hello, ${name}!;"

// }
// const pryvit = function(name) {
//     console.log ("Hello, ${name}");
//     }

//  function hello(name) {
//  console.log ("Hello, ${name}");
// }
//  const hi = (name) => {
//     console.log ("Hello, ${name}");

//  }
// }
// const sum = function(a, b) {
//    console.log(a + b);
//    }

// function diff(a, b) {
//     console.log(a - b);
//  }

//  const pow = (a, b) => {
//      let res = a;
//      for (let i = 1; i < b; i++) {
//         res *= a;
//      }
//      console.log(res);
//     }

// const sum = (a, b) => a+b; 
// const result = sum(2,3)
// console.log(result)

// const sum = name = > "Hello, ${name}!";
// const result = sum("qweqe")
// console.log(result)

// const a = 1;
// function example(){
// console.log(a)
// }
//     function example2() {
//     const a = 2;
//     console.log(a)
// }
// example2()
// if(true) {
//     const a=3;
//     console.log(a)
// }

// {
// const a = 5;
// console.log(a)
// }


// alert ("Hello, world");
// const res = confirm("Are you ready?");
// if (!res) {
// console.log(res)
// }

// const name = prompt("what is your name?");
// console.log("Hello, ${name}")

// const btn = document.querySelector("#btn");
// btn.onclick = function() {
//     alert ("I am push");
// }

// btn.addEventListener("click", function(){
//  allert("I am push");
// });
// console.dir(btn)

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function() {
// const name = prompt(`what is your name?`)
//     alert(`Hello, ${name}!`);
// });

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function(e) {
//     console.log(e);
// });
// const btn = document.querySelector("#btn");

// document.addEventListener("click", function(e) {
//     console.log(e.pageX, e.pageY);
// });
// dad -Jone
// mom -Kate
// son -Bob
// const who = whoIs("Kate");
// console.log(who);

// function whoIs(name) {
//     if(name === "John") {
//     return "dad";
// }
//     else if (name === "Kate") {
//         return "mom";
//     }
//     else if (name === "Bob") {
//         return "son";
//     }
//     else {
//         return "noone";
//     }
// }
// const who = newWhoIs("Kate");
// console.log(who);

// function newWhoIs(name) {
//     switch(name) {
//         case"John":
//             console.log("dad");
//             break;
//         case "Kate":
//             console.log("mom");
//             break;
//         case "Bob":
//             console.log("son");
//             break;
//         defoult:
//             console.log("noone");
//     }
// }

// for(let i=1; i <=10; i++) {
//     if(i === 6) {
//         break;
//     }
//     else if(i === 3) {
//         continue;
//     }
//     console.log(i);
// }
// const arr = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10]

// // const res = arr.concat(arr2)
// // console.log(res);

// const res2 = arr.every(e => typeof e === "number");

// console.log(res)
// const arr = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10]

// const res = arr.filter(function(e) {
//     return e >2;
// });
// console.log(res)

// const arr = [
//     {id: 1, name: "Ostap"},
//     {id: 2, name: "Nazar"},
//     {id: 3, name: "Nestor"}
// ];
// const arr1 = ["Ostap", "Nazar", "Nestor"];

// function resOut(res) {
//     console.log(res)
// }
// function sum(a,b,callbackFunction) {
//     const res = a + b;
// if(typeof callbackFunction === "function")
//     callbackFunction(res);
// }
// sum(2,5,resOut)

// function sum(a,b,cf){
//     const res = a + b;
//     if(typeof cf === "function"){
//         cf(res);
//     }
// }
// sum(e =>e === 3) 


// const arr = [1, 2, 3, 4, 6]
// const res = arr.indexOf(3)
// console.log(res)

// const res1 = arr.findIndex(e => e === 3)
// console.log(res1)


// const arr = [
//     [1, 2, 3, 4, 5, 6]
//     [1, 2, 3, 4, 5, 
//         [1, 2, 3, 4]
//       ]
//     ]
// ]
// const res = arr.flat(1);
// console.log(res)

// const arr = ["red, "green", "blu"];
// const res = arr.forEach(e => {
//     document
//     .querySelector('.d')
//     .innerHTML += <div style="background: ${e}; width: 100px; height: 100px"></div>
// });

// const arr = [1, 2, 3, 4, 6, 7]
// const res = arr.sort((a,b) =>{
//     if (a-b >0) {
//         return 1;
//     }
//     else {
//         return -1;
//     }
// })
// console.log(res)