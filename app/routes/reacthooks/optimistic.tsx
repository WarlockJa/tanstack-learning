import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { useOptimistic, useRef, useState } from "react";

type OptimisticItem = {
  id: number;
  text: string;
  sending: boolean;
};

let key = 0;

export const Route = createFileRoute("/reacthooks/optimistic")({
  component: RouteComponent,
});

function RouteComponent() {
  const [items, setItems] = useState<OptimisticItem[]>([]);
  const [optimisticItems, processOptimisticItem] = useOptimistic(
    items,
    (state, newItem: OptimisticItem) => [...state, newItem],
  );
  const formRef = useRef<HTMLFormElement>(null);

  const displayItems = filterDuplicates(optimisticItems);

  async function formAction(formData: FormData) {
    const formItem = formData.get("item") as string;
    const id = key++;

    formRef.current?.reset();

    processOptimisticItem({
      id,
      text: formItem,
      sending: true,
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));
    Math.random() > 0.5 &&
      setItems((prev) => [
        ...prev,
        {
          id,
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
      <ItemsList items={displayItems} />
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

function filterDuplicates(items: OptimisticItem[]): OptimisticItem[] {
  const result: OptimisticItem[] = [];
  const set = new Set();
  for (const item of items) {
    if (!set.has(item.id)) {
      result.push(item);
      set.add(item.id);
    }
  }
  return result;
}
