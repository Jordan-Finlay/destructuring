/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [20, 25, 30];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);


// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);


// Destructuring subsets
let languages = ["English", "French", "German", "Japanese", "Spanish"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [ , , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let langauages2 = {
    firstLanguage: "English",
    secondLanguage: "French",
    thirdLanguage: "German",
    fourthLanguage: "Japanese",
};
let {firstLanguage, secondLanguage, thirdLanguage, fourthLanguage} = langauages2;
console.log(firstLanguage, thirdLanguage);
console.log(secondLanguage, fourthLanguage);

// Using rest parameter syntax
let fruits = ["apples", "bananas", "cherries", "peach", "orange"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);


let favoriteFoods = {
    brian: "pizza",
    jordan: "pasta",
    jo: "spag",
    chris: "veg",
};
let {brian, jordan, ...rest} = favoriteFoods;
console.log(brian);
console.log(jordan);
console.log(rest);


//node destructuring.js