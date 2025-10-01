import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Plus,
  Edit,
  Trash2,
  Calendar,
  User,
  Heart,
  Activity,
} from "lucide-react";
import { useState } from "react";

export function AntecedentesMedicos() {
  const [antecedentes] = useState({
    personales: [
      {
        id: 1,
        tipo: "Patológico",
        descripcion: "Diabetes Mellitus tipo 2",
        fecha: "2018-03-15",
        estado: "activo",
        gravedad: "moderada",
      },
      {
        id: 2,
        tipo: "Quirúrgico",
        descripcion: "Apendicectomía",
        fecha: "2015-08-22",
        estado: "resuelto",
        gravedad: "leve",
      },
    ],
    familiares: [
      {
        id: 1,
        familiar: "Padre",
        condicion: "Hipertensión Arterial",
        edad_diagnostico: 55,
        estado: "fallecido",
      },
      {
        id: 2,
        familiar: "Madre",
        condicion: "Diabetes tipo 2",
        edad_diagnostico: 60,
        estado: "activo",
      },
    ],
    alergias: [
      {
        id: 1,
        alergeno: "Penicilina",
        reaccion: "Erupción cutánea",
        gravedad: "moderada",
      },
      {
        id: 2,
        alergeno: "Mariscos",
        reaccion: "Anafilaxis",
        gravedad: "severa",
      },
    ],
  });

  // Estados para funcionalidades
  const [activeTab, setActiveTab] = useState("personales");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Función para agregar nuevo antecedente
  const handleAgregarAntecedente = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  // Función para editar antecedente
  const handleEditarAntecedente = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  // Función para eliminar antecedente
  const handleEliminarAntecedente = (id: number, tipo: string) => {
    if (confirm("¿Está seguro de eliminar este antecedente?")) {
      // Aquí iría la lógica para eliminar el antecedente
      console.log(`Eliminar antecedente ${id} de tipo ${tipo}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Antecedentes Médicos
          </h2>
          <p className="text-muted-foreground">
            Historial médico personal y familiar del paciente
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleAgregarAntecedente}>
            <Plus className="h-4 w-4 mr-2" />
            Agregar Antecedente
          </Button>
        </div>
      </div>

      {/* Resumen médico */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <Heart className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Patologías</p>
                <p className="text-2xl font-bold text-destructive">
                  {
                    antecedentes.personales.filter(
                      (a) => a.tipo === "Patológico"
                    ).length
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
                <User className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Familiares</p>
                <p className="text-2xl font-bold text-warning">
                  {antecedentes.familiares.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Activity className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Alergias</p>
                <p className="text-2xl font-bold text-secondary">
                  {antecedentes.alergias.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs de antecedentes */}
      <Tabs defaultValue="personales" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personales">Personales</TabsTrigger>
          <TabsTrigger value="familiares">Familiares</TabsTrigger>
          <TabsTrigger value="alergias">Alergias</TabsTrigger>
        </TabsList>

        {/* Antecedentes Personales */}
        <TabsContent value="personales" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Antecedentes Personales</CardTitle>
              <Button size="sm" onClick={handleAgregarAntecedente}>
                <Plus className="h-4 w-4 mr-1" />
                Agregar
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {antecedentes.personales.map((antecedente) => (
                  <div
                    key={antecedente.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          variant={
                            antecedente.tipo === "Patológico"
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {antecedente.tipo}
                        </Badge>
                        <Badge
                          variant={
                            antecedente.gravedad === "severa"
                              ? "destructive"
                              : "outline"
                          }
                        >
                          {antecedente.gravedad}
                        </Badge>
                      </div>
                      <p className="font-medium text-foreground">
                        {antecedente.descripcion}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {antecedente.fecha}
                        </span>
                        <Badge
                          variant={
                            antecedente.estado === "activo"
                              ? "default"
                              : "outline"
                          }
                        >
                          {antecedente.estado}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditarAntecedente(antecedente)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          handleEliminarAntecedente(
                            antecedente.id,
                            "personales"
                          )
                        }
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Antecedentes Familiares */}
        <TabsContent value="familiares" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Antecedentes Familiares</CardTitle>
              <Button size="sm" onClick={handleAgregarAntecedente}>
                <Plus className="h-4 w-4 mr-1" />
                Agregar
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {antecedentes.familiares.map((familiar) => (
                  <div
                    key={familiar.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge>Familiar</Badge>
                        <span className="font-medium text-primary">
                          {familiar.familiar}
                        </span>
                      </div>
                      <p className="font-medium text-foreground">
                        {familiar.condicion}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>
                          Edad diagnóstico: {familiar.edad_diagnostico} años
                        </span>
                        <Badge
                          variant={
                            familiar.estado === "activo" ? "default" : "outline"
                          }
                        >
                          {familiar.estado}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditarAntecedente(familiar)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          handleEliminarAntecedente(familiar.id, "familiares")
                        }
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Alergias */}
        <TabsContent value="alergias" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Alergias e Intolerancias</CardTitle>
              <Button size="sm" onClick={handleAgregarAntecedente}>
                <Plus className="h-4 w-4 mr-1" />
                Agregar
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {antecedentes.alergias.map((alergia) => (
                  <div
                    key={alergia.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          variant={
                            alergia.gravedad === "severa"
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {alergia.gravedad}
                        </Badge>
                      </div>
                      <p className="font-medium text-foreground">
                        {alergia.alergeno}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {alergia.reaccion}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditarAntecedente(alergia)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          handleEliminarAntecedente(alergia.id, "alergias")
                        }
                      >
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
