// Задание 1

for (let i = 10; i < 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Задание 2

let profile = {
  name: "Нурали",
  lastName: "Калханов",
  age: 16,
  pet: false,
};

// Задание 3

const array = [
  "я в Симбирск,", // 0
  "в трактире.", // 1
  "с утра", // 2
  "В ту же ночь", // 3
  "Я остановился", // 4
  "для закупки", // 5
  "что и было поручено Савельичу.", // 6
  "приехал", // 7
  "где должен был", // 8
  "нужных вещей", // 9
  "отправился по лавкам", // 10
  "пробыть сутки", // 11
  "Савельич", // 12
];

let result =
  array[3] +
  " " +
  array[7] +
  " " +
  array[0] +
  " " +
  array[8] +
  " " +
  array[11] +
  " " +
  array[5] +
  " " +
  array[9] +
  "," +
  " " +
  array[6] +
  " " +
  array[4] +
  " " +
  array[1] +
  " " +
  array[12] +
  " " +
  array[2] +
  " " +
  array[10];

console.log(result);

// Задание 4

const newFunction = (firstName, lastName) => {
  const fullName = `${firstName} ${lastName}`;
  console.log(fullName);
};

newFunction('Нурали', 'Калханов');

// Задание 5

let x = 21;

while (x < 67) {
  if (x % 2 != 0) {
    console.log(x)
  }
  x++;
}