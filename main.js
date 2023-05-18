
// array destructuring
const myName=['sabbir','rakib','sohan','sakib',20,'tamim'];
const [, , , ,age]=myName;
console.log(age);



// object destructuring
const info={
    id:100,
    name:'sabbir rahman',
    age:20,
    subject:'CSE',
    cgp:3.55

};
const {id,name,cgp,subject}=info
console.log(id,name,cgp,subject);

// const {id,subject,cgp}=info;
// console.log(id,subject,cgp);


// let employee = {
//     id: 1001,
//     name: {
//         firstName: 'John',
//         lastName: 'Doe'
//     }
// };
// const {firstName,lastName}=employee.name
// console.log(firstName,lastName);




// function data(id,name,age){
//     return`id no:${id} name:${name} age:${age}`
// }
// console.log(data(100,'sabbir',20));