import React from "react";
import { RouterProvider, useRouter } from "./contexts/RouterContext";
import { MainLayout } from "./layouts/MainLayout";
import { InternacionesPage } from "./pages/InternacionesPage";
import { SolicitudesPage } from "./pages/SolicitudesPage";
import { AgendaCirugiaPage } from "./pages/AgendaCirugiaPage";
import { AgendaQuirofanoPage } from "./pages/AgendaQuirofanoPage";
import { PatientDetailPage } from "./pages/PatientDetailPage";
import NewAdmissionPage from "./pages/NewAdmissionPage";

function AppRoutes() {
  const { currentRoute } = useRouter();

  const renderPage = () => {
    switch (currentRoute.path) {
      case "/":
        return <InternacionesPage />;
      case "/solicitudes":
        return <SolicitudesPage />;
      case "/agenda-cirugia":
        return <AgendaCirugiaPage />;
      case "/agenda-quirofano":
        return <AgendaQuirofanoPage />;
      case "/ingresos/nuevo":
        return <NewAdmissionPage />;
      case "/paciente":
        return <PatientDetailPage />;
      default:
        return <InternacionesPage />;
    }
  };

  return <MainLayout>{renderPage()}</MainLayout>;
}

export default function App() {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  );
}
