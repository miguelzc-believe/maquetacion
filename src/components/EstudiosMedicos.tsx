import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Plus,
  Eye,
  Download,
  Calendar,
  FileText,
  Activity,
  Microscope,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";

export function EstudiosMedicos() {
  const [estudios] = useState([
    {
      id: 1,
      nombre: "Radiografía de Tórax PA y Lateral",
      fecha: "2025-01-15",
      estado: "completado",
      resultado: "Normal",
      prioridad: "normal",
      medico: "Dr. López",
      region: "Tórax",
    },
    {
      id: 2,
      nombre: "Tomografía Computarizada de Abdomen",
      fecha: "2025-01-15",
      estado: "pendiente",
      resultado: "Esperando",
      prioridad: "urgente",
      medico: "Dr. García",
      region: "Abdomen",
    },
    {
      id: 3,
      nombre: "Ecografía Abdominal",
      fecha: "2025-01-14",
      estado: "completado",
      resultado: "Hepatomegalia leve",
      prioridad: "alta",
      medico: "Dr. Martínez",
      region: "Abdomen",
    },
    {
      id: 4,
      nombre: "Resonancia Magnética de Rodilla",
      fecha: "2025-01-13",
      estado: "completado",
      resultado: "Desgarro meniscal",
      prioridad: "normal",
      medico: "Dr. Ruiz",
      region: "Extremidades",
    },
    {
      id: 5,
      nombre: "Mamografía Bilateral",
      fecha: "2025-01-12",
      estado: "pendiente",
      resultado: "Esperando",
      prioridad: "normal",
      medico: "Dra. Sánchez",
      region: "Mama",
    },
  ]);

  // Estados para funcionalidades
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEstudio, setEditingEstudio] = useState<any>(null);

  // Función para solicitar nuevo estudio
  const handleSolicitarEstudio = () => {
    setEditingEstudio(null);
    setIsModalOpen(true);
  };

  // Función para ver detalles del estudio
  const handleVerEstudio = (estudio: any) => {
    alert(`Ver detalles del estudio: ${estudio.nombre}`);
  };

  // Función para descargar imágenes
  const handleDescargarResultados = () => {
    alert("Descargando imágenes de estudios de imagenología...");
  };

  // Función para eliminar estudio
  const handleEliminarEstudio = (id: number) => {
    if (confirm("¿Está seguro de eliminar este estudio de imagenología?")) {
      // Aquí iría la lógica para eliminar el estudio
      console.log(`Eliminar estudio de imagenología ${id}`);
    }
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case "completado":
        return "bg-success/10 text-success border-success/20";
      case "pendiente":
        return "bg-warning/10 text-warning border-warning/20";
      case "en_proceso":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getPrioridadColor = (prioridad: string) => {
    switch (prioridad) {
      case "urgente":
        return "destructive";
      case "alta":
        return "secondary";
      case "normal":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Estudios de Imagenología
          </h2>
          <p className="text-muted-foreground">
            Radiografías, tomografías, resonancias magnéticas y ecografías
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => {}} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Actualizar
          </Button>
          <Button onClick={handleSolicitarEstudio}>
            <Plus className="h-4 w-4 mr-2" />
            Solicitar Estudio de Imagen
          </Button>
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
                <p className="text-sm text-muted-foreground">Completados</p>
                <p className="text-2xl font-bold text-success">
                  {estudios.filter((e) => e.estado === "completado").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <Calendar className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pendientes</p>
                <p className="text-2xl font-bold text-warning">
                  {estudios.filter((e) => e.estado === "pendiente").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <Activity className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Urgentes</p>
                <p className="text-2xl font-bold text-destructive">
                  {estudios.filter((e) => e.prioridad === "urgente").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Microscope className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-2xl font-bold text-primary">
                  {estudios.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Estudios de Imagenología */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Estudios de Imagenología</CardTitle>
          <Button size="sm" onClick={handleSolicitarEstudio}>
            <Plus className="h-4 w-4 mr-1" />
            Solicitar Estudio de Imagen
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Estudio</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Prioridad</TableHead>
                <TableHead>Resultado</TableHead>
                <TableHead>Médico</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {estudios.map((estudio) => (
                <TableRow key={estudio.id}>
                  <TableCell className="font-medium">
                    {estudio.nombre}
                  </TableCell>
                  <TableCell>{estudio.fecha}</TableCell>
                  <TableCell>
                    <Badge className={getEstadoColor(estudio.estado)}>
                      {estudio.estado}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getPrioridadColor(estudio.prioridad)}>
                      {estudio.prioridad}
                    </Badge>
                  </TableCell>
                  <TableCell>{estudio.resultado}</TableCell>
                  <TableCell>{estudio.medico}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleVerEstudio(estudio)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEliminarEstudio(estudio.id)}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
