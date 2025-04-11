import { Button } from "@/components/ui/button";
import { useActionState, useEffect, useState } from "react";

const delay = 1000;
const tick = 10;

async function updateCount(value: number) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return value + 1;
}

let intervalId;

export default function IncrementForm() {
  const [state, formAction, isPending] = useActionState(updateCount, 0);
  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    if (countDown === 0) {
      return;
    }

    function handleTick() {
      const newCountDown = countDown - tick < 0 ? 0 : countDown - tick;
      if (newCountDown === 0) {
        clearInterval(intervalId);
      }
      setCountDown(newCountDown);
    }

    intervalId = setInterval(handleTick, tick);

    return () => intervalId && clearInterval(intervalId);
  }, [countDown]);

  return (
    <div className="rounded-2xl border p-4">
      <h2>Increment Form</h2>
      <form action={formAction} className="flex flex-col items-center">
        <div>
          {state}
          <span className="flex-1">
            {countDown > 0 && ` - ${Math.floor(countDown / 100)}`}
          </span>
        </div>
        <Button
          onClick={() => setCountDown((prev) => prev + delay - tick)}
          className={
            isPending ? "animate-pulse cursor-pointer" : "cursor-pointer"
          }
        >
          Increment
        </Button>
      </form>
    </div>
  );
}
