interface OptimisticActionAdd extends OptimisticTodo {
  type: "optimisticAdd";
}

interface OptimisticActionDelete {
  type: "optimisticDelete";
  id: number;
}

type OptimisticActions = OptimisticActionAdd | OptimisticActionDelete;

export default function optimisticReducer(
  todos: OptimisticTodo[],
  action: OptimisticActions,
) {
  switch (action.type) {
    case "optimisticAdd":
      const { type, ...newTodo } = action;
      return [...todos, newTodo];

    case "optimisticDelete":
      return todos.filter((todo) => todo.id !== action.id);

    default:
      throw "Unknown action";
  }
}
