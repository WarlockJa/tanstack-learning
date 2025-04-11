import TodoList from "@/components/optimistic/TodoList/TodoList";
import TypeLookup from "@/components/optimistic/TypeLookup";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reacthooks/optimistic")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-8 pt-24">
      <TypeLookup />
      <TodoList />
    </main>
  );
}
