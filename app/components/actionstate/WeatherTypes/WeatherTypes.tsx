import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useActionState } from "react";

interface WeatherAlertTypes {
  "@context": [];
  eventTypes: string[];
}

async function getWeather(): Promise<WeatherAlertTypes | null> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://api.weather.gov/alerts/types");
  if (response.ok) {
    return response.json();
  }

  return null;
}

export default function WeatherTypes() {
  const [state, formAction, isPending] = useActionState(getWeather, null);
  return (
    <>
      <h2>Weather Types Form Loader</h2>
      <form action={formAction}>
        {state ? (
          <div className="max-h-96 overflow-y-scroll rounded-2xl border-2 p-4">
            <pre>{JSON.stringify(state, null, 2)}</pre>
          </div>
        ) : isPending ? (
          <Loader2 className="animate-spin" />
        ) : (
          <Button className="cursor-pointer">Get Weather Alert Types</Button>
        )}
      </form>
    </>
  );
}
