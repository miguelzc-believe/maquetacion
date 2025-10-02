import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Plus,
  Edit,
  Save,
  FileText,
  Download,
  Calendar,
  User,
  Hospital,
} from "lucide-react";
import { useState } from "react";

export function EpicrisisMedica() {
  const [epicrisis] = useState([
    {
      id: 1,
      paciente: "ADELA MANRIQUE TOLA",
      fecha_ingreso: "2025-01-10",
      fecha_alta: "2025-01-20",
      medico: "Dr. García López",
      especialidad: "Medicina Interna",
      diagnostico_ingreso: "Neumonía adquirida en la comunidad",
      diagnostico_egreso: "Neumonía resuelta",
      evolucion:
        "Paciente evolucionó favorablemente con tratamiento antibiótico...",
      estado: "firmada",
    },
  ]);

  const [nuevaEpicrisis, setNuevaEpicrisis] = useState({
    paciente: "",
    fecha_ingreso: "",
    fecha_alta: "",
    medico_tratante: "",
    especialidad: "",
    diagnostico_ingreso: "",
    diagnostico_egreso: "",
    procedimientos: "",
    evolucion: "",
    recomendaciones: "",
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Epicrisis Médica
          </h2>
          <p className="text-muted-foreground">
            Resumen médico de hospitalización y alta
          </p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nueva Epicrisis
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Imprimir
          </Button>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <Hospital className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Firmadas</p>
                <p className="text-2xl font-bold text-success">
                  {epicrisis.filter((e) => e.estado === "firmada").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Este Mes</p>
                <p className="text-2xl font-bold text-primary">
                  {epicrisis.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <FileText className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Borradores</p>
                <p className="text-2xl font-bold text-warning">
                  {epicrisis.filter((e) => e.estado === "borrador").length}
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
                  {epicrisis.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Formulario para nueva epicrisis */}
      <Card>
        <CardHeader>
          <CardTitle>Nueva Epicrisis Médica</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Información básica */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Paciente</label>
              <input
                type="text"
                className="w-full p-2 border border-border rounded-md bg-background"
                placeholder="Nombre del paciente"
                value={nuevaEpicrisis.paciente}
                onChange={(e) =>
                  setNuevaEpicrisis({
                    ...nuevaEpicrisis,
                    paciente: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Médico Tratante
              </label>
              <input
                type="text"
                className="w-full p-2 border border-border rounded-md bg-background"
                placeholder="Médico responsable"
                value={nuevaEpicrisis.medico_tratante}
                onChange={(e) =>
                  setNuevaEpicrisis({
                    ...nuevaEpicrisis,
                    medico_tratante: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Fecha de Ingreso
              </label>
              <input
                type="date"
                className="w-full p-2 border border-border rounded-md bg-background"
                value={nuevaEpicrisis.fecha_ingreso}
                onChange={(e) =>
                  setNuevaEpicrisis({
                    ...nuevaEpicrisis,
                    fecha_ingreso: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Fecha de Alta
              </label>
              <input
                type="date"
                className="w-full p-2 border border-border rounded-md bg-background"
                value={nuevaEpicrisis.fecha_alta}
                onChange={(e) =>
                  setNuevaEpicrisis({
                    ...nuevaEpicrisis,
                    fecha_alta: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Especialidad
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar especialidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="medicina-interna">
                    Medicina Interna
                  </SelectItem>
                  <SelectItem value="cardiologia">Cardiología</SelectItem>
                  <SelectItem value="cirugia">Cirugía</SelectItem>
                  <SelectItem value="pediatria">Pediatría</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Diagnósticos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Diagnóstico de Ingreso
              </label>
              <Textarea
                placeholder="Diagnóstico principal al ingreso..."
                className="min-h-[80px]"
                value={nuevaEpicrisis.diagnostico_ingreso}
                onChange={(e) =>
                  setNuevaEpicrisis({
                    ...nuevaEpicrisis,
                    diagnostico_ingreso: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Diagnóstico de Egreso
              </label>
              <Textarea
                placeholder="Diagnóstico al momento del alta..."
                className="min-h-[80px]"
                value={nuevaEpicrisis.diagnostico_egreso}
                onChange={(e) =>
                  setNuevaEpicrisis({
                    ...nuevaEpicrisis,
                    diagnostico_egreso: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* Evolución y procedimientos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Procedimientos Realizados
              </label>
              <Textarea
                placeholder="Listado de procedimientos y cirugías..."
                className="min-h-[100px]"
                value={nuevaEpicrisis.procedimientos}
                onChange={(e) =>
                  setNuevaEpicrisis({
                    ...nuevaEpicrisis,
                    procedimientos: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Evolución Clínica
              </label>
              <Textarea
                placeholder="Descripción de la evolución durante la hospitalización..."
                className="min-h-[100px]"
                value={nuevaEpicrisis.evolucion}
                onChange={(e) =>
                  setNuevaEpicrisis({
                    ...nuevaEpicrisis,
                    evolucion: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Recomendaciones al Alta
            </label>
            <Textarea
              placeholder="Indicaciones, medicamentos, controles y recomendaciones..."
              className="min-h-[100px]"
              value={nuevaEpicrisis.recomendaciones}
              onChange={(e) =>
                setNuevaEpicrisis({
                  ...nuevaEpicrisis,
                  recomendaciones: e.target.value,
                })
              }
            />
          </div>

          <div className="flex gap-2">
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Guardar Epicrisis
            </Button>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Vista Previa
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Exportar PDF
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Lista de epicrisis */}
      <Card>
        <CardHeader>
          <CardTitle>Epicrisis Médicas Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {epicrisis.map((epic) => (
              <div
                key={epic.id}
                className="border border-border rounded-lg p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">
                        {epic.paciente}
                      </h4>
                      <Badge className="bg-success/10 text-success border-success/20">
                        {epic.estado}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {epic.fecha_ingreso} - {epic.fecha_alta}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {epic.medico}
                      </span>
                      <Badge variant="outline">{epic.especialidad}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-primary">
                      Diagnóstico de Ingreso:
                    </p>
                    <p className="text-muted-foreground">
                      {epic.diagnostico_ingreso}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-success">
                      Diagnóstico de Egreso:
                    </p>
                    <p className="text-muted-foreground">
                      {epic.diagnostico_egreso}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
