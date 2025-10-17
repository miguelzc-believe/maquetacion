import React, { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { type Patient } from "../../data/mockPatients";

type StepKey = "paciente" | "contacto" | "antecedentes" | "internacion";

export interface NewAdmissionStepperProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSubmit: (patient: Patient) => void;
  mode?: "sheet" | "page";
}

interface FormValues {
  // Paso 1 - Paciente
  nombre: string;
  documento?: string;
  edad: number | string;
  genero: "MASCULINO" | "FEMENINO" | "";
  tipoPaciente: "INSTITUCIONAL" | "PARTICULAR" | "";
  celular: string;
  // Paso 2 - Contacto
  contactoNombre?: string;
  contactoParentesco?: string;
  contactoCelular?: string;
  contactoEmail?: string;
  contactoDireccion?: string;
  // Paso 3 - Antecedentes
  alergias?: string;
  antecedentes?: string;
  mdrd?: string;
  limitacionTerapeutica?: string;
  // Paso 4 - Internación
  fechaIngreso: string;
  razonAdmision: string;
  doctor: string;
  prioridad: "Nivel 1" | "Nivel 2" | "Nivel 3" | "";
  especialidad:
    | "Emergencia"
    | "Cardiología"
    | "Traumatología"
    | "Gastroenterología"
    | "Medicina Interna"
    | "";
  piso: string;
  habitacion: string;
  cama: string;
}

const steps: { key: StepKey; label: string }[] = [
  { key: "paciente", label: "Información del paciente" },
  { key: "contacto", label: "Información de contacto" },
  { key: "antecedentes", label: "Antecedentes" },
  { key: "internacion", label: "Información de internación" },
];

export function NewAdmissionStepper({
  open = true,
  onOpenChange,
  onSubmit,
  mode = "sheet",
}: NewAdmissionStepperProps) {
  const methods = useForm<FormValues>({
    defaultValues: {
      nombre: "",
      documento: "",
      edad: "",
      genero: "",
      tipoPaciente: "",
      celular: "",
      contactoNombre: "",
      contactoParentesco: "",
      contactoCelular: "",
      contactoEmail: "",
      contactoDireccion: "",
      alergias: "",
      antecedentes: "",
      mdrd: "",
      limitacionTerapeutica: "",
      fechaIngreso: "",
      razonAdmision: "",
      doctor: "",
      prioridad: "",
      especialidad: "",
      piso: "",
      habitacion: "",
      cama: "",
    },
    mode: "onChange",
  });

  const [currentStep, setCurrentStep] = useState<number>(0);
  const isLast = currentStep === steps.length - 1;
  const isFirst = currentStep === 0;

  const canContinue = useMemo(() => {
    const v = methods.getValues();
    switch (steps[currentStep].key) {
      case "paciente":
        return Boolean(v.nombre && v.edad && v.genero && v.tipoPaciente);
      case "internacion":
        return Boolean(
          v.fechaIngreso &&
            v.razonAdmision &&
            v.doctor &&
            v.prioridad &&
            v.especialidad &&
            v.piso &&
            v.habitacion &&
            v.cama
        );
      default:
        return true;
    }
  }, [currentStep, methods]);

  const handleNext = () =>
    setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const handlePrev = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const handleFinish = methods.handleSubmit((values) => {
    const patient: Patient = {
      id: Date.now().toString(),
      nombre: values.nombre,
      edad: Number(values.edad) || 0,
      genero: (values.genero as "MASCULINO" | "FEMENINO") || "MASCULINO",
      celular: values.celular || "",
      tipoPaciente:
        (values.tipoPaciente as "INSTITUCIONAL" | "PARTICULAR") ||
        "INSTITUCIONAL",
      fechaIngreso: values.fechaIngreso,
      razonAdmision: values.razonAdmision,
      doctor: values.doctor,
      prioridad:
        (values.prioridad as "Nivel 1" | "Nivel 2" | "Nivel 3") || "Nivel 3",
      ubicacion: {
        cama: Number(values.cama) || 0,
        piso: Number(values.piso) || 0,
        habitacion: Number(values.habitacion) || 0,
      },
      especialidad:
        (values.especialidad as Patient["especialidad"]) || "Emergencia",
      alergias: values.alergias
        ? values.alergias
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
        : [],
      mdrd: values.mdrd || "",
      limitacionTerapeutica: values.limitacionTerapeutica || undefined,
    };
    onSubmit(patient);
    if (onOpenChange) onOpenChange(false);
    setCurrentStep(0);
    methods.reset();
  });

  const header = (
    <div className="px-6 pt-6 pb-3 border-b">
      <h2 className="text-lg font-semibold">Registrar nuevo ingreso</h2>
    </div>
  );

  const content = (
    <FormProvider {...methods}>
      <div className="px-6 py-4 space-y-4">
        {/* Stepper header */}
        <Tabs value={steps[currentStep].key} className="w-full">
          <TabsList className="inline-flex w-full items-center justify-between overflow-x-auto rounded-md bg-muted p-1 text-muted-foreground">
            {steps.map((s, idx) => (
              <TabsTrigger
                key={s.key}
                value={s.key}
                onClick={() => setCurrentStep(idx)}
                className="flex-1"
              >
                {idx + 1}. {s.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Step content */}
        <Card>
          <CardContent className="pt-6">
            {steps[currentStep].key === "paciente" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Nombre completo"
                  {...methods.register("nombre", { required: true })}
                />
                <Input
                  placeholder="Documento (opcional)"
                  {...methods.register("documento")}
                />
                <Input
                  placeholder="Edad"
                  type="number"
                  {...methods.register("edad", { required: true })}
                />
                <Select
                  onValueChange={(v) => methods.setValue("genero", v as any)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Género" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MASCULINO">Masculino</SelectItem>
                    <SelectItem value="FEMENINO">Femenino</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  onValueChange={(v) =>
                    methods.setValue("tipoPaciente", v as any)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de paciente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="INSTITUCIONAL">Institucional</SelectItem>
                    <SelectItem value="PARTICULAR">Particular</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Celular" {...methods.register("celular")} />
              </div>
            )}

            {steps[currentStep].key === "contacto" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Nombre de contacto"
                  {...methods.register("contactoNombre")}
                />
                <Input
                  placeholder="Parentesco"
                  {...methods.register("contactoParentesco")}
                />
                <Input
                  placeholder="Celular de contacto"
                  {...methods.register("contactoCelular")}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  {...methods.register("contactoEmail")}
                />
                <Input
                  placeholder="Dirección"
                  className="md:col-span-2"
                  {...methods.register("contactoDireccion")}
                />
              </div>
            )}

            {steps[currentStep].key === "antecedentes" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Alergias (separadas por coma)"
                  {...methods.register("alergias")}
                />
                <Input placeholder="MDRD" {...methods.register("mdrd")} />
                <Input
                  placeholder="Limitación terapéutica (opcional)"
                  {...methods.register("limitacionTerapeutica")}
                />
                <Input
                  placeholder="Antecedentes relevantes"
                  className="md:col-span-2"
                  {...methods.register("antecedentes")}
                />
              </div>
            )}

            {steps[currentStep].key === "internacion" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Fecha de ingreso (ej. 23 de agosto de 2025 08:30)"
                  {...methods.register("fechaIngreso", { required: true })}
                />
                <Input
                  placeholder="Razón de admisión"
                  {...methods.register("razonAdmision", { required: true })}
                />
                <Input
                  placeholder="Doctor"
                  {...methods.register("doctor", { required: true })}
                />
                <Select
                  onValueChange={(v) => methods.setValue("prioridad", v as any)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Prioridad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Nivel 1">Nivel 1</SelectItem>
                    <SelectItem value="Nivel 2">Nivel 2</SelectItem>
                    <SelectItem value="Nivel 3">Nivel 3</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  onValueChange={(v) =>
                    methods.setValue("especialidad", v as any)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Especialidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Emergencia">Emergencia</SelectItem>
                    <SelectItem value="Cardiología">Cardiología</SelectItem>
                    <SelectItem value="Traumatología">Traumatología</SelectItem>
                    <SelectItem value="Gastroenterología">
                      Gastroenterología
                    </SelectItem>
                    <SelectItem value="Medicina Interna">
                      Medicina Interna
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Piso"
                  type="number"
                  {...methods.register("piso", { required: true })}
                />
                <Input
                  placeholder="Habitación"
                  type="number"
                  {...methods.register("habitacion", { required: true })}
                />
                <Input
                  placeholder="Cama"
                  type="number"
                  {...methods.register("cama", { required: true })}
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </FormProvider>
  );

  const footer = (
    <div className="sticky bottom-0 bg-background border-t px-6 py-3 flex items-center justify-between">
      <Button
        variant="ghost"
        onClick={() => {
          if (onOpenChange) onOpenChange(false);
          if (mode === "page") window.history.back();
        }}
      >
        Cancelar
      </Button>
      <div className="space-x-2">
        <Button variant="outline" onClick={handlePrev} disabled={isFirst}>
          Atrás
        </Button>
        {!isLast && (
          <Button onClick={handleNext} disabled={!canContinue}>
            Siguiente
          </Button>
        )}
        {isLast && (
          <Button onClick={handleFinish} disabled={!canContinue}>
            Guardar ingreso
          </Button>
        )}
      </div>
    </div>
  );

  if (mode === "page") {
    return (
      <div className="max-w-5xl mx-auto w-full">
        {header}
        {content}
        {footer}
      </div>
    );
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[720px] max-w-[100vw] p-0">
        <SheetHeader>{header}</SheetHeader>
        {content}
        {footer}
      </SheetContent>
    </Sheet>
  );
}
