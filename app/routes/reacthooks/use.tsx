import FetchData from "@/components/use/FetchData";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reacthooks/use")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-8 pt-24">
      <h1>Use Hook</h1>
      <FetchData />
    </main>
  );
}
