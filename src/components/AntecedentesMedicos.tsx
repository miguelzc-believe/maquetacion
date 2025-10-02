import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Plus, Save, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

export function AntecedentesMedicos() {
  // Estados para los formularios
  const [antecedentes, setAntecedentes] = useState({
    familiares: "",
    quirurgicos: "",
    sociales: "",
    alergias: "",
    enfermedadesBase: "",
    fuma: "no",
    tipoSangre: "",
  });

  const [isEditing, setIsEditing] = useState({
    familiares: false,
    quirurgicos: false,
    sociales: false,
    alergias: false,
    enfermedadesBase: false,
  });

  // Función para manejar cambios en inputs
  const handleInputChange = (field: string, value: string) => {
    setAntecedentes((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Función para guardar campo
  const handleGuardarCampo = (field: string) => {
    setIsEditing((prev) => ({
      ...prev,
      [field]: false,
    }));
    alert(
      `Guardando ${field}: ${antecedentes[field as keyof typeof antecedentes]}`
    );
  };

  // Función para editar campo
  const handleEditarCampo = (field: string) => {
    setIsEditing((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Antecedentes</h2>
          <p className="text-muted-foreground">
            Información médica del paciente
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Antecedentes familiares */}
        <Card className="medical-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-foreground">
                Antecedentes familiares (ICD / CIE)
              </CardTitle>
              {!isEditing.familiares ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleEditarCampo("familiares")}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => handleGuardarCampo("familiares")}
                >
                  <Save className="h-4 w-4 mr-2" />
                  Guardar
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {!isEditing.familiares ? (
              <div className="min-h-[40px] p-2 bg-muted/20 rounded border-2 border-dashed border-muted-foreground/25">
                <p className="text-muted-foreground text-sm">
                  {antecedentes.familiares || "Presione 'Enter' para guardar"}
                </p>
              </div>
            ) : (
              <Textarea
                placeholder="Ingrese antecedentes familiares..."
                value={antecedentes.familiares}
                onChange={(e) =>
                  handleInputChange("familiares", e.target.value)
                }
                className="min-h-[80px]"
              />
            )}
          </CardContent>
        </Card>

        {/* Antecedentes quirúrgicos */}
        <Card className="medical-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-foreground">
                Antecedentes quirúrgicos
              </CardTitle>
              {!isEditing.quirurgicos ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleEditarCampo("quirurgicos")}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => handleGuardarCampo("quirurgicos")}
                >
                  <Save className="h-4 w-4 mr-2" />
                  Guardar
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {!isEditing.quirurgicos ? (
              <div className="min-h-[40px] p-2 bg-muted/20 rounded border-2 border-dashed border-muted-foreground/25">
                <p className="text-muted-foreground text-sm">
                  {antecedentes.quirurgicos || "Presione 'Enter' para guardar"}
                </p>
              </div>
            ) : (
              <Textarea
                placeholder="Ingrese antecedentes quirúrgicos..."
                value={antecedentes.quirurgicos}
                onChange={(e) =>
                  handleInputChange("quirurgicos", e.target.value)
                }
                className="min-h-[80px]"
              />
            )}
          </CardContent>
        </Card>

        {/* Antecedentes sociales */}
        <Card className="medical-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-foreground">
                Antecedentes sociales
              </CardTitle>
              {!isEditing.sociales ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleEditarCampo("sociales")}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => handleGuardarCampo("sociales")}
                >
                  <Save className="h-4 w-4 mr-2" />
                  Guardar
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {!isEditing.sociales ? (
              <div className="min-h-[40px] p-2 bg-muted/20 rounded border-2 border-dashed border-muted-foreground/25">
                <p className="text-muted-foreground text-sm">
                  {antecedentes.sociales || "Presione 'Enter' para guardar"}
                </p>
              </div>
            ) : (
              <Textarea
                placeholder="Ingrese antecedentes sociales..."
                value={antecedentes.sociales}
                onChange={(e) => handleInputChange("sociales", e.target.value)}
                className="min-h-[80px]"
              />
            )}
          </CardContent>
        </Card>

        {/* Alergias */}
        <Card className="medical-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-foreground">
                Alergias (ICD / CIE)
              </CardTitle>
              {!isEditing.alergias ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleEditarCampo("alergias")}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => handleGuardarCampo("alergias")}
                >
                  <Save className="h-4 w-4 mr-2" />
                  Guardar
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {!isEditing.alergias ? (
              <div className="min-h-[40px] p-2 bg-muted/20 rounded border-2 border-dashed border-muted-foreground/25">
                <p className="text-muted-foreground text-sm">
                  {antecedentes.alergias || "Presione 'Enter' para guardar"}
                </p>
              </div>
            ) : (
              <Textarea
                placeholder="Ingrese alergias..."
                value={antecedentes.alergias}
                onChange={(e) => handleInputChange("alergias", e.target.value)}
                className="min-h-[80px]"
              />
            )}
          </CardContent>
        </Card>

        {/* Enfermedades de base / Antecedentes médicos */}
        <Card className="medical-card">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-foreground">
                Enfermedades de base / antecedentes médicos (ICD / CIE)
              </CardTitle>
              {!isEditing.enfermedadesBase ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleEditarCampo("enfermedadesBase")}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => handleGuardarCampo("enfermedadesBase")}
                >
                  <Save className="h-4 w-4 mr-2" />
                  Guardar
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {!isEditing.enfermedadesBase ? (
              <div className="min-h-[40px] p-2 bg-muted/20 rounded border-2 border-dashed border-muted-foreground/25">
                <p className="text-muted-foreground text-sm">
                  {antecedentes.enfermedadesBase ||
                    "Presione 'Enter' para guardar"}
                </p>
              </div>
            ) : (
              <Textarea
                placeholder="Ingrese enfermedades de base..."
                value={antecedentes.enfermedadesBase}
                onChange={(e) =>
                  handleInputChange("enfermedadesBase", e.target.value)
                }
                className="min-h-[80px]"
              />
            )}
          </CardContent>
        </Card>

        <Separator className="my-6" />

        {/* Hábitos y características físicas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ¿El paciente fuma? */}
          <Card className="medical-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-foreground">
                ¿El paciente fuma?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={antecedentes.fuma}
                onValueChange={(value: string) =>
                  handleInputChange("fuma", value)
                }
                className="flex flex-row gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no-fuma" />
                  <Label htmlFor="no-fuma" className="text-foreground">
                    No, fuma
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="si" id="si-fuma" />
                  <Label htmlFor="si-fuma" className="text-foreground">
                    Sí, fuma
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Tipo de sangre */}
          <Card className="medical-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-foreground">
                Tipo de sangre
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select
                value={antecedentes.tipoSangre}
                onValueChange={(value: string) =>
                  handleInputChange("tipoSangre", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar tipo de sangre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a+">A+</SelectItem>
                  <SelectItem value="a-">A-</SelectItem>
                  <SelectItem value="b+">B+</SelectItem>
                  <SelectItem value="b-">B-</SelectItem>
                  <SelectItem value="ab+">AB+</SelectItem>
                  <SelectItem value="ab-">AB-</SelectItem>
                  <SelectItem value="o+">O+</SelectItem>
                  <SelectItem value="o-">O-</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {/* Información adicional */}
        <Card className="medical-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Última actualización: 15/01/2025 10:30</span>
              <span>Médico responsable: Dr. García López</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
