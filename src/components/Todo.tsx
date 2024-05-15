
interface IaddTodo {
    title: string,
    description: string
}

interface Todo {
    todo: IaddTodo
}


function Todos({ todo }: Todo) {
    return (
        <div>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
        </div>
    )
}



export {
    Todos,
}