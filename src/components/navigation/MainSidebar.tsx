import { Hospital, FileText, Calendar, Building2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { useRouter } from "../../contexts/RouterContext";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
  badge?: string;
}

export function MainSidebar() {
  const { currentRoute, navigate } = useRouter();

  const menuItems: MenuItem[] = [
    {
      id: "internaciones",
      label: "Internaciones",
      icon: <Hospital className="h-5 w-5" />,
      path: "/",
      badge: "15",
    },
    {
      id: "solicitudes",
      label: "Solicitudes de revisión",
      icon: <FileText className="h-5 w-5" />,
      path: "/solicitudes",
      badge: "3",
    },
    {
      id: "nuevo-ingreso",
      label: "Registrar nuevo ingreso",
      icon: <FileText className="h-5 w-5" />,
      path: "/ingresos/nuevo",
    },
    {
      id: "agenda-cirugia",
      label: "Agenda de cirugía",
      icon: <Calendar className="h-5 w-5" />,
      path: "/agenda-cirugia",
      badge: "8",
    },
    {
      id: "agenda-quirofano",
      label: "Agenda de quirófano",
      icon: <Building2 className="h-5 w-5" />,
      path: "/agenda-quirofano",
      badge: "4",
    },
  ];

  const isActive = (path: string) => {
    return currentRoute.path === path;
  };

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-full">
      <nav className="p-4 space-y-2">
        <div className="mb-6">
          <h2 className="text-sidebar-foreground font-semibold text-lg mb-4 px-3">
            MENÚ PRINCIPAL
          </h2>
        </div>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
              isActive(item.path)
                ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </div>
            {item.badge && (
              <Badge
                variant="secondary"
                className={`text-xs ${
                  isActive(item.path)
                    ? "bg-sidebar-primary-foreground/20 text-sidebar-primary-foreground"
                    : "bg-sidebar-accent/50"
                }`}
              >
                {item.badge}
              </Badge>
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
}
