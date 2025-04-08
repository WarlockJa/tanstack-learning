import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/reacthooks/")({
  component: ReactHooks,
});

const hookList = [
  { href: "/reacthooks/syncexternalstore", title: "useSyncExternalStorage" },
  { href: "/reacthooks/transition", title: "useTransition" },
];

export default function ReactHooks() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-2 pt-24">
      <h1 className="text-2xl">React Hooks Showcase</h1>
      <ul className="group flex flex-col">
        {hookList.map((hook) => (
          <li
            key={hook.title}
            className="underline opacity-90 transition-opacity group-hover:opacity-60 hover:opacity-100"
          >
            <Link to={hook.href}>{hook.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
