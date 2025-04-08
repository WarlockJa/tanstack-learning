import { ReactNode, useTransition } from "react";
import { Button } from "../ui/button";

export default function TabButton({
  action,
  children,
  isActive,
}: {
  action: () => void;
  children: ReactNode;
  isActive: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  if (isActive) {
    return <b className="flex items-center">{children}</b>;
  }
  if (isPending) {
    return <b className="flex animate-pulse items-center">{children}</b>;
  }

  return <Button onClick={() => startTransition(action)}>{children}</Button>;
}
