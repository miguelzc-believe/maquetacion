import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Plus,
  Edit,
  Trash2,
  Save,
  FileText,
  Clock,
  User,
  Calendar,
} from "lucide-react";
import { useState } from "react";

export function NotasMedicas({
  setCurrentView,
}: {
  setCurrentView: (view: string) => void;
}) {
  const [notas] = useState([
    {
      id: 1,
      titulo: "Evolución del paciente",
      tipo: "Evolución",
      fecha: "2025-01-15",
      hora: "08:30",
      medico: "Dr. García",
      especialidad: "Medicina Interna",
      contenido:
        "Paciente presenta mejoría significativa en su estado general. Fiebre ha cedido completamente...",
      estado: "firmada",
    },
    {
      id: 2,
      titulo: "Nota de ingreso",
      tipo: "Ingreso",
      fecha: "2025-01-14",
      hora: "14:20",
      medico: "Dr. López",
      especialidad: "Cardiología",
      contenido:
        "Paciente ingresa por dolor torácico de características anginosas...",
      estado: "borrador",
    },
  ]);

  const [nuevaNota, setNuevaNota] = useState({
    titulo: "",
    tipo: "",
    especialidad: "",
    contenido: "",
  });

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case "firmada":
        return "bg-success/10 text-success border-success/20";
      case "borrador":
        return "bg-warning/10 text-warning border-warning/20";
      case "pendiente":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Notas Médicas</h2>
          <p className="text-muted-foreground">
            Registro de notas y evoluciones médicas
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setCurrentView("medical-record")}>
            <Plus className="h-4 w-4 mr-2" />
            Nueva Nota
          </Button>
          {/* <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Plantillas
          </Button> */}
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <FileText className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Firmadas</p>
                <p className="text-2xl font-bold text-success">
                  {notas.filter((n) => n.estado === "firmada").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <Edit className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Borradores</p>
                <p className="text-2xl font-bold text-warning">
                  {notas.filter((n) => n.estado === "borrador").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Hoy</p>
                <p className="text-2xl font-bold text-primary">
                  {notas.filter((n) => n.fecha === "2025-01-15").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <User className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-2xl font-bold text-secondary">
                  {notas.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de notas */}
      <Card>
        <CardHeader>
          <CardTitle>Notas Médicas Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notas.map((nota) => (
              <div
                key={nota.id}
                className="border border-border rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">
                        {nota.titulo}
                      </h4>
                      <Badge className={getEstadoColor(nota.estado)}>
                        {nota.estado}
                      </Badge>
                      <Badge variant="outline">{nota.tipo}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {nota.fecha} - {nota.hora}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {nota.medico}
                      </span>
                      <span>{nota.especialidad}</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      onClick={() => setCurrentView("medical-record")}
                      variant="ghost"
                      size="icon"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="bg-muted/30 p-3 rounded-md">
                  <p className="text-sm text-foreground">{nota.contenido}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
