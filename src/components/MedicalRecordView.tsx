import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
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
import { Textarea } from "./ui/textarea";

import { Pencil, Trash2, Plus, Check, Eye, ArrowRight } from "lucide-react";

export function MedicalRecordView() {
  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-gray-700">Especialidad</label>
              <Select defaultValue="medicina-interna">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="medicina-interna">
                    Medicina Interna
                  </SelectItem>
                  <SelectItem value="cardiologia">Cardiología</SelectItem>
                  <SelectItem value="neurologia">Neurología</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Tipo de nota</label>
              <Select defaultValue="hoja-blanco">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hoja-blanco">Hoja en blanco</SelectItem>
                  <SelectItem value="evolucion">Evolución</SelectItem>
                  <SelectItem value="ingreso">Ingreso</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Patient Anamnesis */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Nota de Evolucion</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-400">
              <div className="flex items-center gap-2 mb-3">
                <h4 className="font-medium text-green-900">Fecha:</h4>
                <span className="text-green-700">09/02/2025 - 08:15</span>
              </div>
              <div className="mb-3">
                <h4 className="font-medium text-green-900 mb-2">
                  Antecedentes personales:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Niega diabetes mellitus, hipertensión arterial, cardiopatías.
                  No refiere intervención quirúrgica previa. Menarquia a los 12
                  años, ciclos menstruales regulares cada 28 días, última
                  menstruación hace 15 días. No gestaciones previas. No hábitos
                  tóxicos. Medicación actual: ninguno. No alergias
                  medicamentosas conocidas.
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Pencil className="h-4 w-4 mr-1" />
                  Editar
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Eliminar
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Physical Examination */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Examen Físico</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Agregar nota médica
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sistema</TableHead>
                <TableHead>Normal</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">CONSTITUCIONAL</TableCell>
                <TableCell>
                  <Check className="h-5 w-5 text-green-600" />
                </TableCell>
                <TableCell>
                  Paciente consciente, orientado y cooperador. Facies de
                  malestar.
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4 text-blue-600" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">OJOS</TableCell>
                <TableCell>
                  <Check className="h-5 w-5 text-green-600" />
                </TableCell>
                <TableCell>
                  Párpados y conjuntivas normales, pupilas isocóricas reactivas
                  a la luz.
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4 text-blue-600" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">BUCOFARINGEO</TableCell>
                <TableCell>
                  <Check className="h-5 w-5 text-green-600" />
                </TableCell>
                <TableCell>
                  Mucosas húmedas, orofaringe sin lesiones, amígdalas no
                  hiperémicas.
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4 text-blue-600" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">CUELLO</TableCell>
                <TableCell>
                  <Check className="h-5 w-5 text-green-600" />
                </TableCell>
                <TableCell>
                  Móvil, sin adenopatías, tráquea centrada, tiroides no
                  palpable.
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4 text-blue-600" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">CARDIOVASCULAR</TableCell>
                <TableCell>
                  <Check className="h-5 w-5 text-green-600" />
                </TableCell>
                <TableCell>
                  Ruidos cardíacos rítmicos, sin soplos, pulsos periféricos
                  presentes.
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4 text-blue-600" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">PULMONAR</TableCell>
                <TableCell>
                  <Check className="h-5 w-5 text-green-600" />
                </TableCell>
                <TableCell>
                  Murmullo vesicular conservado, sin ruidos agregados.
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4 text-blue-600" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ABDOMEN</TableCell>
                <TableCell>
                  <Check className="h-5 w-5 text-green-600" />
                </TableCell>
                <TableCell>
                  Blando, depresible, no doloroso a la palpación, sin
                  visceromegalias.
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4 text-blue-600" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">GENITOURINARIO</TableCell>
                <TableCell>
                  <Check className="h-5 w-5 text-green-600" />
                </TableCell>
                <TableCell>
                  Sin evaluación específica en este momento.
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4 text-blue-600" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">EXTREMIDADES</TableCell>
                <TableCell>
                  <Check className="h-5 w-5 text-green-600" />
                </TableCell>
                <TableCell>
                  Sin edema, pulsos distales presentes, movilidad conservada.
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4 text-blue-600" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">PIEL</TableCell>
                <TableCell>
                  <Check className="h-5 w-5 text-green-600" />
                </TableCell>
                <TableCell>
                  Normo-hidratada, sin lesiones evidentes, no cianosis ni
                  ictericia.
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4 text-blue-600" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">NEUROLOGICO</TableCell>
                <TableCell>
                  <Check className="h-5 w-5 text-green-600" />
                </TableCell>
                <TableCell>
                  Orientado en tiempo, espacio y persona, funciones cognitivas
                  preservadas.
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4 text-blue-600" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Vital Signs */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Signos Vitales</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Agregar signo vital
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-1">
              <p className="text-gray-600">Temperatura</p>
              <p className="text-gray-900">1°C</p>
              <p className="text-gray-500">Hipotermia</p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-600">Glicemia Capilar</p>
              <p className="text-gray-900">2 mg/dL</p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-600">Presión Sistólica</p>
              <p className="text-gray-900">5 mmHg</p>
              <p className="text-gray-500">Hipertensión</p>
            </div>
            <div className="space-y-1">
              <p className="text-gray-600">Presión Diastólica</p>
              <p className="text-gray-900">6 mmHg</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medications */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Medicamentos</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Agregar medicamento
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Medicamento</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Frecuencia</TableHead>
                <TableHead>Duración</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Institución</TableHead>
                <TableHead>Dosificación</TableHead>
                <TableHead>Administración</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Paracetamol 500mg</TableCell>
                <TableCell>1 tableta</TableCell>
                <TableCell>Cada 8 horas</TableCell>
                <TableCell>7 días</TableCell>
                <TableCell>21 tabletas</TableCell>
                <TableCell>Hospital General</TableCell>
                <TableCell>500mg</TableCell>
                <TableCell>Oral</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4 text-green-600" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Amoxicilina 500mg</TableCell>
                <TableCell>1 cápsula</TableCell>
                <TableCell>Cada 12 horas</TableCell>
                <TableCell>10 días</TableCell>
                <TableCell>20 cápsulas</TableCell>
                <TableCell>Clínica Santa María</TableCell>
                <TableCell>500mg</TableCell>
                <TableCell>Oral</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4 text-green-600" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Omeprazol 20mg</TableCell>
                <TableCell>1 tableta</TableCell>
                <TableCell>Una vez al día</TableCell>
                <TableCell>30 días</TableCell>
                <TableCell>30 tabletas</TableCell>
                <TableCell>Centro Médico</TableCell>
                <TableCell>20mg</TableCell>
                <TableCell>Oral</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4 text-green-600" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Diclofenaco 75mg/3ml</TableCell>
                <TableCell>1 ampolla</TableCell>
                <TableCell>Cada 12 horas</TableCell>
                <TableCell>3 días</TableCell>
                <TableCell>6 ampollas</TableCell>
                <TableCell>Hospital General</TableCell>
                <TableCell>75mg</TableCell>
                <TableCell>Intramuscular</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4 text-green-600" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Laboratory */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Laboratorio</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Agregar laboratorio
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Dentro del Rango</TableHead>
                <TableHead>Fuera de Rango</TableHead>
                <TableHead>Referencia</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>HEMATOLOGÍA</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-8">Hemograma completo</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-8">WBC</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>4.00-10.00 10^9/L</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-8">NEUTROFILOS</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>50.0-70.0 %</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-8">LINFOCITOS</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>20.0-40.0 %</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-8">MONOCITOS</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>3.0-12.0 %</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="pl-8">EOSINÓFILOS</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>0.5-6.0 %</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Últimos Estudios de Imagenología */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Estudios de Imagenología</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Agregar Estudio
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Estudio</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Médico</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Radiografía de Tórax PA y Lateral
                </TableCell>
                <TableCell>2025-01-15</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Completado
                  </span>
                </TableCell>
                <TableCell>Dr. López</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4 text-blue-600" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Tomografía Computarizada de Abdomen
                </TableCell>
                <TableCell>2025-01-15</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Pendiente
                  </span>
                </TableCell>
                <TableCell>Dr. García</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4 text-blue-600" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Ecografía Abdominal
                </TableCell>
                <TableCell>2025-01-14</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Completado
                  </span>
                </TableCell>
                <TableCell>Dr. Martínez</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4 text-blue-600" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
