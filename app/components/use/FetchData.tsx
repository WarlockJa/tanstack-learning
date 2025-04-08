import { Suspense, use } from "react";

interface WeatherAlertTypes {
  "@context": [];
  eventTypes: string[];
}

async function fetchWeatherAlertTypesData(): Promise<
  WeatherAlertTypes | undefined
> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://api.weather.gov/alerts/types");
  if (response.ok) {
    return response.json();
  }

  return undefined;
}

// creating a consistent promise object to avoid rerenders on "use" use
const weatherAlertTypesDataPromise = fetchWeatherAlertTypesData();
// const getCachedWeatherAlertTypesData = cache(fetchWeatherAlertTypesData);

export default function FetchData() {
  return (
    <Suspense fallback={<div className="animate-pulse">Loading...</div>}>
      <DataDisplay />
    </Suspense>
  );
}

function DataDisplay() {
  const weatherData = use(weatherAlertTypesDataPromise);
  //   const weatherData = use(getCachedWeatherAlertTypesData());

  return (
    <ul>{weatherData?.eventTypes.map((item) => <li key={item}>{item}</li>)}</ul>
  );
}
