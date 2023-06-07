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
};


// METHODS, REVISITED
const favMovies = ['Jaws', 'The Fellowship of the Ring', 
'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 
'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 
'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 
'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 
'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies[8]);
favMovies.sort();  // puts array in alphabetical order A - Z
favMovies.pop();    // removes 'Voler'
favMovies.push("Guardians of the Galaxy"); // adds "Guardians of the Galaxy" to the end of list
favMovies.reverse();    // reverses array
favMovies.shift();  // removes first item in array
favMovies.splice(14, 1, "Avatar");  // removes index 14 and replaces it with "Avatar"
const removedSplice = favMovies.splice(-(favMovies.length/2));  // removes half of the array and saves it to variable
console.log(removedSplice); 
console.log(favMovies);
console.log(removedSplice[4]);


// WHERE IS WALDO
const whereIsWaldo = [["Timmy", "Frank"], 
"Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1, 1); // goes to index 1 and removes 1 item
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);

// EXCITED KITTEN
for (let i = 1; i <= 20; i++){
    random = ["...human...why you taking pictures of me", "...the catnip made me do it...", "...why does the red dot alway..."];
    if (i % 2 === 0){
        console.log(random[Math.floor(Math.random()*3)]);
    } else {
        console.log(i);
    };
};

// FIND THE MEDIAN
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
console.log(nums[Math.floor(nums.length/2)]);

const nums2 = [0, 1, 2, 3, 4, 5, 6];
console.log(nums2[Math.floor(nums2.length/2)]);