//partial when defining a type - using partial means It may or may not follow the type e.g.
interface TODO {
    title: string;
    description: string;
    id: number;
    done: boolean;
}

type UpdateTodo = Partial<TODO>;

function updateTodo(id: number, props: UpdateTodo) {

}

updateTodo(1, {done: false});