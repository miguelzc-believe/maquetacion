import React from "react";
import { NewAdmissionStepper } from "../components/admissions/NewAdmissionStepper";
import { useRouter } from "../contexts/RouterContext";
import { type Patient } from "../data/mockPatients";
import { toast } from "sonner";

export default function NewAdmissionPage() {
  const { navigate } = useRouter();

  const handleSubmit = (patient: Patient) => {
    toast("Ingreso registrado", {
      description: `${patient.nombre} fue agregado correctamente`,
    });
    navigate("/");
  };

  return (
    <div className="p-6">
      <NewAdmissionStepper onSubmit={handleSubmit} mode="page" />
    </div>
  );
}
