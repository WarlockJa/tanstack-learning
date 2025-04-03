import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reacthooks/syncexternalstore")({
  component: SyncExternalStore,
});

export default function SyncExternalStore() {
  // online status
  const isOnline = useSyncExternalStore(
    subscribeOnline,
    getSnapshotOnline,
    () => true,
  );
  function getSnapshotOnline() {
    return navigator.onLine;
  }

  function subscribeOnline(callback: () => void) {
    window.addEventListener("online", callback);
    window.addEventListener("offline", callback);

    return () => {
      window.removeEventListener("online", callback);
      window.removeEventListener("offline", callback);
    };
  }

  // device orientation
  const orientation = useSyncExternalStore(
    subscribeOrientation,
    getOrientation,
    () => "portrait-primary",
  );
  function getOrientation() {
    return screen.orientation.type;
  }
  function subscribeOrientation(callback: () => void) {
    window.addEventListener("orientationchange", callback);

    return () => {
      window.removeEventListener("orientationchange", callback);
    };
  }

  // device touch
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    function handleIsTouched(e: TouchEvent) {
      setIsTouched(true);
    }
    function handleIsNotTouched(e: TouchEvent) {
      setIsTouched(false);
    }
    window.addEventListener("touchstart", handleIsTouched);
    window.addEventListener("touchend", handleIsNotTouched);

    return () => {
      window.removeEventListener("touchstart", handleIsTouched);
      window.removeEventListener("touchend", handleIsNotTouched);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center space-y-8 pt-24">
      <h1 className="text-2xl">useSyncExternalStore</h1>
      <ul className="w-screen max-w-lg space-y-4">
        <li className="flex justify-between">
          <p>you are currently:</p>
          <p>{isOnline ? "ONLINE" : "OFFLINE"}</p>
        </li>
        <li className="flex justify-between">
          <p>your screen orientation:</p>
          <p>{orientation}</p>
        </li>
        <li className="flex justify-between">
          <p>device touched:</p>
          <p>{isTouched ? "TOUCHING" : "NOT TOUCHING"}</p>
        </li>
      </ul>
    </main>
  );
}
