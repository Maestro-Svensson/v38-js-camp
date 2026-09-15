let eventName = "Aurora Live";
eventName = "Nord Glow"; 

function totalMinutes(hours, minutes) {
  return hours * 60 + minutes; 
}

console.log(totalMinutes(1, 30));

const cities = ["Malmö", "Göteborg", "Umeå"];
console.log(cities[2]);
console.log(cities.length);

const product = { title: "Hörlurar", stock: 4 };
console.log(product.title); 

if (5 === "5") {
  console.log("lösa jämförelsen ljuger");
}

for (const city of cities) {
  console.log(city);
}