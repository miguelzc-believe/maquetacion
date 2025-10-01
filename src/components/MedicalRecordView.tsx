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

import { Pencil, Trash2, Plus } from "lucide-react";

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

      {/* Physical Examination */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Examen Físico</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Agregar nota médica
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="flex items-center gap-2 mb-3">
              <h4>Fecha del examen:</h4>
              <span>10/02/2025</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <h4>Paciente:</h4>
              <span>Juan Pérez López</span>
            </div>

            <h4 className="mb-2">Estado General:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Paciente consciente, orientado y cooperador.</li>
              <li>Facies de malestar.</li>
              <li>Piel normo-hidratada, sin lesiones evidentes.</li>
              <li>No cianosis ni ictericia.</li>
            </ul>
          </div>
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
                <TableCell>FLUOXI RETINA NASAL 120 EOSIS</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>lo que dise</TableCell>
                <TableCell>30</TableCell>
                <TableCell>ORAL</TableCell>
                <TableCell>ORAL</TableCell>
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
                <TableCell>GABAPENT. 30 MG CAPS - 100 CAPS</TableCell>
                <TableCell>-</TableCell>
                <TableCell>1 hora</TableCell>
                <TableCell>-</TableCell>
                <TableCell>leal</TableCell>
                <TableCell>-</TableCell>
                <TableCell>ORAL</TableCell>
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
                <TableCell>LORAZ IV 300 3.0 CAPE</TableCell>
                <TableCell>1</TableCell>
                <TableCell>8 horas</TableCell>
                <TableCell>4 dias</TableCell>
                <TableCell>12</TableCell>
                <TableCell>whal</TableCell>
                <TableCell>g=1</TableCell>
                <TableCell>ORAL</TableCell>
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
    </div>
  );
}
