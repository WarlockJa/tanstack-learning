import { useEffect, useState } from "react";
import getSearch from "./getSearch";

export default function SearchResult({ query }: { query: string }) {
  if (query === "") return null;
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let cancel = false;
    getSearch({ search: query })
      .then((result) => !cancel && setData(result))
      .finally(() => !cancel && setIsLoading(false));

    return () => {
      cancel = true;
    };
  }, [query]);

  return (
    <ul className={isLoading ? "animate-pulse" : ""}>
      {data.length === 0 && !isLoading && <li>No matches for {query}</li>}
      {data.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
