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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
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
} from "lucide-react";
import { useState } from "react";

export function EstudiosMedicos() {
  const [estudios] = useState({
    laboratorio: [
      {
        id: 1,
        nombre: "Hemograma Completo",
        fecha: "2025-01-15",
        estado: "completado",
        resultado: "Normal",
        prioridad: "normal",
        medico: "Dr. López",
      },
      {
        id: 2,
        nombre: "Glucosa",
        fecha: "2025-01-15",
        estado: "pendiente",
        resultado: "Esperando",
        prioridad: "urgente",
        medico: "Dr. García",
      },
    ],
    imagen: [
      {
        id: 1,
        nombre: "Radiografía de Tórax",
        fecha: "2025-01-14",
        estado: "completado",
        resultado: "Normal",
        prioridad: "normal",
        medico: "Dr. Martínez",
      },
    ],
    otros: [
      {
        id: 1,
        nombre: "Electrocardiograma",
        fecha: "2025-01-13",
        estado: "completado",
        resultado: "Anormal",
        prioridad: "alta",
        medico: "Dr. Ruiz",
      },
    ],
  });

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
            Estudios Médicos
          </h2>
          <p className="text-muted-foreground">
            Laboratorio, imágenes y estudios diagnósticos
          </p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Solicitar Estudio
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Descargar Resultados
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
                  {
                    Object.values(estudios)
                      .flat()
                      .filter((e) => e.estado === "completado").length
                  }
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
                  {
                    Object.values(estudios)
                      .flat()
                      .filter((e) => e.estado === "pendiente").length
                  }
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
                  {
                    Object.values(estudios)
                      .flat()
                      .filter((e) => e.prioridad === "urgente").length
                  }
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
                  {Object.values(estudios).flat().length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs de tipos de estudios */}
      <Tabs defaultValue="laboratorio" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="laboratorio">Laboratorio</TabsTrigger>
          <TabsTrigger value="imagen">Imágenes</TabsTrigger>
          <TabsTrigger value="otros">Otros Estudios</TabsTrigger>
        </TabsList>

        {/* Estudios de Laboratorio */}
        <TabsContent value="laboratorio" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Análisis de Laboratorio</CardTitle>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Solicitar Análisis
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
                  {estudios.laboratorio.map((estudio) => (
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
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
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
        </TabsContent>

        {/* Estudios de Imagen */}
        <TabsContent value="imagen" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Estudios de Imagen</CardTitle>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Solicitar Imagen
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
                  {estudios.imagen.map((estudio) => (
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
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
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
        </TabsContent>

        {/* Otros Estudios */}
        <TabsContent value="otros" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Otros Estudios Diagnósticos</CardTitle>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Solicitar Estudio
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
                  {estudios.otros.map((estudio) => (
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
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
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
        </TabsContent>
      </Tabs>
    </div>
  );
}
