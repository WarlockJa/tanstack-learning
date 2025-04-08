import TabButton from "@/components/transition/TabButton";
import TabFast from "@/components/transition/TabFast";
import TabFetch from "@/components/transition/TabFetch";
import TabSlow from "@/components/transition/TabSlow";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/reacthooks/transition")({
  component: Transition,
});

function Transition() {
  const [tab, setTab] = useState("fast tab");
  return (
    <main className="flex min-h-screen flex-col items-center space-y-8 pt-24">
      <nav className="flex gap-2">
        <TabButton
          isActive={tab === "fetch tab"}
          action={() => setTab("fetch tab")}
        >
          Fetch Tab
        </TabButton>
        <TabButton
          isActive={tab === "slow tab"}
          action={() => setTab("slow tab")}
        >
          Slow Tab
        </TabButton>
        <TabButton
          isActive={tab === "fast tab"}
          action={() => setTab("fast tab")}
        >
          Fast Tab
        </TabButton>
      </nav>

      {tab === "fetch tab" && <TabFetch />}
      {tab === "slow tab" && <TabSlow />}
      {tab === "fast tab" && <TabFast />}
    </main>
  );
}
