import { createContext, ReactNode, useContext, useReducer } from "react";
import { todos as initTodos } from "./initTodos";
import reducer, { TodoActions } from "./reducer";

const TodosContext = createContext<Todo[]>([]);
const TodosDispatchContext = createContext<
  ((action: TodoActions) => void) | null
>(null);

export default function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(reducer, initTodos);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}

export function useTodosDispatch() {
  const dispatch = useContext(TodosDispatchContext);

  if (!dispatch) throw "Must be used inside TodosDispatchContext.Provider";

  return dispatch;
}
