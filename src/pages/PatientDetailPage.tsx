import { PatientHistoryView } from "../components/PatientHistoryView";
import { useRouter } from "../contexts/RouterContext";
import { getPatientById } from "../data/mockPatients";
import { AlertCircle } from "lucide-react";

export function PatientDetailPage() {
  const { currentRoute } = useRouter();

  const patientId = currentRoute.params?.id;
  const patient = patientId ? getPatientById(patientId) : null;

  if (!patient) {
    return (
      <div className="flex items-center justify-center h-64 p-6">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-muted-foreground">
            Paciente no encontrado
          </h2>
          <p className="text-muted-foreground mt-2">
            El paciente con ID {patientId} no existe en la base de datos.
          </p>
        </div>
      </div>
    );
  }

  return <PatientHistoryView patient={patient} />;
}
