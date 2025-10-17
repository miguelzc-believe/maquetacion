import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Search, FileText } from "lucide-react";
import { mockSolicitudes, type Solicitud } from "../data/mockSolicitudes";

export function SolicitudesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEstado, setSelectedEstado] = useState("Todas");

  const filteredSolicitudes = useMemo(() => {
    let solicitudes =
      selectedEstado === "Todas"
        ? mockSolicitudes
        : mockSolicitudes.filter((s) => s.estado === selectedEstado);

    if (searchTerm) {
      solicitudes = solicitudes.filter(
        (s) =>
          s.pacienteNombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.motivo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.medicoSolicitante.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return solicitudes;
  }, [selectedEstado, searchTerm]);

  const getEstadoBadge = (estado: string) => {
    const colors = {
      Pendiente: "bg-yellow-100 text-yellow-800",
      "En Revisión": "bg-blue-100 text-blue-800",
      Aprobada: "bg-green-100 text-green-800",
      Rechazada: "bg-red-100 text-red-800",
    };
    return colors[estado as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getPrioridadBadge = (prioridad: string) => {
    const colors = {
      Alta: "bg-red-100 text-red-800",
      Media: "bg-yellow-100 text-yellow-800",
      Baja: "bg-green-100 text-green-800",
    };
    return (
      colors[prioridad as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <FileText className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Solicitudes de Revisión
            </h1>
            <p className="text-muted-foreground">
              Gestión de solicitudes pendientes
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por paciente, motivo o médico..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <Tabs value={selectedEstado} onValueChange={setSelectedEstado}>
            <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
              <TabsTrigger value="Todas">Todas</TabsTrigger>
              <TabsTrigger value="Pendiente">Pendientes</TabsTrigger>
              <TabsTrigger value="En Revisión">En Revisión</TabsTrigger>
              <TabsTrigger value="Aprobada">Aprobadas</TabsTrigger>
              <TabsTrigger value="Rechazada">Rechazadas</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>ID</TableHead>
                <TableHead>Paciente</TableHead>
                <TableHead>Motivo</TableHead>
                <TableHead>Médico Solicitante</TableHead>
                <TableHead>Especialidad</TableHead>
                <TableHead>Prioridad</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Fecha</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSolicitudes.map((solicitud) => (
                <TableRow key={solicitud.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{solicitud.id}</TableCell>
                  <TableCell>{solicitud.pacienteNombre}</TableCell>
                  <TableCell>{solicitud.motivo}</TableCell>
                  <TableCell className="text-sm">
                    {solicitud.medicoSolicitante}
                  </TableCell>
                  <TableCell className="text-sm">
                    {solicitud.especialidad}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`${getPrioridadBadge(
                        solicitud.prioridad
                      )} text-xs`}
                    >
                      {solicitud.prioridad}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`${getEstadoBadge(solicitud.estado)} text-xs`}
                    >
                      {solicitud.estado}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">
                    {solicitud.fechaSolicitud}
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
