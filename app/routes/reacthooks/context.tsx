import TodoList from "@/components/context/TodoList";
import TodosProvider from "@/components/context/TodosProvider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reacthooks/context")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <TodosProvider>
      <main className="flex min-h-screen flex-col items-center space-y-8 pt-24">
        <TodoList />
      </main>
    </TodosProvider>
  );
}
