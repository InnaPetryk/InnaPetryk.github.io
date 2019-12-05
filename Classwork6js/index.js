// // Наслідування
// function Technika(model) {
//     this.model = model;
// }
// const bmwTech = new Technika('bmw');
// console.log(bmwTech)

// function MotoCicle(version) {
//     this.version = version;
// }
// const makaka = new MotoCicle('makaka');
//     console.log(makaka)


// function User() {
//     this.greeting = function() {
//         if(!this.name) {
 
//      console.log(`Hello, guest!`);
//      return;
//  }
//         console.log(`Hello, ${this.name}!`)
//     }
//     this.getFullName = function() {
//         return `${this.name} ${this.lastName}`;
//     }
// }
// const commonUser = new User();

// function LoggedUser(name, lastName) {
//     this.name = name;
//     this.lastName = lastName;
// }
// const Ostap = new LoggedUser('Ostap', 'Kryvonis');
// Ostap.__proto__ = commonUser;

// function Pet(name, voice) {
//     const blokhy = true;
//     this.name = name;
//     this.voice = voice;
//     this.say = function() {
//         console.log(this.voice)
//     }
//     this.isblohi = function() {
//         if(blokhy) console.log('Blokhy ye')
//         else console.log('Blokh nemae')
//     }
// }
// const dog = new Pet('rex', 'gav');
// const cat = new Pet('marsic', 'mao');

// Geter and setInterval
function User(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    // this.fullName = this.name + '' + this.lastName;

    return{
        get fullName() {
            return this.name + ' ' + this.lastName
        }
    }
   

    }
const user = new User('Ivan', 'Ivanov');