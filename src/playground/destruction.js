// const person = {
//     age: 26,
//     location: {
//         city: 'LNR',
//         temp: 92
//     }
// };

// const {name = 'anonimus', age} = person;
// console.log (`${name} is ${age}`)

// const {temp, city} = person.location
// console.log(`its ${temp} in ${city}.`)



const address= ['1299 s Juniper Street', 'LNR', 'Donbas', '1488'];

const [,city , state] = address;

console.log(`You are in ${city} ${state}`)