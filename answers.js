//PART I: HTML & CSS
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 200; i += 2) {
//   console.log(i);
// }

// for (let i = 0; i <= 200; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//for (let i = 1; i <= 100; i++) {

//    if (i % 3 === 0 && i % 5 === 0) {
//      console.log("FizzBuzz")
//    } else if (i % 3 === 0) {
//      console.log("Fizz");
//    } else if (i % 5 === 0) {
//      console.log("Buzz")
//    } else {
//      console.log(i);
//    }
//  }

// WILD WILD LIFE
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

plantee[2] = 5001;
console.log(plantee);

wolfy[3] = "Gotham City";
console.log(wolfy);

dart.push("Hawkins");
console.log(dart);

wolfy.shift();
wolfy.unshift("Gameboy");
console.log(wolfy);


// YELL AT THE NINJA TURTLES
const members = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let member of members) {
    console.log(member.toUpperCase());
}