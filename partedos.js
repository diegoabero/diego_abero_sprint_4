// 1. Obtener caracteres con masa superior a 100
const massGreaterThan100 = characters.filter((c) => c.mass > 100);
console.log(massGreaterThan100);
// Resultado: [{ name: "Darth Vader", height: "202", mass: "136", eye_color: "yellow", gender: "male" }]

// 2. Obtener personajes con altura inferior a 200
const heightLessThan200 = characters.filter((c) => c.height < 200);
console.log(heightLessThan200);
// Resultado: 
// [
//   { name: "Luke Skywalker", height: "172", mass: "77", eye_color: "blue", gender: "male" },
//   { name: "Leia Organa", height: "150", mass: "49", eye_color: "brown", gender: "female" },
//   { name: "Anakin Skywalker", height: "188", mass: "84", eye_color: "blue", gender: "male" }
// ]

// 3. Obtener una matriz con todos los nombres
const allNames = characters.map((c) => c.name);
console.log(allNames);
// Resultado: ["Luke Skywalker", "Darth Vader", "Leia Organa", "Anakin Skywalker"]

// 4. Obtener un array de objetos con sólo las propiedades nombre y altura
const namesAndHeights = characters.map((c) => ({ name: c.name, height: c.height }));
console.log(namesAndHeights);
// Resultado: 
// [
//   { name: "Luke Skywalker", height: "172" },
//   { name: "Darth Vader", height: "202" },
//   { name: "Leia Organa", height: "150" },
//   { name: "Anakin Skywalker", height: "188" }
// ]

// 5. Encontrar el primer personaje con ojos marrones.
const firstBrownEyes = characters.find((c) => c.eye_color === "brown");
console.log(firstBrownEyes);
// Resultado: { name: "Leia Organa", height: "150", mass: "49", eye_color: "brown", gender: "female" }

// 6. Obtener todos los personajes masculinos
const maleCharacters = characters.filter((c) => c.gender === "male");
console.log(maleCharacters);
// Resultado: 
// [
//   { name: "Luke Skywalker", height: "172", mass: "77", eye_color: "blue", gender: "male" },
//   { name: "Darth Vader", height: "202", mass: "136", eye_color: "yellow", gender: "male" },
//   { name: "Anakin Skywalker", height: "188", mass: "84", eye_color: "blue", gender: "male" }
// ]

// 7. Obtener todos los personajes femeninos
const femaleCharacters = characters.filter((c) => c.gender === "female");
console.log(femaleCharacters);
// Resultado: [{ name: "Leia Organa", height: "150", mass: "49", eye_color: "brown", gender: "female" }]

// 9. Obtener una matriz con todas las alturas
const allHeights = characters.map((c) => c.height);
console.log(allHeights);
// Resultado: ["172", "202", "150", "188"]

// 10. Imprimir en la consola los nombres de todos los personajes.
characters.forEach((c) => console.log(c.name));
// Resultado:
// "Luke Skywalker"
// "Darth Vader"
// "Leia Organa"
// "Anakin Skywalker"

// 11. Encontrar el primer personaje que tenga ojos de color azul y que su peso sea mayor a 80
const firstBlueEyesMassOver80 = characters.find((c) => c.eye_color === "blue" && c.mass > 80);
console.log(firstBlueEyesMassOver80);
// Resultado: { name: "Anakin Skywalker", height: "188", mass: "84", eye_color: "blue", gender: "male" }

// 12. Verificar si todos los personajes con ojos azules tienen una altura mayor a 170.
const allBlueEyesHeightOver170 = characters
  .filter((c) => c.eye_color === "blue")
  .every((c) => c.height > 170);
console.log(allBlueEyesHeightOver170);
// Resultado: true
