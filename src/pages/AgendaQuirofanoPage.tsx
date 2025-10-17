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
import { Building2, Clock } from "lucide-react";
import {
  mockQuirofanos,
  mockAgendaQuirofanos,
  type Quirofano,
} from "../data/mockQuirofanos";

export function AgendaQuirofanoPage() {
  const getEstadoBadge = (estado: string) => {
    const colors = {
      Disponible: "bg-green-100 text-green-800",
      Ocupado: "bg-red-100 text-red-800",
      Mantenimiento: "bg-yellow-100 text-yellow-800",
      Limpieza: "bg-blue-100 text-blue-800",
    };
    return colors[estado as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Building2 className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Agenda de Quirófanos
            </h1>
            <p className="text-muted-foreground">
              Gestión y disponibilidad de quirófanos
            </p>
          </div>
        </div>
      </div>

      {/* Quirófanos Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockQuirofanos.map((quirofano) => (
          <Card key={quirofano.id}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{quirofano.nombre}</CardTitle>
                <Badge
                  className={`${getEstadoBadge(quirofano.estado)} text-xs`}
                >
                  {quirofano.estado}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ubicación:</span>
                  <span className="font-medium">{quirofano.ubicacion}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Capacidad:</span>
                  <span className="font-medium">
                    {quirofano.capacidad} personas
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-muted-foreground text-xs">
                    Especialidades:
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {quirofano.especialidades.map((esp, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {esp}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Agenda */}
      <Card>
        <CardHeader>
          <CardTitle>Agenda del Día</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Quirófano</TableHead>
                <TableHead>Paciente</TableHead>
                <TableHead>Cirugía</TableHead>
                <TableHead>Cirujano</TableHead>
                <TableHead>Horario</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAgendaQuirofanos.slice(0, 6).map((agenda) => (
                <TableRow key={agenda.id} className="hover:bg-muted/50">
                  <TableCell>
                    <Badge variant="outline">{agenda.quirofanoId}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">
                    {agenda.pacienteNombre}
                  </TableCell>
                  <TableCell className="text-sm">
                    {agenda.tipoCirugia}
                  </TableCell>
                  <TableCell className="text-sm">{agenda.cirujano}</TableCell>
                  <TableCell className="text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {agenda.horaInicio} - {agenda.horaFin}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="text-xs">{agenda.estado}</Badge>
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
