import { useState } from "react";
import { MedicalRecordView } from "./MedicalRecordView";
import { OrdenesMedicas } from "./OrdenesMedicas";
import { AntecedentesMedicos } from "./AntecedentesMedicos";
import { EstudiosMedicos } from "./EstudiosMedicos";
import { CirugiasMedicas } from "./CirugiasMedicas";
import { TratamientosMedicos } from "./TratamientosMedicos";
import { NotasMedicas } from "./NotasMedicas";
import { NotasEnfermeria } from "./NotasEnfermeria";
import { EpicrisisMedica } from "./EpicrisisMedica";
import { Laboratorios } from "./Laboratorios";
import { type Patient } from "../data/mockPatients";
import { AlertCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface PatientHistoryViewProps {
  patient: Patient;
}

export function PatientHistoryView({ patient }: PatientHistoryViewProps) {
  const [currentView, setCurrentView] = useState("medical-record");

  return (
    <div className="space-y-6">
      {/* Patient Background */}
      <Card className="bg-card border border-border">
        <CardHeader className="bg-muted/50">
          <CardTitle className="text-foreground">Antecedentes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Patient Info */}
              <div className="space-y-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg text-foreground">
                    {patient.nombre}
                  </h3>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    ({patient.edad} años)
                  </Badge>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Género:</span>
                    <span className="font-medium text-foreground">
                      {patient.genero}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Celular:</span>
                    <span className="font-medium text-foreground">
                      {patient.celular}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Tipo de paciente:
                    </span>
                    <span className="font-medium">{patient.tipoPaciente}</span>
                  </div>
                </div>
              </div>

              {/* Admission Info */}
              <div className="space-y-3 p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                <h4 className="font-semibold text-foreground">
                  Información de Admisión
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Razón de admisión:
                    </span>
                    <span className="font-medium text-foreground">
                      {patient.razonAdmision}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Fecha de ingreso:
                    </span>
                    <span className="font-medium text-foreground">
                      {patient.fechaIngreso}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">MDRD:</span>
                    <span className="font-medium">{patient.mdrd}</span>
                  </div>
                </div>
              </div>

              {/* Location & Treatment */}
              <div className="space-y-3 p-4 bg-accent/30 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-foreground">
                  Ubicación y Tratamiento
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Localización:</span>
                    <span className="font-medium text-foreground">
                      Cama: {patient.ubicacion.cama}, Piso:{" "}
                      {patient.ubicacion.piso}, Habit.:{" "}
                      {patient.ubicacion.habitacion}
                    </span>
                  </div>
                  {patient.limitacionTerapeutica && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Limitación terapéutica:
                      </span>
                      <span className="font-medium text-foreground">
                        {patient.limitacionTerapeutica}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Doctor:</span>
                    <span className="font-medium">{patient.doctor}</span>
                  </div>
                </div>
              </div>
              {patient.alergias.length > 0 && (
                <div className="flex justify-between items-start p-3 bg-destructive/5 border border-destructive/10 rounded-lg">
                  <span className="text-muted-foreground font-medium">
                    Alergias:
                  </span>
                  <span className="font-medium text-foreground">
                    {patient.alergias.join(", ")}
                  </span>
                </div>
              )}
            </div>
            <div className="space-y-3 p-4 bg-accent/30 rounded-lg border border-accent/20">
              {/* Warning Note */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-3 text-warning-foreground bg-warning/10 border border-warning/20 p-4 rounded-lg shadow-sm">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-warning" />
                  <span className="text-sm font-medium">
                    No está registrado el resultado del laboratorio de
                    creatinina
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content with Sidebar */}
      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:block w-64 bg-sidebar border-r border-sidebar-border min-h-[calc(100vh-200px)] sticky top-0">
          <NavigationMenu
            currentView={currentView}
            setCurrentView={setCurrentView}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 max-w-7xl mx-auto w-full bg-background">
          {currentView === "ordenes-medicas" && <OrdenesMedicas />}
          {currentView === "antecedentes" && <AntecedentesMedicos />}
          {currentView === "estudios" && <EstudiosMedicos />}
          {currentView === "laboratorios" && <Laboratorios />}
          {currentView === "cirugias" && <CirugiasMedicas />}
          {currentView === "tratamientos" && <TratamientosMedicos />}
          {currentView === "notas-medicas" && (
            <NotasMedicas setCurrentView={setCurrentView} />
          )}
          {currentView === "notas-enfermeria" && (
            <NotasEnfermeria setCurrentView={setCurrentView} />
          )}
          {currentView === "epicrisis" && <EpicrisisMedica />}
          {currentView === "medical-record" && <MedicalRecordView />}
        </main>
      </div>
    </div>
  );
}

function NavigationMenu({
  currentView,
  setCurrentView,
}: {
  currentView: string;
  setCurrentView: (view: string) => void;
}) {
  const sections = [
    {
      id: "ordenes",
      title: "Órdenes Médicas",
      items: [
        { name: "Órdenes médicas", view: "ordenes-medicas", badge: "12" },
        { name: "Antecedentes", view: "antecedentes", badge: "3" },
      ],
    },
    {
      id: "diagnostico",
      title: "Diagnóstico",
      items: [
        { name: "Estudios", view: "estudios", badge: "5" },
        { name: "Laboratorios", view: "laboratorios", badge: "8" },
        { name: "Medicamentos", view: "tratamientos", badge: "8" },
      ],
    },
    {
      id: "monitoreo",
      title: "Monitoreo",
      items: [{ name: "Cirugías", view: "cirugias", badge: "2" }],
    },
    {
      id: "tratamiento",
      title: "Tratamiento",
      items: [
        { name: "Notas médicas", view: "notas-medicas", badge: "15" },
        { name: "Notas de enfermería", view: "notas-enfermeria", badge: "7" },
        { name: "Epicrisis", view: "epicrisis", badge: "1" },
      ],
    },
  ];

  return (
    <nav className="p-4 space-y-6">
      {sections.map((section) => (
        <div key={section.id}>
          <h3 className="text-sidebar-foreground mb-2 uppercase tracking-wider font-semibold">
            {section.title}
          </h3>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setCurrentView(item.view)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center justify-between ${
                    currentView === item.view
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
