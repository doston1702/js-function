let arr = [
  {
    name: "Raul",
    age: 14,
    isMarried: false,
    family: ["Mother", "Father", "Sister"],
  },
  {
    name: "Roma",
    age: 21,
    isMarried: false,
    family: ["Mother", "Father", "Brother"],
  },
  {
    name: "Amin",
    age: 16,
    isMarried: true,
    family: ["Mother", "Father", "Sister"],
  },
  {
    name: "Maksud",
    age: 20,
    isMarried: true,
    family: ["Mother", "Father", "Sister"],
  },
  {
    name: "Donik",
    age: 16,
    isMarried: true,
    family: ["Mother", "Father", "Sister"],
  },
  {
    name: "Sherik",
    age: 25,
    isMarried: true,
    family: ["Mother", "Father", "Sister"],
  },
];

console.warn("Homework №1: добавлена функция addWork(массив, промт или текст)");

let ask_work = prompt("Добавьте работу сотрудникам");

let addWork = (writeArr, writeText) => {
  for (let item of writeArr) {
    item.work = writeText;
  }
  console.log("Всем добавлена работа:", writeArr);
};
addWork(arr, ask_work);

console.warn(
  "Homework №2: добавлена функция addCool(массив, конфирм или boolean)"
);

let ask_cool = confirm("Ваши сотрудники крутые?");

let addCool = (writeArr, writeBoolean) => {
  for (let item of writeArr) {
    item.cool = writeBoolean;
  }
  console.log("Всем добавлена крутизна:", writeArr);
};
addCool(arr, ask_cool);

console.warn(
  "Homework №3: добавлена функция addCar(массив, бренд машины, сила машины, имя машины)"
);

let ask_car_brand = prompt("Назовите бренд для машины сотрудников");
let ask_car_power = prompt("Назовите мощь для машины сотрудников");
let ask_car_name = prompt("Назовите имя для машины сотрудников");

let addCar = (writeArr, carBrand, carPower, carName) => {
  for (let item of writeArr) {
    item.car = {
      brand: carBrand,
      power: carPower,
      name: carName,
    };
  }
  console.log("Всем добавлена машина:", writeArr);
};
addCar(arr, ask_car_brand, ask_car_power, ask_car_name);

console.warn("Homework №4: добавлена функция changeMarryTrue(массив)");

let changeMarryTrue = (writeArr) => {
  for (let item of writeArr) {
    item.isMarried = true;
  }
  console.log("isMarried изменено на true", writeArr);
};
changeMarryTrue(arr);

console.warn(
  "Homework №5: добавлена функция findMaxAge(массив), находит самого старшего человека"
);

let findMaxAge = (writeArr) => {
  let ages = [];
  let item;
  for (item of writeArr) {
    ages.push(item.age);
  }
  let max_age = Math.max(...ages);
  if (max_age == item.age) {
    console.log(item.name);
  }
};
findMaxAge(arr);

console.warn(
  "Homework №6: добавлена функция findMinAge(массив), находит самого младшего человека"
);

let findMinAge = (writeArr) => {
  let ages = [];
  for (let item of writeArr) {
    ages.push(item.age);
    let min_age = Math.min(...ages);
    if (min_age == item.age) {
      console.log(item.name);
    }
  }
};
findMinAge(arr);
