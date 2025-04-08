import RealtimeChart from "@/components/deferredvalue/RealtimeChart/RealtimeChart";
import Search from "@/components/deferredvalue/Search/Search";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reacthooks/deferredvalue")({
  component: DeferredValue,
});

function DeferredValue() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-8 pt-24">
      <RealtimeChart />
      <Search />
    </main>
  );
}
