import { useState } from "react";
import { MedicalRecordView } from "./components/MedicalRecordView";
import { ConsultationView } from "./components/ConsultationView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { User, Menu } from "lucide-react";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { AlertCircle } from "lucide-react";
import { Badge } from "./components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

export default function App() {
  const [currentView, setCurrentView] = useState("medical-record");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
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
            <h1 className="text-gray-900">Sistema Médico</h1>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-gray-600" />
            <span className="text-gray-700">Dr. Jhon Doe</span>
          </div>
        </div>
      </header>
      {/* Patient Background */}
      <Card>
        <CardHeader>
          <CardTitle>Antecedentes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Patient Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg text-gray-900">
                    ADELA MANRIQUE TOLA
                  </h3>
                  <Badge variant="secondary">(47 años)</Badge>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Género:</span>
                    <span className="font-medium">FEMENINO</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Celular:</span>
                    <span className="font-medium">59172271842</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tipo de paciente:</span>
                    <span className="font-medium">INSTITUCIONAL</span>
                  </div>
                </div>
              </div>

              {/* Admission Info */}
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">
                  Información de Admisión
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Razón de admisión:</span>
                    <span className="font-medium">Apendicitis</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fecha de ingreso:</span>
                    <span className="font-medium">
                      22 de agosto de 2025 14:34
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">MDRD:</span>
                    <span className="font-medium">0.00 mL/min/1.73m²</span>
                  </div>
                </div>
              </div>

              {/* Location & Treatment */}
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">
                  Ubicación y Tratamiento
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Localización:</span>
                    <span className="font-medium">
                      Cama: 5, Piso: 1, Habit.: 1
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Limitación terapéutica:
                    </span>
                    <span className="font-medium">
                      No reanimación cardiopulmonar (NRCP / DNR)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Doctor:</span>
                    <span className="font-medium">EVER LUIZAGA COCA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Allergies */}
            <div className="mt-4 pt-4 border-t border-blue-200">
              <div className="flex justify-between items-start">
                <span className="text-gray-600">Alergias:</span>
                <span className="font-medium">
                  alergia al sol, Valvulopatías cardíacas
                </span>
              </div>
            </div>

            {/* Warning Note */}
            <div className="mt-4 pt-4 border-t border-blue-200">
              <div className="flex items-center gap-2 text-amber-700 bg-amber-50 p-3 rounded-md">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm font-medium">
                  No está registrado el resultado del laboratorio de creatinina
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:block w-64 bg-white border-r min-h-[calc(100vh-57px)] sticky top-[57px]">
          <NavigationMenu
            currentView={currentView}
            setCurrentView={setCurrentView}
          />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
          <Tabs
            value={currentView}
            onValueChange={setCurrentView}
            className="w-full"
          >
            <TabsList className="mb-6">
              <TabsTrigger value="medical-record">Historial Médico</TabsTrigger>
              <TabsTrigger value="consultation">Consulta Actual</TabsTrigger>
            </TabsList>

            <TabsContent value="medical-record" className="mt-0">
              <MedicalRecordView />
            </TabsContent>

            <TabsContent value="consultation" className="mt-0">
              <ConsultationView />
            </TabsContent>
          </Tabs>
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
      id: "general",
      title: "Información General",
      items: ["Órdenes médicas", "Antecedentes"],
    },
    {
      id: "diagnostics",
      title: "Diagnóstico",
      items: ["Órdenes médicas", "Estudios"],
    },
    {
      id: "monitoring",
      title: "Monitoreo",
      items: ["Cirugías", "Signos vitales"],
    },
    {
      id: "treatment",
      title: "Tratamiento",
      items: [
        "Medicamentos",
        "Tratamientos",
        "Notas médicas",
        "Notas de enfermería",
        "Epicrisis",
      ],
    },
  ];

  return (
    <nav className="p-4 space-y-6">
      {sections.map((section) => (
        <div key={section.id}>
          <h3 className="text-gray-500 mb-2 uppercase tracking-wider">
            {section.title}
          </h3>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item}>
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 text-gray-700 transition-colors">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
