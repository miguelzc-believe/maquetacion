import { useState } from "react";
import { MedicalRecordView } from "./components/MedicalRecordView";
import { ConsultationView } from "./components/ConsultationView";
import { OrdenesMedicas } from "./components/OrdenesMedicas";
import { AntecedentesMedicos } from "./components/AntecedentesMedicos";
import { EstudiosMedicos } from "./components/EstudiosMedicos";
import { CirugiasMedicas } from "./components/CirugiasMedicas";
import { TratamientosMedicos } from "./components/TratamientosMedicos";
import { NotasMedicas } from "./components/NotasMedicas";
import { NotasEnfermeria } from "./components/NotasEnfermeria";
import { EpicrisisMedica } from "./components/EpicrisisMedica";
import { Laboratorios } from "./components/Laboratorios";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { User, Menu } from "lucide-react";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { AlertCircle } from "lucide-react";
import { Badge } from "./components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

export default function App() {
  const [currentView, setCurrentView] = useState("ordenes-medicas");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary border-b border-medical-border sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0">
                <NavigationMenu
                  currentView={currentView}
                  setCurrentView={setCurrentView}
                />
              </SheetContent>
            </Sheet>
            <h1 className="text-primary-foreground font-semibold">
              Sistema Médico
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary-foreground" />
            <span className="text-primary-foreground">Dr. Jhon Doe</span>
          </div>
        </div>
      </header>
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
                    ADELA MANRIQUE TOLA
                  </h3>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    (47 años)
                  </Badge>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Género:</span>
                    <span className="font-medium text-foreground">
                      FEMENINO
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Celular:</span>
                    <span className="font-medium text-foreground">
                      59172271842
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Tipo de paciente:
                    </span>
                    <span className="font-medium">INSTITUCIONAL</span>
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
                      Apendicitis
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Fecha de ingreso:
                    </span>
                    <span className="font-medium text-foreground">
                      22 de agosto de 2025 14:34
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">MDRD:</span>
                    <span className="font-medium">0.00 mL/min/1.73m²</span>
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
                      Cama: 5, Piso: 1, Habit.: 1
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Limitación terapéutica:
                    </span>
                    <span className="font-medium text-foreground">
                      No reanimación cardiopulmonar (NRCP / DNR)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Doctor:</span>
                    <span className="font-medium">EVER LUIZAGA COCA</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start p-3 bg-destructive/5 border border-destructive/10 rounded-lg">
                <span className="text-muted-foreground font-medium">
                  Alergias:
                </span>
                <span className="font-medium text-foreground">
                  alergia al sol, Valvulopatías cardíacas
                </span>
              </div>
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

          {/* Allergies */}
        </CardContent>
      </Card>
      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:block w-64 bg-sidebar border-r border-sidebar-border min-h-[calc(100vh-57px)] sticky top-[57px]">
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
          {currentView === "notas-medicas" && <NotasMedicas />}
          {currentView === "notas-enfermeria" && <NotasEnfermeria />}
          {currentView === "epicrisis" && <EpicrisisMedica />}
          {currentView === "medical-record" && <MedicalRecordView />}
          {currentView === "consultation" && <ConsultationView />}
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
        { name: "Historial Médico", view: "medical-record", badge: null },
      ],
    },
    {
      id: "monitoreo",
      title: "Monitoreo",
      items: [
        { name: "Cirugías", view: "cirugias", badge: "2" },
        { name: "Consulta Actual", view: "consultation", badge: null },
      ],
    },
    {
      id: "tratamiento",
      title: "Tratamiento",
      items: [
        { name: "Tratamientos", view: "tratamientos", badge: "8" },
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
