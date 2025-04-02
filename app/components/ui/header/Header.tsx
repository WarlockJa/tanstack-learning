import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";

const routes = [
  { href: "/", title: "Home" },
  { href: "/counter", title: "Counter" },
  { href: "/form", title: "Form" },
];

export default function Header() {
  const router = useRouterState();
  const activeRouteIndex = routes.findIndex(
    (route) => route.href === router.location.href,
  );

  return (
    <header className="bg-secondary absolute inset-x-0 top-0 flex justify-between px-2">
      <nav className="text-secondary-foreground flex w-fit gap-4 p-2 font-semibold">
        {routes.map((route, index) => (
          <Link
            key={route.href}
            className={cn(
              "transition-colors",
              activeRouteIndex === index
                ? "text-accent pointer-events-none"
                : "hover:underline",
            )}
            to={route.href}
          >
            {route.title}
          </Link>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
}
