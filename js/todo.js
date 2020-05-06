'use strict';

/* Todo 

-description
-creaded_on
-deadline
-status: todo, in progress, done
*/

let todo_list = [
    {
    description: "Pasigaminti kavos",
    creaded_on: "2020-05-05 15:01",
    deadline: "2020-05-05 15:02",
    status: "todo"
},
{
    description: "Pasigamintis kavos",
    creaded_on: "2020-05-05 15:01",
    deadline: "2020-05-05 15:02",
    status: "todo"
},
{
    description: "Pasigaminti kavos",
    creaded_on: "2020-05-05 15:01",
    deadline: "2020-05-05 15:02",
    status: "todo"
}
];




for (let i=0; i<todo_list.length; i++){

    const todo = todo_list[i];

    const sentence=`darbas kuri reikia padaryti yra ${todo.description} ir ji reikia atlikti iki ${todo.deadline} siuo metu yra busnoje "${todo.status}"`;
    console.log(sentence);
    
}


// const people = [
//     {
//         name: 'jonas',
//         age: 25,
//         alive: true
//     },
//     {
//         name: 'dzeimis',
//         age: 4,
//         alive: true
//     },
//     {
//         name: 'chakas',
//         age: 21,
//         alive: true
//     },
//     {
//         name: 'bobas',
//         age: 55,
//         alive: false
//     }
// ]

// for (let i=0; i<people.length; i++) {
//     const person = people[i];
    
//     if (person.alive) {
//         console.log(`${person.name}is alive`);
        
//     }else {
//         console.log(`${person.name}is dead`);
        
//     }
//     console.log(`${person.name} is ${person.age}`);
    
// }



//     ['Pasigaminti kavos','2020-05-05 15:01','2020-05-06 12:00','todo'],
//     ['paglostyti kate','2020-05-05 15:02','2020-05-06 12:50','todo'],
//     ['pavalgyti','2020-05-05 15:02','2020-05-05 19:00','todo']
// ];

// const obj = {
//     description: "Pasigaminti kavos",
//     creaded_on: "2020-05-05 15:01",
//     deadline: "2020-05-05 15:02",
//     status: "todo"
// }

// console.log(todo_list);
// console.log(obj);

// console.log('Obj description:', obj['description']);
// console.log('Obj description:', obj.description);
// console.log('Obj deadline:', obj['deadline']);
// console.log('Obj deadline:', obj.deadline);

