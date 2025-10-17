export interface Cirugia {
  id: string;
  pacienteNombre: string;
  pacienteId: string;
  tipoCirugia: string;
  cirujano: string;
  anestesiologo?: string;
  fecha: string;
  horaInicio: string;
  duracionEstimada: string;
  quirofano: string;
  estado: "Programada" | "En Curso" | "Completada" | "Cancelada" | "Postergada";
  prioridad: "Urgente" | "Electiva";
  observaciones?: string;
}

export const mockCirugias: Cirugia[] = [
  {
    id: "CIR-001",
    pacienteNombre: "ADELA MANRIQUE TOLA",
    pacienteId: "1",
    tipoCirugia: "Apendicectomía Laparoscópica",
    cirujano: "EVER LUIZAGA COCA",
    anestesiologo: "MARIA FERNANDEZ LOPEZ",
    fecha: "24 de agosto de 2025",
    horaInicio: "08:00",
    duracionEstimada: "2 horas",
    quirofano: "Q1",
    estado: "Programada",
    prioridad: "Urgente",
  },
  {
    id: "CIR-002",
    pacienteNombre: "CARLOS MENDIETA RODRIGUEZ",
    pacienteId: "2",
    tipoCirugia: "Revascularización Miocárdica",
    cirujano: "MARIA GONZALEZ LOPEZ",
    anestesiologo: "PEDRO RAMIREZ TORRES",
    fecha: "25 de agosto de 2025",
    horaInicio: "07:00",
    duracionEstimada: "4 horas",
    quirofano: "Q2",
    estado: "Programada",
    prioridad: "Urgente",
  },
  {
    id: "CIR-003",
    pacienteNombre: "ANA PATRICIA VARGAS",
    pacienteId: "3",
    tipoCirugia: "Reducción Abierta de Fractura de Fémur",
    cirujano: "JOSE MARTINEZ SILVA",
    anestesiologo: "CAROLINA FERNANDEZ",
    fecha: "24 de agosto de 2025",
    horaInicio: "10:30",
    duracionEstimada: "3 horas",
    quirofano: "Q3",
    estado: "Completada",
    prioridad: "Urgente",
  },
  {
    id: "CIR-004",
    pacienteNombre: "ROBERTO SANTOS MAMANI",
    pacienteId: "4",
    tipoCirugia: "Colecistectomía Laparoscópica",
    cirujano: "CAROLINA FERNANDEZ",
    anestesiologo: "MARIA FERNANDEZ LOPEZ",
    fecha: "26 de agosto de 2025",
    horaInicio: "09:00",
    duracionEstimada: "2 horas",
    quirofano: "Q1",
    estado: "Programada",
    prioridad: "Electiva",
  },
  {
    id: "CIR-005",
    pacienteNombre: "SILVIA RODRIGUEZ CASTRO",
    pacienteId: "7",
    tipoCirugia: "Osteosíntesis de Fracturas Múltiples",
    cirujano: "JOSE MARTINEZ SILVA",
    anestesiologo: "PEDRO RAMIREZ TORRES",
    fecha: "26 de agosto de 2025",
    horaInicio: "07:30",
    duracionEstimada: "5 horas",
    quirofano: "Q2",
    estado: "En Curso",
    prioridad: "Urgente",
    observaciones: "Politraumatismo por accidente de tránsito",
  },
  {
    id: "CIR-006",
    pacienteNombre: "HECTOR VARGAS FLORES",
    pacienteId: "12",
    tipoCirugia: "Fijación Interna de Tibia y Peroné",
    cirujano: "JOSE MARTINEZ SILVA",
    anestesiologo: "CAROLINA FERNANDEZ",
    fecha: "27 de agosto de 2025",
    horaInicio: "08:30",
    duracionEstimada: "3 horas",
    quirofano: "Q3",
    estado: "Programada",
    prioridad: "Electiva",
  },
  {
    id: "CIR-007",
    pacienteNombre: "KARINA QUISPE TORRES",
    pacienteId: "15",
    tipoCirugia: "Laparotomía Exploratoria",
    cirujano: "EVER LUIZAGA COCA",
    anestesiologo: "MARIA FERNANDEZ LOPEZ",
    fecha: "24 de agosto de 2025",
    horaInicio: "14:00",
    duracionEstimada: "2 horas",
    quirofano: "Q1",
    estado: "Completada",
    prioridad: "Urgente",
  },
  {
    id: "CIR-008",
    pacienteNombre: "MIGUEL ANGEL FLORES",
    pacienteId: "6",
    tipoCirugia: "Colecistectomía por Colecistitis Aguda",
    cirujano: "CAROLINA FERNANDEZ",
    anestesiologo: "PEDRO RAMIREZ TORRES",
    fecha: "27 de agosto de 2025",
    horaInicio: "10:00",
    duracionEstimada: "2.5 horas",
    quirofano: "Q1",
    estado: "Programada",
    prioridad: "Urgente",
  },
];

export const getCirugiaById = (id: string): Cirugia | undefined => {
  return mockCirugias.find((cirugia) => cirugia.id === id);
};

export const getCirugiasByFecha = (fecha: string): Cirugia[] => {
  return mockCirugias.filter((cirugia) => cirugia.fecha === fecha);
};

export const getCirugiasByEstado = (estado: string): Cirugia[] => {
  if (estado === "Todas") {
    return mockCirugias;
  }
  return mockCirugias.filter((cirugia) => cirugia.estado === estado);
};
