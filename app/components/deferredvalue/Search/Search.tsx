import { Suspense, useDeferredValue, useState } from "react";
import SearchResult from "./SearchResult";

export default function Search() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        className="border"
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Suspense fallback={"Loading..."}>
        <SearchResult query={deferredQuery} />
      </Suspense>
    </div>
  );
}
