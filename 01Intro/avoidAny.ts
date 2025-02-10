// Avoid using any
// If we want every team member to avoid using any, we can add noImplicitAny flag as true in tsconfig.json file which will not allow anny type

// let hero; istead of doing this, assign it with some type
let hero: string;

function setHero() {
    return 'thor'; // here since I am returning a string, it will allow, and even if I returned any other data type value, it would have allowed
    // But when any other developer will start using it, it can cause some problems as they might be expecting some datatypes 
}

hero = setHero();
console.log(hero);