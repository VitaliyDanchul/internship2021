// 0. Create function that will accept (10, 20) params and return their sum. Main goal - use all possible variants to declare functions

// 1. Create self-invoked anonymous function, that will return if the day after tomorrow is odd, or even.
// HINT: function accepts one argument: new Date(); 
// output example 15.06.2021, 11:19:22 is odd date

// 2. Rewrite this function to ES6/ES2015

var Intern = function(name, age) {
    this.name = name;
    this.age = age;
    this.homework = {
        status: 'Resolved',
        rating: '100%'
    }
}

Intern.prototype.getHomework = function () {
    return `${this.name} resolved homework with status ${this.homework.status}`;
}

const ***** = new Intern(****, ***);

// 3. Write multiply function. Two arguments - random numbers. But sometimes, we don't have second argument, and result is = random number * 12
// HINT: Read about default parameters in functions.

/**
 * example output
 * (19, 29) => 551
 * (23) => 276
 */

/**
 * 4. Write function, that modify first argument to example output with delay 2 seconds
 * 
 * example:
 * yourFuncName({ a: 1, b: 2}, (data) => { console.log(data) }); output: { a: 2, b: 3 }
 * HINT: read about callbacks
 */

function yourFuncName(options, callback) {
    // your code here
}

/**
 * 5. Imagine, that we have 2 requests to database, first is getUsers() that return data in 1 second,
 * and second is createUser() that resolves in 2 seconds. 
 * Your goal, is to modify createUser() with callback, and return 3 users
 */

 const users = [
    {
        name: 'Daniel',
        age: 22,
    },
    {
        name: 'Michael',
        age: 32,
    },
];

function getUsers() {
    setTimeout(() => {
        users.forEach((user) => {
            console.log('user:', user);
        });
    }, 1000);
}

function createUser(user, ****) {
    setTimeout(() => {
        users.push(user);

        ****
    }, 2000);
}

getUsers();
createUser({ name: 'Vitalii', age: 24 });
