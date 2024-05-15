
/* 
--> ts basic
=> data types : string , number , boolean, null , undefind
=> interface
=> type
=> array in TS - datatype[]
If you want to access arrays in typescript, it’s as simple as adding a [] annotation next to the type
=> enums : Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
=>Generics - Generics are a language independent concept (exist in C++ as well)



function greet(firstName: string) {
    console.log(`Hello ${firstName}`);
}

greet("raj");

function sum(a: number, b: number): number {
    return a + b;
}

sum(2, 2);

interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}

const user: User = {
    firstName: "raj",
    lastName: "kumar",
    email: "qpmzj@example.com",
    age: 20,
};


function isLegal(user: User): boolean {
    if (user.age > 18) {
        return true;
    }
    
    return false;
}


isLegal(user);

function delayFunction(fnc: () => void) {
    setTimeout(fnc, 1000);
}

delayFunction(() => {
    console.log("hello");
});

*/


import { Todos } from "../components/Todo"


const todo = {
    title: "todo",
    description: "todo description"
}


const Todo = () => {
    return (
        <div>
            <h1>Todo</h1>
            <Todos todo={todo} />
        </div>


    )
}

export default Todo