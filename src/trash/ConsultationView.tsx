import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";
import {
  ChevronDown,
  Plus,
  Eye,
  Pencil,
  Trash2,
  Download,
  Printer,
  Save,
} from "lucide-react";
import { useState } from "react";

export function ConsultationView() {
  const [openSections, setOpenSections] = useState<string[]>([
    "vital-signs",
    "consultation-reason",
  ]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-wrap gap-3 justify-between items-center">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-yellow-50 border-yellow-200">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            Manicol
          </Badge>
          <Badge variant="outline" className="bg-red-50 border-red-200">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Benzilpenicilina
          </Badge>
          <Badge variant="outline" className="bg-yellow-50 border-yellow-200">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            Ácaro de polvo ambiental
          </Badge>
          <Badge variant="outline" className="bg-yellow-50 border-yellow-200">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            Polen
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Descargar
          </Button>
          <Button variant="outline" size="sm">
            <Printer className="h-4 w-4 mr-1" />
            Imprimir
          </Button>
          <Button variant="outline" size="sm">
            <Save className="h-4 w-4 mr-1" />
            Firmar y Guardar
          </Button>
          <Button size="sm">Guardar</Button>
        </div>
      </div>

      {/* Vital Signs / Measurements */}
      <Collapsible
        open={openSections.includes("vital-signs")}
        onOpenChange={() => toggleSection("vital-signs")}
      >
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader className="flex flex-row items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <CardTitle>Signos Vitales / Medidas</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Agregar
                </Button>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openSections.includes("vital-signs") ? "rotate-180" : ""
                  }`}
                />
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <p className="text-gray-500">No hay datos registrados</p>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Consultation Reason */}
      <Collapsible
        open={openSections.includes("consultation-reason")}
        onOpenChange={() => toggleSection("consultation-reason")}
      >
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader className="flex flex-row items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <CardTitle>Motivo de Consulta</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Editar
                </Button>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openSections.includes("consultation-reason")
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <p className="text-gray-700">Le paso un auto</p>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Current Illness */}
      <Collapsible
        open={openSections.includes("current-illness")}
        onOpenChange={() => toggleSection("current-illness")}
      >
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader className="flex flex-row items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <CardTitle>Enfermedad Actual</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Agregar
                </Button>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openSections.includes("current-illness") ? "rotate-180" : ""
                  }`}
                />
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <p className="text-gray-500">No hay datos registrados</p>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Medical History */}
      <Collapsible
        open={openSections.includes("medical-history")}
        onOpenChange={() => toggleSection("medical-history")}
      >
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader className="flex flex-row items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <CardTitle>Historial Médico</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Agregar
                </Button>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openSections.includes("medical-history") ? "rotate-180" : ""
                  }`}
                />
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div className="flex-1">
                    <p className="text-gray-700">E232 - Diabetes insípida</p>
                    <p className="text-gray-600">
                      Diagnóstico: E232 - Diabetes insípida
                    </p>
                    <p className="text-gray-500">Fecha: 01/10/2025</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Family Medical History */}
      <Collapsible
        open={openSections.includes("family-history")}
        onOpenChange={() => toggleSection("family-history")}
      >
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader className="flex flex-row items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <CardTitle>Historial Médico de la Familia</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Agregar
                </Button>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openSections.includes("family-history") ? "rotate-180" : ""
                  }`}
                />
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <p className="text-gray-500">No hay datos registrados</p>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Social History */}
      <Collapsible
        open={openSections.includes("social-history")}
        onOpenChange={() => toggleSection("social-history")}
      >
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader className="flex flex-row items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <CardTitle>
                Historial Social (Tabaco, Alcohol, Drogas, Actividad Física,
                Dieta)
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Agregar
                </Button>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openSections.includes("social-history") ? "rotate-180" : ""
                  }`}
                />
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <p className="text-gray-500">No hay datos registrados</p>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Surgical History */}
      <Collapsible
        open={openSections.includes("surgical-history")}
        onOpenChange={() => toggleSection("surgical-history")}
      >
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader className="flex flex-row items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <CardTitle>Historial Quirúrgico</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Agregar
                </Button>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openSections.includes("surgical-history")
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <p className="text-gray-500">No hay datos registrados</p>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Habitual Medication */}
      <Collapsible
        open={openSections.includes("habitual-medication")}
        onOpenChange={() => toggleSection("habitual-medication")}
      >
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader className="flex flex-row items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <CardTitle>
                Medicación Habitual (Información proporcionada por el paciente)
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Agregar
                </Button>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openSections.includes("habitual-medication")
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <p className="text-gray-500">
                Información proporcionada por el paciente
              </p>
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Medicamento</TableHead>
                    <TableHead>Diagnóstico</TableHead>
                    <TableHead>Dosis</TableHead>
                    <TableHead>Frecuencia</TableHead>
                    <TableHead>Fecha de inicio/fin</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center text-gray-500"
                    >
                      No hay medicamentos registrados
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Allergies */}
      <Collapsible
        open={openSections.includes("allergies")}
        onOpenChange={() => toggleSection("allergies")}
      >
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader className="flex flex-row items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <CardTitle>Alergias</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Agregar
                </Button>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openSections.includes("allergies") ? "rotate-180" : ""
                  }`}
                />
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <p className="text-gray-500">No hay datos registrados</p>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Physical Examination */}
      <Collapsible
        open={openSections.includes("physical-exam")}
        onOpenChange={() => toggleSection("physical-exam")}
      >
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader className="flex flex-row items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <CardTitle>Examen Físico</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Agregar
                </Button>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openSections.includes("physical-exam") ? "rotate-180" : ""
                  }`}
                />
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <p className="text-gray-500">No hay datos registrados</p>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      {/* Diagnosis */}
      <Collapsible
        open={openSections.includes("diagnosis")}
        onOpenChange={() => toggleSection("diagnosis")}
      >
        <Card>
          <CollapsibleTrigger className="w-full">
            <CardHeader className="flex flex-row items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <CardTitle>Diagnóstico</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Agregar
                </Button>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openSections.includes("diagnosis") ? "rotate-180" : ""
                  }`}
                />
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent>
              <p className="text-gray-500">No hay datos registrados</p>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  );
}
