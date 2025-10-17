import { Badge } from "./ui/badge";

export function InternacionesSidebar() {
  const sections = [
    {
      id: "internaciones",
      title: "INTERNACIONES",
      items: [
        { name: "Internaciones", view: "internaciones", badge: "15" },
        { name: "Solicitudes de revisión", view: "solicitudes", badge: "3" },
        { name: "Agenda cirugía", view: "agenda-cirugia", badge: "2" },
        { name: "Agenda quirófano", view: "agenda-quirofano", badge: "1" },
      ],
    },
    {
      id: "ordenes",
      title: "Órdenes Médicas",
      items: [
        { name: "Órdenes médicas", view: "ordenes-medicas", badge: "12" },
        { name: "Antecedentes", view: "antecedentes", badge: "3" },
      ],
    },
    {
      id: "diagnostico",
      title: "Diagnóstico",
      items: [
        { name: "Estudios", view: "estudios", badge: "5" },
        { name: "Laboratorios", view: "laboratorios", badge: "8" },
        { name: "Medicamentos", view: "tratamientos", badge: "8" },
      ],
    },
    {
      id: "monitoreo",
      title: "Monitoreo",
      items: [{ name: "Cirugías", view: "cirugias", badge: "2" }],
    },
    {
      id: "tratamiento",
      title: "Tratamiento",
      items: [
        { name: "Notas médicas", view: "notas-medicas", badge: "15" },
        { name: "Notas de enfermería", view: "notas-enfermeria", badge: "7" },
        { name: "Epicrisis", view: "epicrisis", badge: "1" },
      ],
    },
  ];

  return (
    <nav className="p-4 space-y-6">
      {sections.map((section) => (
        <div key={section.id}>
          <h3 className="text-sidebar-foreground mb-2 uppercase tracking-wider font-semibold">
            {section.title}
          </h3>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.name}>
                <button
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center justify-between ${
                    item.view === "internaciones"
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
