import { Badge } from "@/components/ui/badge";

type StatusBadgeProps = {
  status: "active" | "inactive";
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const isActive = status === "active";
  return (
    <Badge
      className={
        isActive
          ? "bg-green-100 text-green-700 hover:bg-green-100"
          : "bg-red-100 text-red-700 hover:bg-red-100"
      }
    >
      {isActive ? "Активен" : "Неактивен"}
    </Badge>
  );
}
