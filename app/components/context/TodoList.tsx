import { useState } from "react";
import { useTodos, useTodosDispatch } from "./TodosProvider";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

export default function TodoList() {
  const todos = useTodos();
  const dispatch = useTodosDispatch();

  const [title, setTitle] = useState<string>("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "addTodo", title });
          setTitle("");
        }}
        className="flex"
      >
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button disabled={title.length === 0}>Add New Todo</Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => dispatch({ type: "deleteTodo", id: todo.id })}
            onUpdate={(todo) => dispatch({ type: "updateTodo", ...todo })}
          />
        ))}
      </ul>
    </>
  );
}

function TodoItem({
  onDelete,
  onUpdate,
  todo,
}: {
  todo: Todo;
  onDelete: () => void;
  onUpdate: (todo: Todo) => void;
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [newTodo, setNewTodo] = useState<Todo>(todo);
  return (
    <li className="flex w-screen max-w-sm">
      {isEdit ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsEdit(false);
            onUpdate(newTodo);
          }}
          className="flex flex-1 justify-between"
        >
          <Input
            className="flex-1"
            type="text"
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...todo, title: e.target.value })}
          />
          <Button variant={"destructive"}>Save</Button>
        </form>
      ) : (
        <>
          <div className={cn("flex-1", todo.complete && "line-through")}>
            {todo.title}
          </div>
          <Button onClick={() => setIsEdit(true)} variant={"destructive"}>
            Edit
          </Button>
        </>
      )}
      <Input
        type="checkbox"
        className="w-12"
        checked={todo.complete}
        onChange={(e) => onUpdate({ ...todo, complete: e.target.checked })}
      />
      <Button onClick={onDelete} variant={"destructive"}>
        <X />
      </Button>
    </li>
  );
}
