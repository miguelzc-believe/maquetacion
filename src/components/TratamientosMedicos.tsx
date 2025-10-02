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
  Plus,
  Edit,
  Trash2,
  Clock,
  Pill,
  Activity,
  Calendar,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";

export function TratamientosMedicos() {
  const [tratamientos] = useState({
    medicamentos: [
      {
        id: 1,
        medicamento: "Paracetamol",
        dosis: "500mg",
        frecuencia: "Cada 8 horas",
        duracion: "7 días",
        estado: "activo",
        inicio: "2025-01-15",
        fin: "2025-01-22",
        prescriptor: "Dr. García",
      },
      {
        id: 2,
        medicamento: "Ibuprofeno",
        dosis: "400mg",
        frecuencia: "Cada 12 horas",
        duracion: "5 días",
        estado: "completado",
        inicio: "2025-01-10",
        fin: "2025-01-15",
        prescriptor: "Dr. López",
      },
    ],
    terapias: [
      {
        id: 1,
        terapia: "Fisioterapia",
        tipo: "Rehabilitación",
        frecuencia: "3 veces por semana",
        duracion: "4 semanas",
        estado: "activo",
        terapeuta: "Lic. Martínez",
      },
    ],
    procedimientos: [
      {
        id: 1,
        procedimiento: "Curación de herida",
        tipo: "Post-quirúrgico",
        frecuencia: "Diaria",
        estado: "activo",
        enfermero: "Enf. Rodríguez",
      },
    ],
  });

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case "activo":
        return "bg-success/10 text-success border-success/20";
      case "completado":
        return "bg-muted text-muted-foreground border-border";
      case "suspendido":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  // Estados para funcionalidades
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTratamiento, setEditingTratamiento] = useState<any>(null);

  // Función para agregar nuevo tratamiento
  const handleNuevoTratamiento = () => {
    setEditingTratamiento(null);
    setIsModalOpen(true);
  };

  // Función para editar tratamiento
  const handleEditarTratamiento = (tratamiento: any) => {
    setEditingTratamiento(tratamiento);
    setIsModalOpen(true);
  };

  // Función para eliminar tratamiento
  const handleEliminarTratamiento = (id: number, tipo: string) => {
    if (confirm("¿Está seguro de eliminar este tratamiento?")) {
      console.log(`Eliminar tratamiento ${id} de tipo ${tipo}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Tratamientos Médicos
          </h2>
          <p className="text-muted-foreground">
            Gestión de medicamentos, terapias y procedimientos
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => {}} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Actualizar
          </Button>
          <Button onClick={handleNuevoTratamiento}>
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Tratamiento
          </Button>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <Pill className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Activos</p>
                <p className="text-2xl font-bold text-success">
                  {
                    Object.values(tratamientos)
                      .flat()
                      .filter((t) => t.estado === "activo").length
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
                <Activity className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Medicamentos</p>
                <p className="text-2xl font-bold text-primary">
                  {tratamientos.medicamentos.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Clock className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Terapias</p>
                <p className="text-2xl font-bold text-secondary">
                  {tratamientos.terapias.length}
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
                <p className="text-sm text-muted-foreground">Completados</p>
                <p className="text-2xl font-bold text-warning">
                  {
                    Object.values(tratamientos)
                      .flat()
                      .filter((t) => t.estado === "completado").length
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs de tratamientos */}
      <Tabs defaultValue="medicamentos" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="medicamentos">Medicamentos</TabsTrigger>
          <TabsTrigger value="terapias">Terapias</TabsTrigger>
          <TabsTrigger value="procedimientos">Procedimientos</TabsTrigger>
        </TabsList>

        {/* Medicamentos */}
        <TabsContent value="medicamentos" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Tratamiento Farmacológico</CardTitle>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Agregar Medicamento
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Medicamento</TableHead>
                    <TableHead>Dosis</TableHead>
                    <TableHead>Frecuencia</TableHead>
                    <TableHead>Duración</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Inicio/Fin</TableHead>
                    <TableHead>Prescriptor</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tratamientos.medicamentos.map((med) => (
                    <TableRow key={med.id}>
                      <TableCell className="font-medium">
                        {med.medicamento}
                      </TableCell>
                      <TableCell>{med.dosis}</TableCell>
                      <TableCell>{med.frecuencia}</TableCell>
                      <TableCell>{med.duracion}</TableCell>
                      <TableCell>
                        <Badge className={getEstadoColor(med.estado)}>
                          {med.estado}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{med.inicio}</div>
                          <div className="text-muted-foreground">{med.fin}</div>
                        </div>
                      </TableCell>
                      <TableCell>{med.prescriptor}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
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
        </TabsContent>

        {/* Terapias */}
        <TabsContent value="terapias" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Terapias y Rehabilitación</CardTitle>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Agregar Terapia
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tratamientos.terapias.map((terapia) => (
                  <div
                    key={terapia.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">
                          {terapia.terapia}
                        </h4>
                        <Badge className={getEstadoColor(terapia.estado)}>
                          {terapia.estado}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {terapia.tipo}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Frecuencia: {terapia.frecuencia}</span>
                        <span>Duración: {terapia.duracion}</span>
                        <span>Terapeuta: {terapia.terapeuta}</span>
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
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Procedimientos */}
        <TabsContent value="procedimientos" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Procedimientos y Cuidados</CardTitle>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Agregar Procedimiento
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tratamientos.procedimientos.map((procedimiento) => (
                  <div
                    key={procedimiento.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">
                          {procedimiento.procedimiento}
                        </h4>
                        <Badge className={getEstadoColor(procedimiento.estado)}>
                          {procedimiento.estado}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {procedimiento.tipo}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Frecuencia: {procedimiento.frecuencia}</span>
                        <span>Enfermero: {procedimiento.enfermero}</span>
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
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
