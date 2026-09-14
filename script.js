const eventName = "svensson programmering";
let ticketCount = 0;

console.log(eventName);
console.log(eventName);
ticketCount = 10;
console.log(ticketCount);

const isVip = false;
console.log(isVip);

console.log("------------------------------------------------------------------")

function totalMinutes(hours, minutes) {
  return hours * 60 + minutes;
}

const travel = totalMinutes(2, 15);
console.log(travel); // 135


console.log("------------------------------------------------------------------")


const isMember = true;
let shipping = 79;

if (isMember === true) {
    shipping = 0;
} else {
    console.log("Ordinarie frakt");
}
    console.log("Shipping");


    const cities = ["Malmö", "Göteborg", "Umeå"];
console.log(cities[0]);
console.log(cities.length);

const product = { title: "Hörlurar", stock: 4, inStock: true };
console.log(product.title);
console.log(product.inStock);

for (const city of cities) {
  console.log(city);
}