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
  Plus,
  Calendar,
  Clock,
  User,
  MapPin,
  FileText,
  Edit,
  Trash2,
} from "lucide-react";
import { useState } from "react";

export function CirugiasMedicas() {
  const [cirugias] = useState([
    {
      id: 1,
      procedimiento: "Apendicectomía",
      fecha: "2023-08-15",
      hora: "10:30",
      cirujano: "Dr. Rodríguez",
      anestesia: "General",
      duracion: "45 min",
      estado: "completada",
      complicaciones: "Ninguna",
      ubicacion: "Quirófano 1",
    },
    {
      id: 2,
      procedimiento: "Colecistectomía",
      fecha: "2024-03-22",
      hora: "14:15",
      cirujano: "Dr. López",
      anestesia: "General",
      duracion: "90 min",
      estado: "programada",
      complicaciones: "N/A",
      ubicacion: "Quirófano 2",
    },
  ]);

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case "completada":
        return "bg-success/10 text-success border-success/20";
      case "programada":
        return "bg-primary/10 text-primary border-primary/20";
      case "cancelada":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "en_proceso":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Cirugías Médicas
          </h2>
          <p className="text-muted-foreground">
            Historial y programación de intervenciones quirúrgicas
          </p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Programar Cirugía
          </Button>
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Ver Protocolos
          </Button>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <Calendar className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Completadas</p>
                <p className="text-2xl font-bold text-success">
                  {cirugias.filter((c) => c.estado === "completada").length}
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
                <p className="text-sm text-muted-foreground">Programadas</p>
                <p className="text-2xl font-bold text-primary">
                  {cirugias.filter((c) => c.estado === "programada").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <MapPin className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">En Proceso</p>
                <p className="text-2xl font-bold text-warning">
                  {cirugias.filter((c) => c.estado === "en_proceso").length}
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
                  {cirugias.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de cirugías */}
      <Card>
        <CardHeader>
          <CardTitle>Historial de Cirugías</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Procedimiento</TableHead>
                <TableHead>Fecha/Hora</TableHead>
                <TableHead>Cirujano</TableHead>
                <TableHead>Anestesia</TableHead>
                <TableHead>Duración</TableHead>
                <TableHead>Ubicación</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Complicaciones</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cirugias.map((cirugia) => (
                <TableRow key={cirugia.id}>
                  <TableCell className="font-medium">
                    {cirugia.procedimiento}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {cirugia.fecha}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {cirugia.hora}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{cirugia.cirujano}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{cirugia.anestesia}</Badge>
                  </TableCell>
                  <TableCell>{cirugia.duracion}</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {cirugia.ubicacion}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge className={getEstadoColor(cirugia.estado)}>
                      {cirugia.estado}
                    </Badge>
                  </TableCell>
                  <TableCell>{cirugia.complicaciones}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <FileText className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Próximas cirugías programadas */}
      <Card>
        <CardHeader>
          <CardTitle>Cirugías Programadas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cirugias
              .filter((c) => c.estado === "programada")
              .map((cirugia) => (
                <div
                  key={cirugia.id}
                  className="flex items-center justify-between p-4 border border-primary/20 bg-primary/5 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">
                        {cirugia.procedimiento}
                      </h4>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {cirugia.fecha} - {cirugia.hora}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Cirujano: {cirugia.cirujano}</span>
                      <span>Anestesia: {cirugia.anestesia}</span>
                      <span>Ubicación: {cirugia.ubicacion}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Ver Detalles
                    </Button>
                    <Button size="sm">Confirmar</Button>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
