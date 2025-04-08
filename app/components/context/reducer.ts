type TodoAdd = {
  type: "addTodo";
  title: string;
};

type TodoUpdate = {
  type: "updateTodo";
  id: string;
  title?: string;
  complete?: boolean;
};

type TodoDelete = {
  type: "deleteTodo";
  id: string;
};

export type TodoActions = TodoAdd | TodoDelete | TodoUpdate;

let todoId = 3;

export default function reducer(state: Todo[], action: TodoActions) {
  switch (action.type) {
    case "addTodo":
      const newTodo: Todo = {
        id: (todoId++).toString(),
        title: action.title,
        complete: false,
      };
      return [...state, newTodo];

    case "updateTodo":
      const { id, type, ...newValues } = action;
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, ...newValues } : todo,
      );

    case "deleteTodo":
      return state.filter((todo) => todo.id !== action.id);

    default:
      throw "Unknown action";
  }
}
