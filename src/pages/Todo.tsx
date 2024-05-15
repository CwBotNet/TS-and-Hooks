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