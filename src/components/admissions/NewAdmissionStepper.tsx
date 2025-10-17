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
import { Textarea } from "../ui/textarea";
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
  fechaNacimiento: string;
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
  diagnosticoIngreso?: string;
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
      nombre: "ADELA MANRIQUE TOLA",
      documento: "78965412",
      fechaNacimiento: "1972-05-14",
      genero: "FEMENINO",
      tipoPaciente: "INSTITUCIONAL",
      celular: "70012345",
      contactoNombre: "MARIA MANRIQUE",
      contactoParentesco: "Hija",
      contactoCelular: "70056789",
      contactoEmail: "maria.manrique@example.com",
      contactoDireccion: "Av. Siempre Viva 742",
      alergias: "Penicilina, Ibuprofeno",
      antecedentes: "HTA controlada, DM2",
      mdrd: "60 ml/min/1.73m2",
      limitacionTerapeutica: "",
      fechaIngreso: "23 de agosto de 2025 08:30",
      razonAdmision: "Dolor abdominal agudo",
      diagnosticoIngreso: "Apendicitis aguda",
      doctor: "EVER LUIZAGA COCA",
      prioridad: "Nivel 2",
      especialidad: "Emergencia",
      piso: "2",
      habitacion: "204",
      cama: "12",
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
        return Boolean(
          v.nombre && v.fechaNacimiento && v.genero && v.tipoPaciente
        );
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
    const calculateAge = (birthIso: string) => {
      const today = new Date();
      const dob = new Date(birthIso);
      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
      return age;
    };
    const patient: Patient = {
      id: Date.now().toString(),
      nombre: values.nombre,
      edad: calculateAge(values.fechaNacimiento),
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
                  defaultValue={methods.getValues("nombre")}
                  {...methods.register("nombre", { required: true })}
                />
                <Input
                  placeholder="Documento (opcional)"
                  defaultValue={methods.getValues("documento")}
                  {...methods.register("documento")}
                />
                <Input
                  placeholder="Fecha de nacimiento"
                  type="date"
                  defaultValue={methods.getValues("fechaNacimiento")}
                  {...methods.register("fechaNacimiento", { required: true })}
                />
                <Select
                  value={methods.watch("genero")}
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
                  value={methods.watch("tipoPaciente")}
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
                <Input
                  placeholder="Celular"
                  defaultValue={methods.getValues("celular")}
                  {...methods.register("celular")}
                />
              </div>
            )}

            {steps[currentStep].key === "contacto" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Nombre de contacto"
                  defaultValue={methods.getValues("contactoNombre")}
                  {...methods.register("contactoNombre")}
                />
                <Input
                  placeholder="Parentesco"
                  defaultValue={methods.getValues("contactoParentesco")}
                  {...methods.register("contactoParentesco")}
                />
                <Input
                  placeholder="Celular de contacto"
                  defaultValue={methods.getValues("contactoCelular")}
                  {...methods.register("contactoCelular")}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  defaultValue={methods.getValues("contactoEmail")}
                  {...methods.register("contactoEmail")}
                />
                <Input
                  placeholder="Dirección"
                  className="md:col-span-2"
                  defaultValue={methods.getValues("contactoDireccion")}
                  {...methods.register("contactoDireccion")}
                />
              </div>
            )}

            {steps[currentStep].key === "antecedentes" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Alergias (separadas por coma)"
                  defaultValue={methods.getValues("alergias")}
                  {...methods.register("alergias")}
                />
                <Input
                  placeholder="MDRD"
                  defaultValue={methods.getValues("mdrd")}
                  {...methods.register("mdrd")}
                />
                <Input
                  placeholder="Limitación terapéutica (opcional)"
                  defaultValue={methods.getValues("limitacionTerapeutica")}
                  {...methods.register("limitacionTerapeutica")}
                />
                <Input
                  placeholder="Antecedentes relevantes"
                  className="md:col-span-2"
                  defaultValue={methods.getValues("antecedentes")}
                  {...methods.register("antecedentes")}
                />
              </div>
            )}

            {steps[currentStep].key === "internacion" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Fecha de ingreso (ej. 23 de agosto de 2025 08:30)"
                  defaultValue={methods.getValues("fechaIngreso")}
                  {...methods.register("fechaIngreso", { required: true })}
                />
                <Input
                  placeholder="Razón de admisión"
                  defaultValue={methods.getValues("razonAdmision")}
                  {...methods.register("razonAdmision", { required: true })}
                />
                <div className="md:col-span-2">
                  <Textarea
                    placeholder="Diagnóstico de ingreso"
                    className="min-h-[88px]"
                    defaultValue={methods.getValues("diagnosticoIngreso")}
                    {...methods.register("diagnosticoIngreso")}
                  />
                </div>
                <Input
                  placeholder="Doctor"
                  defaultValue={methods.getValues("doctor")}
                  {...methods.register("doctor", { required: true })}
                />
                <Select
                  value={methods.watch("prioridad")}
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
                  value={methods.watch("especialidad")}
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
                  defaultValue={methods.getValues("piso")}
                  {...methods.register("piso", { required: true })}
                />
                <Input
                  placeholder="Habitación"
                  type="number"
                  defaultValue={methods.getValues("habitacion")}
                  {...methods.register("habitacion", { required: true })}
                />
                <Input
                  placeholder="Cama"
                  type="number"
                  defaultValue={methods.getValues("cama")}
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
