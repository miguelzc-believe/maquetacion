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
import { Calendar, Clock } from "lucide-react";
import { mockCirugias, type Cirugia } from "../data/mockAgendaCirugia";

export function AgendaCirugiaPage() {
  const [selectedEstado, setSelectedEstado] = useState("Todas");

  const filteredCirugias = useMemo(() => {
    return selectedEstado === "Todas"
      ? mockCirugias
      : mockCirugias.filter((c) => c.estado === selectedEstado);
  }, [selectedEstado]);

  const getEstadoBadge = (estado: string) => {
    const colors = {
      Programada: "bg-blue-100 text-blue-800",
      "En Curso": "bg-green-100 text-green-800",
      Completada: "bg-gray-100 text-gray-800",
      Cancelada: "bg-red-100 text-red-800",
      Postergada: "bg-yellow-100 text-yellow-800",
    };
    return colors[estado as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Calendar className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Agenda de Cirugía
            </h1>
            <p className="text-muted-foreground">Programación de cirugías</p>
          </div>
        </div>
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <Tabs value={selectedEstado} onValueChange={setSelectedEstado}>
            <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
              <TabsTrigger value="Todas">Todas</TabsTrigger>
              <TabsTrigger value="Programada">Programadas</TabsTrigger>
              <TabsTrigger value="En Curso">En Curso</TabsTrigger>
              <TabsTrigger value="Completada">Completadas</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>ID</TableHead>
                <TableHead>Paciente</TableHead>
                <TableHead>Tipo de Cirugía</TableHead>
                <TableHead>Cirujano</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Hora</TableHead>
                <TableHead>Quirófano</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCirugias.map((cirugia) => (
                <TableRow key={cirugia.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{cirugia.id}</TableCell>
                  <TableCell>{cirugia.pacienteNombre}</TableCell>
                  <TableCell className="text-sm">
                    {cirugia.tipoCirugia}
                  </TableCell>
                  <TableCell className="text-sm">{cirugia.cirujano}</TableCell>
                  <TableCell className="text-sm">{cirugia.fecha}</TableCell>
                  <TableCell className="text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {cirugia.horaInicio}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{cirugia.quirofano}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`${getEstadoBadge(cirugia.estado)} text-xs`}
                    >
                      {cirugia.estado}
                    </Badge>
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
