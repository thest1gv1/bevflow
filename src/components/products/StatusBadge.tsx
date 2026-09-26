import { Badge } from "@/components/ui/badge";

type StatusBadgeProps = {
  status: "active" | "inactive";
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const isActive = status === "active";

  return (
    <Badge
      variant="secondary"
      className={
        isActive
          ? "gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300"
          : "gap-1.5 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-700 hover:bg-red-100 dark:bg-red-950 dark:text-red-300"
      }
    >
      <span
        aria-hidden="true"
        className={`size-1.5 rounded-full ${
          isActive ? "bg-emerald-500" : "bg-red-500"
        }`}
      />
      {isActive ? "Активен" : "Неактивен"}
    </Badge>
  );
}
