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
  Clock,
  User,
  Activity,
  Heart,
} from "lucide-react";
import { useState } from "react";

export function NotasEnfermeria({
  setCurrentView,
}: {
  setCurrentView: (view: string) => void;
}) {
  const [notas] = useState([
    {
      id: 1,
      titulo: "Cuidados post-quirúrgicos",
      tipo: "Cuidados",
      fecha: "2025-01-15",
      hora: "06:00",
      enfermero: "Enf. Rodríguez",
      turno: "Noche",
      contenido:
        "Paciente estable durante la noche. Signos vitales dentro de parámetros normales...",
      categoria: "post-operatorio",
    },
    {
      id: 2,
      titulo: "Administración de medicamentos",
      tipo: "Medicación",
      fecha: "2025-01-15",
      hora: "08:00",
      enfermero: "Enf. López",
      turno: "Mañana",
      contenido: "Administrado tratamiento según prescripción médica...",
      categoria: "medicacion",
    },
  ]);

  const [nuevaNota, setNuevaNota] = useState({
    titulo: "",
    tipo: "",
    categoria: "",
    turno: "",
    contenido: "",
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Notas de Enfermería
          </h2>
          <p className="text-muted-foreground">
            Registro de cuidados y observaciones de enfermería
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setCurrentView("medical-record")}>
            <Plus className="h-4 w-4 mr-2" />
            Nueva Nota
          </Button>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Activity className="h-5 w-5 text-primary" />
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
              <div className="p-2 bg-success/10 rounded-lg">
                <Heart className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Cuidados</p>
                <p className="text-2xl font-bold text-success">
                  {notas.filter((n) => n.tipo === "Cuidados").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <Clock className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Medicación</p>
                <p className="text-2xl font-bold text-warning">
                  {notas.filter((n) => n.tipo === "Medicación").length}
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

      {/* Formulario para nueva nota */}
      <Card>
        <CardHeader>
          <CardTitle>Nueva Nota de Enfermería</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Título</label>
              <input
                type="text"
                className="w-full p-2 border border-border rounded-md bg-background"
                placeholder="Título de la nota"
                value={nuevaNota.titulo}
                onChange={(e) =>
                  setNuevaNota({ ...nuevaNota, titulo: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Tipo de Nota
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cuidados">Cuidados</SelectItem>
                  <SelectItem value="medicacion">Medicación</SelectItem>
                  <SelectItem value="signos-vitales">Signos Vitales</SelectItem>
                  <SelectItem value="observaciones">Observaciones</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Categoría
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pre-operatorio">Pre-operatorio</SelectItem>
                  <SelectItem value="post-operatorio">
                    Post-operatorio
                  </SelectItem>
                  <SelectItem value="cuidados-basicos">
                    Cuidados Básicos
                  </SelectItem>
                  <SelectItem value="cuidados-especiales">
                    Cuidados Especiales
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Turno</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar turno" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manana">Mañana</SelectItem>
                  <SelectItem value="tarde">Tarde</SelectItem>
                  <SelectItem value="noche">Noche</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Contenido de la Nota
            </label>
            <Textarea
              placeholder="Registre aquí las observaciones y cuidados realizados..."
              className="min-h-[150px]"
              value={nuevaNota.contenido}
              onChange={(e) =>
                setNuevaNota({ ...nuevaNota, contenido: e.target.value })
              }
            />
          </div>
          <div className="flex gap-2">
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Guardar Nota
            </Button>
            <Button variant="outline">Vista Previa</Button>
          </div>
        </CardContent>
      </Card>

      {/* Lista de notas */}
      <Card>
        <CardHeader>
          <CardTitle>Notas de Enfermería Recientes</CardTitle>
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
                      <Badge variant="outline">{nota.tipo}</Badge>
                      <Badge variant="secondary">{nota.turno}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {nota.fecha} - {nota.hora}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {nota.enfermero}
                      </span>
                      <Badge variant="outline">{nota.categoria}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon">
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
