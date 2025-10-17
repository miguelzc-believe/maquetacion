import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
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
  Search,
  Plus,
  UserPlus,
  Eye,
  Edit,
  MoreHorizontal,
} from "lucide-react";
import {
  mockPatients,
  getPatientsBySpecialty,
  type Patient,
} from "../data/mockPatients";

interface InternacionesViewProps {
  onPatientSelect: (patient: Patient) => void;
}

export function InternacionesView({ onPatientSelect }: InternacionesViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtrar pacientes por especialidad y término de búsqueda
  const filteredPatients = useMemo(() => {
    let patients = getPatientsBySpecialty(selectedSpecialty);

    if (searchTerm) {
      patients = patients.filter(
        (patient) =>
          patient.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          patient.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          patient.razonAdmision.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return patients;
  }, [selectedSpecialty, searchTerm]);

  // Calcular paginación
  const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPatients = filteredPatients.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getPriorityBadgeColor = (priority: string) => {
    switch (priority) {
      case "Nivel 1":
        return "bg-red-100 text-red-800 border-red-200 font-medium";
      case "Nivel 2":
        return "bg-yellow-100 text-yellow-800 border-yellow-200 font-medium";
      case "Nivel 3":
        return "bg-green-100 text-green-800 border-green-200 font-medium";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 font-medium";
    }
  };

  const handlePatientClick = (patient: Patient) => {
    onPatientSelect(patient);
  };

  return (
    <div className="space-y-6">
      {/* Header con título y botones */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Plus className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              Internaciones
            </h1>
          </div>
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20"
          >
            Pacientes hospitalizados
          </Badge>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Registrar Ingreso
        </Button>
      </div>

      {/* Búsqueda de paciente */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-foreground mb-2">
                Buscar paciente
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Nombre, doctor o razón de admisión..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-48">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Filtrar por..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nombre">Nombre</SelectItem>
                  <SelectItem value="doctor">Doctor</SelectItem>
                  <SelectItem value="fecha">Fecha de ingreso</SelectItem>
                  <SelectItem value="prioridad">Prioridad</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              variant="outline"
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Paciente Nuevo
            </Button>
          </div>
          <div className="mt-3 text-sm text-blue-600 bg-blue-50 p-3 rounded-lg border border-blue-200">
            Necesita seleccionar un paciente para registrar un ingreso
          </div>
        </CardContent>
      </Card>

      {/* Lista de pacientes con filtros */}
      <Card>
        <CardHeader>
          <Tabs value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
            <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground w-full">
              <TabsTrigger value="Todos" className="flex-1">
                Todos
              </TabsTrigger>
              <TabsTrigger value="Emergencia" className="flex-1">
                Emergencia
              </TabsTrigger>
              <TabsTrigger value="Cardiología" className="flex-1">
                Cardiología
              </TabsTrigger>
              <TabsTrigger value="Traumatología" className="flex-1">
                Traumatología
              </TabsTrigger>
              <TabsTrigger value="Gastroenterología" className="flex-1">
                Gastroenterología
              </TabsTrigger>
              <TabsTrigger value="Medicina Interna" className="flex-1">
                Medicina Interna
              </TabsTrigger>
              <TabsTrigger value="Mi Lista" className="flex-1">
                Mi Lista
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent className="p-0">
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-12 text-center font-semibold">
                    #
                  </TableHead>
                  <TableHead className="min-w-[200px] font-semibold">
                    Nombre
                  </TableHead>
                  <TableHead className="min-w-[180px] font-semibold">
                    Ingreso
                  </TableHead>
                  <TableHead className="min-w-[200px] font-semibold">
                    Doctor
                  </TableHead>
                  <TableHead className="w-24 text-center font-semibold">
                    Prioridad
                  </TableHead>
                  <TableHead className="min-w-[200px] font-semibold">
                    Ubicación
                  </TableHead>
                  <TableHead className="w-32 text-center font-semibold">
                    Acciones
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedPatients.map((patient, index) => (
                  <TableRow
                    key={patient.id}
                    className="cursor-pointer hover:bg-muted/50 border-b border-border/50"
                    onClick={() => handlePatientClick(patient)}
                  >
                    <TableCell className="font-medium text-center py-4">
                      {startIndex + index + 1}
                    </TableCell>
                    <TableCell className="font-medium py-4">
                      {patient.nombre}
                    </TableCell>
                    <TableCell className="text-sm py-4 text-muted-foreground">
                      {patient.fechaIngreso}
                    </TableCell>
                    <TableCell className="text-sm py-4">
                      {patient.doctor}
                    </TableCell>
                    <TableCell className="text-center py-4">
                      <Badge
                        className={`${getPriorityBadgeColor(
                          patient.prioridad
                        )} text-xs px-3 py-1 rounded-full`}
                      >
                        {patient.prioridad}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm py-4 text-muted-foreground">
                      Cama: {patient.ubicacion.cama}, Piso:{" "}
                      {patient.ubicacion.piso}, Habit.:{" "}
                      {patient.ubicacion.habitacion}
                    </TableCell>
                    <TableCell className="py-4">
                      <div className="flex items-center justify-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-blue-50 rounded-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePatientClick(patient);
                          }}
                          title="Ver historia clínica"
                        >
                          <Eye className="h-4 w-4 text-blue-600" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-green-50 rounded-full"
                          onClick={(e) => e.stopPropagation()}
                          title="Editar paciente"
                        >
                          <Edit className="h-4 w-4 text-green-600" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-gray-50 rounded-full"
                          onClick={(e) => e.stopPropagation()}
                          title="Más opciones"
                        >
                          <MoreHorizontal className="h-4 w-4 text-gray-600" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 bg-muted/30 border-t">
              <div className="text-sm text-muted-foreground">
                Mostrando {startIndex + 1} a{" "}
                {Math.min(startIndex + itemsPerPage, filteredPatients.length)}{" "}
                de {filteredPatients.length} pacientes
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="h-8 w-8 p-0"
                >
                  &lt;&lt;
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="h-8 w-8 p-0"
                >
                  &lt;
                </Button>
                <div className="flex items-center gap-1 mx-2">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = i + 1;
                    return (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="h-8 w-8 p-0"
                      >
                        {page}
                      </Button>
                    );
                  })}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="h-8 w-8 p-0"
                >
                  &gt;
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="h-8 w-8 p-0"
                >
                  &gt;&gt;
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
