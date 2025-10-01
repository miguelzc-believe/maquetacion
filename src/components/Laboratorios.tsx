import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Calendar,
  Plus,
  Download,
  FileText,
  RefreshCw,
  Filter,
} from "lucide-react";
import { useState } from "react";

export function Laboratorios() {
  const [dateRange, setDateRange] = useState({
    desde: "2024-09-01",
    hasta: "2025-10-01",
  });

  const [resultados] = useState({
    fechas: [
      "2022-11-29",
      "2022-12-02",
      "2022-12-06",
      "2022-12-30",
      "2023-01-31",
      "2023-02-02",
      "2023-02-23",
      "2023-03-01",
    ],
    categorias: [
      {
        nombre: "HEMATOLOGÍA",
        estudios: [
          {
            nombre: "Hemograma completo",
            resultados: [
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "14:36",
              "Sin datos",
              "Sin datos",
            ],
          },
          {
            nombre: "Documento",
            resultados: [
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "16:10",
              "N/A",
              "11:36",
              "N/A",
              "13:56",
            ],
          },
          {
            nombre: "Leucocitos",
            resultados: [
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "2820",
              "N/A",
              "Sin datos",
              "N/A",
              "N/A",
            ],
          },
          {
            nombre: "WBC 4.00-10.00 10^9/L",
            resultados: [
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "14:36",
              "Sin datos",
              "Sin datos",
            ],
          },
          {
            nombre: "NEUTROFILOS 50.0-70.0 %",
            resultados: [
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "14:36",
              "Sin datos",
              "Sin datos",
            ],
          },
          {
            nombre: "Hematócrito",
            resultados: [
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "3'320.000",
              "N/A",
              "Sin datos",
              "N/A",
              "N/A",
            ],
          },
          {
            nombre: "Hemoglobina",
            resultados: [
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "9.4",
              "N/A",
              "Sin datos",
              "N/A",
              "N/A",
            ],
          },
          {
            nombre: "LINFOCITOS 20.0-40.0 %",
            resultados: [
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "14:36",
              "Sin datos",
              "Sin datos",
            ],
          },
          {
            nombre: "MONOCITOS",
            resultados: [
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "N/A",
              "Sin datos",
              "Sin datos",
            ],
          },
        ],
      },
      {
        nombre: "BIOQUÍMICA",
        estudios: [
          {
            nombre: "Glucosa",
            resultados: [
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
            ],
          },
        ],
      },
      {
        nombre: "PERFIL HEPÁTICO",
        estudios: [
          {
            nombre: "ALT (TGP)",
            resultados: [
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
              "Sin datos",
            ],
          },
        ],
      },
    ],
  });

  // Estados para funcionalidades
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filtros, setFiltros] = useState({
    categoria: "",
    fechaDesde: "",
    fechaHasta: "",
  });

  // Función para generar reporte
  const handleGenerarReporte = () => {
    alert("Generando reporte de laboratorios...");
  };

  // Función para actualizar datos
  const handleActualizar = () => {
    alert("Actualizando datos de laboratorios...");
  };

  // Función para agregar nueva orden de laboratorio
  const handleAgregarOrden = () => {
    setIsModalOpen(true);
  };

  // Función para exportar datos
  const handleExportar = () => {
    alert("Exportando datos de laboratorios...");
  };

  // Función para filtrar resultados
  const handleFiltrar = () => {
    alert("Aplicando filtros...");
  };

  const getResultadoColor = (resultado: string) => {
    if (resultado === "Sin datos" || resultado === "N/A") {
      return "text-muted-foreground";
    }
    return "text-foreground font-medium";
  };

  return (
    <div className="space-y-6">
      {/* Header con controles de fecha */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Laboratorios</h2>
          <p className="text-muted-foreground">
            Resultados de análisis clínicos y estudios de laboratorio
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleActualizar} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Actualizar
          </Button>
          <Button onClick={handleAgregarOrden}>
            <Plus className="h-4 w-4 mr-2" />
            Agregar Nueva Orden
          </Button>
        </div>
      </div>

      {/* Controles de fecha y filtros */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex-1">
              <Label htmlFor="desde" className="text-sm font-medium">
                Desde
              </Label>
              <Input
                id="desde"
                type="date"
                value={dateRange.desde}
                onChange={(e) =>
                  setDateRange({ ...dateRange, desde: e.target.value })
                }
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="hasta" className="text-sm font-medium">
                Hasta
              </Label>
              <Input
                id="hasta"
                type="date"
                value={dateRange.hasta}
                onChange={(e) =>
                  setDateRange({ ...dateRange, hasta: e.target.value })
                }
                className="w-full"
              />
            </div>
            <Button
              onClick={handleGenerarReporte}
              className="bg-secondary hover:bg-secondary/90"
            >
              <FileText className="h-4 w-4 mr-2" />
              Generar Reporte
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Resultados de laboratorio */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Resultados</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleExportar}>
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
            <Button variant="outline" size="sm" onClick={handleFiltrar}>
              <Filter className="h-4 w-4 mr-2" />
              Filtrar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold text-primary">
                    Resultados
                  </TableHead>
                  {resultados.fechas.map((fecha, index) => (
                    <TableHead
                      key={index}
                      className="text-center font-semibold text-primary min-w-[100px]"
                    >
                      {fecha}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {resultados.categorias.map((categoria, categoriaIndex) => (
                  <>
                    {/* Header de categoría */}
                    <TableRow key={categoriaIndex} className="bg-primary/5">
                      <TableCell className="font-bold text-primary border-r border-primary/20">
                        {categoria.nombre}
                      </TableCell>
                      {resultados.fechas.map((_, fechaIndex) => (
                        <TableCell
                          key={fechaIndex}
                          className="text-center border-r border-primary/10"
                        >
                          {/* Celda vacía para el header de categoría */}
                        </TableCell>
                      ))}
                    </TableRow>

                    {/* Estudios de la categoría */}
                    {categoria.estudios.map((estudio, estudioIndex) => (
                      <TableRow
                        key={`${categoriaIndex}-${estudioIndex}`}
                        className="hover:bg-muted/30"
                      >
                        <TableCell className="font-medium text-foreground pl-6 border-r border-border/50">
                          {estudio.nombre}
                        </TableCell>
                        {estudio.resultados.map((resultado, resultadoIndex) => (
                          <TableCell
                            key={resultadoIndex}
                            className={`text-center border-r border-border/30 ${getResultadoColor(
                              resultado
                            )}`}
                          >
                            {resultado}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <FileText className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Completados</p>
                <p className="text-2xl font-bold text-success">
                  {resultados.categorias.reduce(
                    (acc, cat) =>
                      acc +
                      cat.estudios.filter((e) =>
                        e.resultados.some(
                          (r) => r !== "Sin datos" && r !== "N/A"
                        )
                      ).length,
                    0
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <Calendar className="h-5 w-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pendientes</p>
                <p className="text-2xl font-bold text-warning">
                  {resultados.categorias.reduce(
                    (acc, cat) =>
                      acc +
                      cat.estudios.filter((e) =>
                        e.resultados.some((r) => r === "Sin datos")
                      ).length,
                    0
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Plus className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Este Mes</p>
                <p className="text-2xl font-bold text-primary">
                  {resultados.categorias.reduce(
                    (acc, cat) =>
                      acc +
                      cat.estudios.filter((e) =>
                        e.resultados.some(
                          (r) => r !== "Sin datos" && r !== "N/A"
                        )
                      ).length,
                    0
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="medical-info-box">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Download className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Estudios</p>
                <p className="text-2xl font-bold text-secondary">
                  {resultados.categorias.reduce(
                    (acc, cat) => acc + cat.estudios.length,
                    0
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
