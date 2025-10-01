import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
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
  Pencil,
  Trash2,
  Clock,
  User,
  FileText,
  Search,
  Filter,
} from "lucide-react";
import { useState } from "react";

export function OrdenesMedicas() {
  const [ordenes, setOrdenes] = useState([
    {
      id: 1,
      tipo: "Medicamento",
      descripcion: "Paracetamol 500mg",
      frecuencia: "Cada 8 horas",
      duracion: "3 días",
      estado: "activa",
      prioridad: "alta",
      fecha: "2025-01-15",
      medico: "Dr. García",
    },
    {
      id: 2,
      tipo: "Laboratorio",
      descripcion: "Hemograma completo",
      frecuencia: "Una vez",
      duracion: "Inmediato",
      estado: "completada",
      prioridad: "media",
      fecha: "2025-01-15",
      medico: "Dr. López",
    },
  ]);

  // Estados para funcionalidades
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOrden, setEditingOrden] = useState<any>(null);
  const [filtros, setFiltros] = useState({
    tipo: "",
    estado: "",
    prioridad: "",
    search: "",
  });
  const [ordenesFiltradas, setOrdenesFiltradas] = useState(ordenes);

  // Función para agregar nueva orden
  const handleAgregarOrden = () => {
    setEditingOrden(null);
    setIsModalOpen(true);
  };

  // Función para editar orden
  const handleEditarOrden = (orden: any) => {
    setEditingOrden(orden);
    setIsModalOpen(true);
  };

  // Función para eliminar orden
  const handleEliminarOrden = (id: number) => {
    if (confirm("¿Está seguro de eliminar esta orden médica?")) {
      setOrdenes(ordenes.filter((o) => o.id !== id));
    }
  };

  // Función para filtrar órdenes
  const handleFiltrar = () => {
    let filtradas = ordenes;

    if (filtros.tipo) {
      filtradas = filtradas.filter((o) => o.tipo === filtros.tipo);
    }
    if (filtros.estado) {
      filtradas = filtradas.filter((o) => o.estado === filtros.estado);
    }
    if (filtros.prioridad) {
      filtradas = filtradas.filter((o) => o.prioridad === filtros.prioridad);
    }
    if (filtros.search) {
      filtradas = filtradas.filter(
        (o) =>
          o.descripcion.toLowerCase().includes(filtros.search.toLowerCase()) ||
          o.medico.toLowerCase().includes(filtros.search.toLowerCase())
      );
    }

    setOrdenesFiltradas(filtradas);
  };

  // Función para imprimir órdenes
  const handleImprimirOrdenes = () => {
    window.print();
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case "activa":
        return "bg-success/10 text-success border-success/20";
      case "completada":
        return "bg-muted text-muted-foreground border-border";
      case "pendiente":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getPrioridadColor = (prioridad: string) => {
    switch (prioridad) {
      case "alta":
        return "destructive";
      case "media":
        return "secondary";
      case "baja":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header con acciones */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Órdenes Médicas
          </h2>
          <p className="text-muted-foreground">
            Gestión de órdenes y prescripciones médicas
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleAgregarOrden}>
            <Plus className="h-4 w-4 mr-2" />
            Nueva Orden
          </Button>
          <Button variant="outline" onClick={handleImprimirOrdenes}>
            <FileText className="h-4 w-4 mr-2" />
            Imprimir Órdenes
          </Button>
        </div>
      </div>

      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Activas</p>
                <p className="text-2xl font-bold text-primary">
                  {ordenesFiltradas.filter((o) => o.estado === "activa").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <FileText className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Completadas</p>
                <p className="text-2xl font-bold text-success">
                  {
                    ordenesFiltradas.filter((o) => o.estado === "completada")
                      .length
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
                <Clock className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pendientes</p>
                <p className="text-2xl font-bold text-warning">
                  {
                    ordenesFiltradas.filter((o) => o.estado === "pendiente")
                      .length
                  }
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
                  {ordenesFiltradas.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filtros y búsqueda */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Tipo de Orden
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Todos los tipos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="medicamento">Medicamento</SelectItem>
                  <SelectItem value="laboratorio">Laboratorio</SelectItem>
                  <SelectItem value="imagen">Imagen</SelectItem>
                  <SelectItem value="procedimiento">Procedimiento</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Estado</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Todos los estados" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="activa">Activa</SelectItem>
                  <SelectItem value="completada">Completada</SelectItem>
                  <SelectItem value="pendiente">Pendiente</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Prioridad
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Todas las prioridades" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alta">Alta</SelectItem>
                  <SelectItem value="media">Media</SelectItem>
                  <SelectItem value="baja">Baja</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full" onClick={handleFiltrar}>
                <Filter className="h-4 w-4 mr-2" />
                Filtrar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de órdenes */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Órdenes Médicas</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tipo</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Frecuencia</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Prioridad</TableHead>
                <TableHead>Médico</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ordenesFiltradas.map((orden) => (
                <TableRow key={orden.id}>
                  <TableCell className="font-medium">{orden.tipo}</TableCell>
                  <TableCell>{orden.descripcion}</TableCell>
                  <TableCell>{orden.frecuencia}</TableCell>
                  <TableCell>
                    <Badge className={getEstadoColor(orden.estado)}>
                      {orden.estado}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getPrioridadColor(orden.prioridad)}>
                      {orden.prioridad}
                    </Badge>
                  </TableCell>
                  <TableCell>{orden.medico}</TableCell>
                  <TableCell>{orden.fecha}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleEditarOrden(orden)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleEliminarOrden(orden.id)}
                      >
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
    </div>
  );
}
