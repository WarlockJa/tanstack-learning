import IncrementForm from "@/components/actionstate/IncrementForm/IncrementForm";
import WeatherTypes from "@/components/actionstate/WeatherTypes/WeatherTypes";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reacthooks/actionstate")({
  component: RouteComponent,
});

function RouteComponent() {
  const initValue = Route.useLoaderData();
  return (
    <main className="flex min-h-screen flex-col items-center space-y-8 pt-24">
      <WeatherTypes />
      <IncrementForm />
    </main>
  );
}
