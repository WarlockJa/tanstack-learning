import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { useOptimistic, useRef, useState } from "react";

type OptimisticItem = {
  text: string;
  sending: boolean;
};

export const Route = createFileRoute("/reacthooks/optimistic")({
  component: RouteComponent,
});

function RouteComponent() {
  const [items, setItems] = useState<OptimisticItem[]>([]);
  const [optimisticItems, addOptimisticItem] = useOptimistic(
    items,
    (state, newItem: string) => [
      ...state,
      {
        text: newItem,
        sending: true,
      },
    ],
  );
  const formRef = useRef<HTMLFormElement>(null);

  async function formAction(formData: FormData) {
    const formItem = formData.get("item") as string;

    formRef.current?.reset();

    addOptimisticItem(formItem);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    Math.random() > 0.5 &&
      setItems((prev) => [
        ...prev,
        {
          text: formItem,
          sending: false,
        },
      ]);
  }

  return (
    <main className="flex min-h-screen flex-col items-center space-y-8 pt-24">
      <form action={formAction} className="flex gap-2" ref={formRef}>
        <Input type="text" name="item" />
        <Button>Add</Button>
      </form>
      <Button onClick={() => setItems([])}>Reset</Button>
      <ItemsList items={optimisticItems} />
    </main>
  );
}

function ItemsList({ items }: { items: OptimisticItem[] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className={cn(item.sending && "animate-pulse")}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}
