export interface Solicitud {
  id: string;
  pacienteNombre: string;
  pacienteId: string;
  motivo: string;
  medicoSolicitante: string;
  medicoRevisor?: string;
  estado: "Pendiente" | "En Revisión" | "Aprobada" | "Rechazada";
  prioridad: "Alta" | "Media" | "Baja";
  fechaSolicitud: string;
  fechaRevision?: string;
  especialidad: string;
  observaciones?: string;
}

export const mockSolicitudes: Solicitud[] = [
  {
    id: "SOL-001",
    pacienteNombre: "ADELA MANRIQUE TOLA",
    pacienteId: "1",
    motivo: "Interconsulta con cardiología",
    medicoSolicitante: "EVER LUIZAGA COCA",
    estado: "Pendiente",
    prioridad: "Alta",
    fechaSolicitud: "23 de agosto de 2025 08:30",
    especialidad: "Cardiología",
    observaciones: "Paciente con antecedentes de valvulopatías cardíacas",
  },
  {
    id: "SOL-002",
    pacienteNombre: "CARLOS MENDIETA RODRIGUEZ",
    pacienteId: "2",
    motivo: "Evaluación pre-quirúrgica",
    medicoSolicitante: "MARIA GONZALEZ LOPEZ",
    medicoRevisor: "PEDRO RAMIREZ TORRES",
    estado: "En Revisión",
    prioridad: "Alta",
    fechaSolicitud: "23 de agosto de 2025 10:15",
    fechaRevision: "23 de agosto de 2025 14:20",
    especialidad: "Anestesiología",
  },
  {
    id: "SOL-003",
    pacienteNombre: "ANA PATRICIA VARGAS",
    pacienteId: "3",
    motivo: "Rehabilitación post-operatoria",
    medicoSolicitante: "JOSE MARTINEZ SILVA",
    medicoRevisor: "CAROLINA FERNANDEZ",
    estado: "Aprobada",
    prioridad: "Media",
    fechaSolicitud: "22 de agosto de 2025 16:45",
    fechaRevision: "23 de agosto de 2025 09:00",
    especialidad: "Fisioterapia",
  },
  {
    id: "SOL-004",
    pacienteNombre: "ROBERTO SANTOS MAMANI",
    pacienteId: "4",
    motivo: "Evaluación nutricional",
    medicoSolicitante: "CAROLINA FERNANDEZ",
    estado: "Pendiente",
    prioridad: "Baja",
    fechaSolicitud: "24 de agosto de 2025 13:20",
    especialidad: "Nutrición",
  },
  {
    id: "SOL-005",
    pacienteNombre: "ELENA QUISPE CONDORI",
    pacienteId: "5",
    motivo: "Estudios de imagen adicionales",
    medicoSolicitante: "PEDRO RAMIREZ TORRES",
    medicoRevisor: "EVER LUIZAGA COCA",
    estado: "Rechazada",
    prioridad: "Media",
    fechaSolicitud: "23 de agosto de 2025 11:30",
    fechaRevision: "24 de agosto de 2025 08:15",
    especialidad: "Radiología",
    observaciones: "No cumple criterios para estudio solicitado",
  },
  {
    id: "SOL-006",
    pacienteNombre: "MIGUEL ANGEL FLORES",
    pacienteId: "6",
    motivo: "Interconsulta con psiquiatría",
    medicoSolicitante: "CAROLINA FERNANDEZ",
    estado: "Pendiente",
    prioridad: "Media",
    fechaSolicitud: "24 de agosto de 2025 15:40",
    especialidad: "Psiquiatría",
  },
  {
    id: "SOL-007",
    pacienteNombre: "SILVIA RODRIGUEZ CASTRO",
    pacienteId: "7",
    motivo: "Evaluación de dolor crónico",
    medicoSolicitante: "JOSE MARTINEZ SILVA",
    medicoRevisor: "MARIA GONZALEZ LOPEZ",
    estado: "En Revisión",
    prioridad: "Alta",
    fechaSolicitud: "25 de agosto de 2025 20:00",
    fechaRevision: "26 de agosto de 2025 07:30",
    especialidad: "Clínica del Dolor",
  },
  {
    id: "SOL-008",
    pacienteNombre: "ANTONIO GUTIERREZ MAMANI",
    pacienteId: "8",
    motivo: "Seguimiento cardiológico",
    medicoSolicitante: "MARIA GONZALEZ LOPEZ",
    estado: "Pendiente",
    prioridad: "Media",
    fechaSolicitud: "26 de agosto de 2025 09:15",
    especialidad: "Cardiología",
  },
];

export const getSolicitudById = (id: string): Solicitud | undefined => {
  return mockSolicitudes.find((solicitud) => solicitud.id === id);
};

export const getSolicitudesByEstado = (estado: string): Solicitud[] => {
  if (estado === "Todas") {
    return mockSolicitudes;
  }
  return mockSolicitudes.filter((solicitud) => solicitud.estado === estado);
};
