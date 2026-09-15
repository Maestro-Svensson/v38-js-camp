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
console.log(travel); 


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


console.log("------------------------------------------------------------------")

const tempC = 12;

if (tempC >= 20) {
  console.log("varmt");
} else if (tempC >= 10) {
  console.log("ljummet");
} else {
  console.log("kallt");
}

console.log("------------------------------------------------------------------")


const routes = ["Linje 2", "Linje 5", "Linje 8"];
for (const route of routes) {
  console.log("Avgår: " + route);
}

console.log("------------------------------------------------------------------") 

function triple(n) {
  return n * 3;
}
console.log(triple(8));

console.log("------------------------------------------------------------------")

 const tripple = (m) => m * 3; 
 console.log(tripple(8));

 console.log("------------------------------------------------------------------")

 const travels = ["Thailand", "Finland", "Usa", "Canada"];
 for(tavel of travels) {
 console.log(tavel);
}

console.log("------------------------------------------------------------------")

const note = { title: "Vattna", urgency: 1, isOpen: true };
console.log(note.title);

function label(title, prefix) {
  return prefix + ": " + title;
}
console.log(label(note.title, "Idag"));

if (note.urgency === 1) {
  console.log("direkt");
} else if (note.urgency === 2) {
  console.log("snart");
} else {
  console.log("senare");
}