import { useOptimistic, useRef, useState, useTransition } from "react";
import optimisticReducer from "./optimisticReducer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";

let id = 0;

export default function TodoList() {
  const [todos, setTodos] = useState<OptimisticTodo[]>([]);
  const [optimisticTodos, applyOptimisticUpdate] = useOptimistic(
    todos,
    optimisticReducer,
  );
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const displayTodos = filterDuplicates(optimisticTodos);

  async function handleAddTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const inputValue = (formData.get("newTodo") as string) ?? "";

    const newTodo: OptimisticTodo = {
      id: id++,
      isComplete: false,
      text: inputValue,
    };

    formRef.current?.reset();

    startTransition(async () => {
      applyOptimisticUpdate({ type: "optimisticAdd", ...newTodo });

      await new Promise((resolve) => setTimeout(resolve, 2000));
      setTodos((prev) => [...prev, newTodo]);
    });
  }

  async function handleDeleteTodo(id: number) {
    startTransition(async () => {
      applyOptimisticUpdate({ type: "optimisticDelete", id });

      await new Promise((resolve) => setTimeout(resolve, 2000));
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    });
  }

  return (
    <div>
      <h2>Optimistic Todos{isPending && " - updating..."}</h2>
      <form onSubmit={handleAddTodo} className="flex gap-2" ref={formRef}>
        <Input type="text" name="newTodo" />
        <Button>Add Todo</Button>
      </form>

      <ul>
        {displayTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({
  todo,
  handleDeleteTodo,
}: {
  todo: OptimisticTodo;
  handleDeleteTodo: (id: number) => Promise<void>;
}) {
  return (
    <li className="flex items-center gap-2">
      <Button onClick={() => handleDeleteTodo(todo.id)} variant={"destructive"}>
        <X />
      </Button>
      {todo.text}{" "}
    </li>
  );
}

function filterDuplicates(todos: OptimisticTodo[]): OptimisticTodo[] {
  const result: OptimisticTodo[] = [];
  const set = new Set();

  for (const todo of todos) {
    if (!set.has(todo.id)) {
      set.add(todo.id);
      result.push(todo);
    }
  }

  return result;
}
