import { ChevronRight, Home } from "lucide-react";
import { useRouter } from "../../contexts/RouterContext";

export function Breadcrumbs() {
  const { currentRoute, navigate } = useRouter();

  const getBreadcrumbs = () => {
    const crumbs = [{ label: "Inicio", path: "/" }];

    switch (currentRoute.path) {
      case "/":
        crumbs.push({ label: "Internaciones", path: "/" });
        break;
      case "/solicitudes":
        crumbs.push({ label: "Solicitudes de Revisión", path: "/solicitudes" });
        break;
      case "/agenda-cirugia":
        crumbs.push({ label: "Agenda de Cirugía", path: "/agenda-cirugia" });
        break;
      case "/agenda-quirofano":
        crumbs.push({
          label: "Agenda de Quirófano",
          path: "/agenda-quirofano",
        });
        break;
      case "/ingresos/nuevo":
        crumbs.push({ label: "Internaciones", path: "/" });
        crumbs.push({
          label: "Registrar nuevo ingreso",
          path: "/ingresos/nuevo",
        });
        break;
      case "/paciente":
        crumbs.push({ label: "Internaciones", path: "/" });
        if (currentRoute.params?.nombre) {
          crumbs.push({
            label: `Paciente: ${currentRoute.params.nombre}`,
            path: "/paciente",
          });
        }
        break;
    }

    return crumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className="flex items-center space-x-2 text-sm">
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.path + index} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="h-4 w-4 mx-2 text-primary-foreground/50" />
          )}
          {index === 0 && (
            <Home className="h-4 w-4 mr-2 text-primary-foreground/70" />
          )}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-primary-foreground font-medium">
              {crumb.label}
            </span>
          ) : (
            <button
              onClick={() => navigate(crumb.path)}
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {crumb.label}
            </button>
          )}
        </div>
      ))}
    </nav>
  );
}
