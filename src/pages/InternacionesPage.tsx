import { InternacionesView } from "../components/InternacionesView";
import { useRouter } from "../contexts/RouterContext";
import { type Patient } from "../data/mockPatients";

export function InternacionesPage() {
  const { navigate } = useRouter();

  const handlePatientSelect = (patient: Patient) => {
    navigate("/paciente", {
      id: patient.id,
      nombre: patient.nombre,
    });
  };

  return (
    <div className="p-6">
      <InternacionesView onPatientSelect={handlePatientSelect} />
    </div>
  );
}
