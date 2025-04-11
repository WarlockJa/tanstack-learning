import { Button } from "@/components/ui/button";
import { createServerFn } from "@tanstack/react-start";
import { Loader2 } from "lucide-react";
import { useState, useTransition } from "react";

interface WeatherAlertTypes {
  "@context": [];
  eventTypes: string[];
}

async function getWeather(): Promise<WeatherAlertTypes | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://api.weather.gov/alerts/types");
  if (response.ok) {
    return response.json();
  }

  return undefined;
}

const getWeatherAction = createServerFn({
  method: "GET",
}).handler(() => {
  return getWeather();
});

export default function TabFetch() {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<string[]>([]);

  return (
    <>
      <Button
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            const result = await getWeatherAction();
            if (!result) return;

            setData(result.eventTypes);
          });
        }}
      >
        Get Weather Alert Types
      </Button>

      <div>
        {isPending && <Loader2 className="w-full animate-spin" />}
        {data.length > 0 && (
          <ul className={isPending ? "animate-pulse opacity-30" : ""}>
            {data.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
