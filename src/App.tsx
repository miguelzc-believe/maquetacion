import { useState } from "react";
import { InternacionesView } from "./components/InternacionesView";
import { PatientHistoryView } from "./components/PatientHistoryView";
import { InternacionesSidebar } from "./components/InternacionesSidebar";
import { User, Menu, ArrowLeft } from "lucide-react";
import { Button } from "./components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { getPatientById, type Patient } from "./data/mockPatients";

export default function App() {
  const [currentView, setCurrentView] = useState("internaciones");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [currentRoute, setCurrentRoute] = useState<"list" | "patient">("list");

  const isPatientRoute = currentRoute === "patient";
  const patient = selectedPatient;

  const handlePatientSelect = (patient: Patient) => {
    setSelectedPatient(patient);
    setCurrentRoute("patient");
  };

  const handleBackToList = () => {
    setCurrentRoute("list");
    setSelectedPatient(null);
  };

  const handleViewChange = (view: string) => {
    setCurrentView(view);
    if (view === "internaciones") {
      setCurrentRoute("list");
      setSelectedPatient(null);
    }
  };

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
                <InternacionesSidebar />
              </SheetContent>
            </Sheet>
            <div className="flex items-center gap-2">
              {isPatientRoute && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBackToList}
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Volver
                </Button>
              )}
              <h1 className="text-primary-foreground font-semibold">
                {isPatientRoute && patient
                  ? `Historia Clínica - ${patient.nombre}`
                  : "Sistema Médico"}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary-foreground" />
            <span className="text-primary-foreground">Dr. Jhon Doe</span>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1">
        {currentRoute === "list" && (
          <div className="flex">
            {/* Sidebar - Desktop */}
            <aside className="hidden md:block w-64 bg-sidebar border-r border-sidebar-border min-h-[calc(100vh-57px)] sticky top-[57px]">
              <InternacionesSidebar />
            </aside>
            {/* Main Content */}
            <div className="flex-1 p-6 max-w-7xl mx-auto w-full bg-background">
              <InternacionesView onPatientSelect={handlePatientSelect} />
            </div>
          </div>
        )}
        {currentRoute === "patient" && selectedPatient && (
          <PatientHistoryView patient={selectedPatient} />
        )}
      </main>
    </div>
  );
}
