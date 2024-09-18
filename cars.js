// const cars = [
//   {
//     id: 1,
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 2,
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 3,
//     model: "BMW",
//     type: "5 series",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 4,
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 5,
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// const list = document.querySelector(".list");

// const markup = cars
//   .map(
//     ({ id, model, price, type, img }) =>
//       `<li data-car-id="${id}" class="li-css">
//       <h2>${model}</h2>
//       <h3>${type}</h3>
//       <p>${price}</p>
//       <img src="${img}" alt="${type} class="img-css"
//     </li>`
//   )
//   .join("");
// console.log(markup);
// list.insertAdjacentHTML("afterbegin", markup);

// const stroka = "Это была очень интересная книга, хотя и очень старая";
// console.log(stroka);
// const mes = stroka.split(" ");
// console.log(mes);

// let ogo = [];
// for (let i = 0; i < mes.length; i += 1) {
//   console.log(mes[i]);

// }

// const spun = mes.slice(2, 5);
// console.log(spun);
// console.log(mes);
// const part1 = mes.splice(0, 2);
// console.log(part1);
// const part2 = mes.slice(3, 8);
// console.log(part2);

// const newStroka = part1 + " " + spun + part2;
// console.log(newStroka);

// const array = [
//   {
//     name: "Artur",
//     age: 19,
//   },
//   {
//     name: "Denis",
//     age: 25,
//   },
//   {
//     name: "Yury",
//     age: 27,
//   },
//   {
//     name: "Leon",
//     age: 15,
//   },
//   {
//     name: "Zorro",
//     age: 23,
//   },
//   {
//     name: "Arizona",
//     age: 29,
//   },
//   {
//     name: "Oliver",
//     age: 35,
//   },
// ];
// console.log(array);
// const newArray = array.sort((a, b) => {
//   if (a.name < b.name) {
//     return -1;
//   }
//   if (a.name > b.name) {
//     return 1;
//   }
//   return 0;
// });
// console.log(newArray);

// class Nemo {
//   constructor(marka, model, age, color, doors) {
//     this.marka = marka;
//     this.model = model;
//     this.age = age;
//     this.color = color;
//     this.doors = doors;
//   }
// }
// const opel = new Nemo("opel", "vectra", "2020", "black", "5");

// console.log(opel);
// opel.doors = "3";
// console.log(opel);
// const audi = new Nemo("audi", "q7", "2019", "white");
// console.log(audi);

// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr);
// arr.forEach(function (elem, ind, mas) {
//   console.log(elem, ind, mas);
// });

// ===========================

// "use strict";

// /**
//  * Searches recursively number from the list
//  * @param {Array} list Source array
//  * @param {number} item Search item
//  * @returns {(number|null)} Number if the value is found or NULL otherwise
//  */
// function binary_search(list, item) {
//   let low = 0;
//   let high = list.length - 1;

//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);

//     const guess = list[mid];

//     if (guess === item) {
//       return mid;
//     } else if (guess > item) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }

//   return null;
// }

// const my_list = [1, 3, 5, 7, 9, 11, 13, 15];

// console.log(binary_search(my_list, 7)); // 1
// console.log(binary_search(my_list, -1)); // null

// //////////
// const dog = {
//   name: "Joy",
//   age: 5,
//   color: "black",
//   weight: 8,
//   say() {
//     return "say hello";
//   },
// };
// console.log(dog);
// const dogJson = JSON.stringify(dog);
// console.log(dogJson);
// const doggy = JSON.parse(dogJson);
// console.log(doggy);
// console.log(dog);
