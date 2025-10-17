export interface Quirofano {
  id: string;
  nombre: string;
  numero: number;
  estado: "Disponible" | "Ocupado" | "Mantenimiento" | "Limpieza";
  especialidades: string[];
  equipamiento: string[];
  capacidad: number;
  ubicacion: string;
}

export interface AgendaQuirofano {
  id: string;
  quirofanoId: string;
  fecha: string;
  horaInicio: string;
  horaFin: string;
  cirugiaId: string;
  pacienteNombre: string;
  tipoCirugia: string;
  cirujano: string;
  estado: "Programada" | "En Curso" | "Completada" | "Cancelada";
}

export const mockQuirofanos: Quirofano[] = [
  {
    id: "Q1",
    nombre: "Quirófano 1",
    numero: 1,
    estado: "Ocupado",
    especialidades: ["Cirugía General", "Cirugía Laparoscópica"],
    equipamiento: [
      "Mesa quirúrgica",
      "Lámpara cialítica",
      "Torre laparoscópica",
      "Electrobisturí",
    ],
    capacidad: 8,
    ubicacion: "Piso 2 - Ala Norte",
  },
  {
    id: "Q2",
    nombre: "Quirófano 2",
    numero: 2,
    estado: "Ocupado",
    especialidades: ["Cirugía Cardiovascular", "Cirugía Torácica"],
    equipamiento: [
      "Mesa quirúrgica",
      "Lámpara cialítica",
      "Equipo de circulación extracorpórea",
      "Monitor hemodinámico",
    ],
    capacidad: 10,
    ubicacion: "Piso 2 - Ala Norte",
  },
  {
    id: "Q3",
    nombre: "Quirófano 3",
    numero: 3,
    estado: "Disponible",
    especialidades: ["Traumatología", "Ortopedia"],
    equipamiento: [
      "Mesa ortopédica",
      "Lámpara cialítica",
      "Arco en C",
      "Taladro quirúrgico",
    ],
    capacidad: 8,
    ubicacion: "Piso 2 - Ala Sur",
  },
  {
    id: "Q4",
    nombre: "Quirófano 4",
    numero: 4,
    estado: "Limpieza",
    especialidades: ["Neurocirugía", "Cirugía General"],
    equipamiento: [
      "Mesa quirúrgica",
      "Lámpara cialítica",
      "Microscopio quirúrgico",
      "Neuronavegador",
    ],
    capacidad: 8,
    ubicacion: "Piso 2 - Ala Sur",
  },
];

export const mockAgendaQuirofanos: AgendaQuirofano[] = [
  {
    id: "AQ-001",
    quirofanoId: "Q1",
    fecha: "24 de agosto de 2025",
    horaInicio: "08:00",
    horaFin: "10:00",
    cirugiaId: "CIR-001",
    pacienteNombre: "ADELA MANRIQUE TOLA",
    tipoCirugia: "Apendicectomía Laparoscópica",
    cirujano: "EVER LUIZAGA COCA",
    estado: "Programada",
  },
  {
    id: "AQ-002",
    quirofanoId: "Q2",
    fecha: "25 de agosto de 2025",
    horaInicio: "07:00",
    horaFin: "11:00",
    cirugiaId: "CIR-002",
    pacienteNombre: "CARLOS MENDIETA RODRIGUEZ",
    tipoCirugia: "Revascularización Miocárdica",
    cirujano: "MARIA GONZALEZ LOPEZ",
    estado: "Programada",
  },
  {
    id: "AQ-003",
    quirofanoId: "Q3",
    fecha: "24 de agosto de 2025",
    horaInicio: "10:30",
    horaFin: "13:30",
    cirugiaId: "CIR-003",
    pacienteNombre: "ANA PATRICIA VARGAS",
    tipoCirugia: "Reducción Abierta de Fractura de Fémur",
    cirujano: "JOSE MARTINEZ SILVA",
    estado: "Completada",
  },
  {
    id: "AQ-004",
    quirofanoId: "Q1",
    fecha: "26 de agosto de 2025",
    horaInicio: "09:00",
    horaFin: "11:00",
    cirugiaId: "CIR-004",
    pacienteNombre: "ROBERTO SANTOS MAMANI",
    tipoCirugia: "Colecistectomía Laparoscópica",
    cirujano: "CAROLINA FERNANDEZ",
    estado: "Programada",
  },
  {
    id: "AQ-005",
    quirofanoId: "Q2",
    fecha: "26 de agosto de 2025",
    horaInicio: "07:30",
    horaFin: "12:30",
    cirugiaId: "CIR-005",
    pacienteNombre: "SILVIA RODRIGUEZ CASTRO",
    tipoCirugia: "Osteosíntesis de Fracturas Múltiples",
    cirujano: "JOSE MARTINEZ SILVA",
    estado: "En Curso",
  },
  {
    id: "AQ-006",
    quirofanoId: "Q3",
    fecha: "27 de agosto de 2025",
    horaInicio: "08:30",
    horaFin: "11:30",
    cirugiaId: "CIR-006",
    pacienteNombre: "HECTOR VARGAS FLORES",
    tipoCirugia: "Fijación Interna de Tibia y Peroné",
    cirujano: "JOSE MARTINEZ SILVA",
    estado: "Programada",
  },
  {
    id: "AQ-007",
    quirofanoId: "Q1",
    fecha: "24 de agosto de 2025",
    horaInicio: "14:00",
    horaFin: "16:00",
    cirugiaId: "CIR-007",
    pacienteNombre: "KARINA QUISPE TORRES",
    tipoCirugia: "Laparotomía Exploratoria",
    cirujano: "EVER LUIZAGA COCA",
    estado: "Completada",
  },
  {
    id: "AQ-008",
    quirofanoId: "Q1",
    fecha: "27 de agosto de 2025",
    horaInicio: "10:00",
    horaFin: "12:30",
    cirugiaId: "CIR-008",
    pacienteNombre: "MIGUEL ANGEL FLORES",
    tipoCirugia: "Colecistectomía por Colecistitis Aguda",
    cirujano: "CAROLINA FERNANDEZ",
    estado: "Programada",
  },
];

export const getQuirofanoById = (id: string): Quirofano | undefined => {
  return mockQuirofanos.find((quirofano) => quirofano.id === id);
};

export const getAgendaByQuirofano = (
  quirofanoId: string
): AgendaQuirofano[] => {
  return mockAgendaQuirofanos.filter(
    (agenda) => agenda.quirofanoId === quirofanoId
  );
};

export const getAgendaByFecha = (fecha: string): AgendaQuirofano[] => {
  return mockAgendaQuirofanos.filter((agenda) => agenda.fecha === fecha);
};
