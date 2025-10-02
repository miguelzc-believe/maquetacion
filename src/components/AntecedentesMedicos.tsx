import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Plus, Save, Edit, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";

export function AntecedentesMedicos() {
  type FieldBase = {
    id: string;
    label?: string;
    storagePath?: string;
    type: "textarea" | "radio" | "select" | "number" | "date";
    placeholder?: string;
    options?: Array<string | { label: string; value: string }>;
    min?: number;
    max?: number;
    optional?: boolean;
    default?: any;
  };

  type RichTextSection = {
    id: string;
    title: string;
    type: "richText";
    storagePath: string;
    placeholder?: string;
  };

  type GroupSection = {
    id: string;
    title: string;
    type: "group";
    fields: FieldBase[];
  };

  type RepeatableGroupSection = {
    id: string;
    title: string;
    type: "repeatableGroup";
    itemLabel: string;
    storagePath: string;
    fields: FieldBase[];
  };

  type Section = RichTextSection | GroupSection | RepeatableGroupSection;

  type Schema = {
    version: string;
    title: string;
    sections: Section[];
  };

  const schema: Schema = useMemo(
    () => ({
      version: "1.0.0",
      title: "Antecedentes",
      sections: [
        {
          id: "familiares",
          title: "Antecedentes familiares (ICD / CIE)",
          type: "richText",
          placeholder: "Ingrese antecedentes familiares...",
          storagePath: "familiares",
        },
        {
          id: "quirurgicos",
          title: "Antecedentes quirúrgicos",
          type: "richText",
          placeholder: "Ingrese antecedentes quirúrgicos...",
          storagePath: "quirurgicos",
        },
        {
          id: "sociales",
          title: "Antecedentes sociales",
          type: "richText",
          placeholder: "Ingrese antecedentes sociales...",
          storagePath: "sociales",
        },
        {
          id: "alergias",
          title: "Alergias (ICD / CIE)",
          type: "richText",
          placeholder: "Ingrese alergias...",
          storagePath: "alergias",
        },
        {
          id: "enfermedadesBase",
          title: "Enfermedades de base / antecedentes médicos (ICD / CIE)",
          type: "richText",
          placeholder: "Ingrese enfermedades de base...",
          storagePath: "enfermedadesBase",
        },
        {
          id: "habitos",
          title: "Hábitos y características",
          type: "group",
          fields: [
            {
              id: "fuma",
              label: "¿El paciente fuma?",
              type: "radio",
              options: [
                { label: "No, fuma", value: "no" },
                { label: "Sí, fuma", value: "si" },
              ],
              storagePath: "fuma",
              default: "no",
            },
            {
              id: "bloodType",
              label: "Tipo de sangre",
              type: "select",
              options: ["a+", "a-", "b+", "b-", "ab+", "ab-", "o+", "o-"],
              storagePath: "bloodType",
            },
          ],
        },
      ],
    }),
    []
  );

  const [antecedentes, setAntecedentes] = useState<Record<string, any>>({
    profile: {
      birthDate: "",
      sex: "",
    },
    familiares: "",
    quirurgicos: "",
    sociales: "",
    alergias: "",
    enfermedadesBase: "",
    fuma: "no",
    bloodType: "",
    gyneco: {
      menarche: { firstMenstruationDate: "" },
      pregnancies: [],
      cycles: [],
    },
  });

  const [isEditing, setIsEditing] = useState<Record<string, boolean>>({});

  const readAt = (path: string) => {
    const parts = path.split(".");
    let node: any = antecedentes;
    for (const key of parts) {
      if (node == null) return undefined;
      node = node[key];
    }
    return node;
  };

  const writeAt = (path: string, value: any) => {
    const parts = path.split(".");
    setAntecedentes((prev) => {
      const next: any = { ...prev };
      let node: any = next;
      for (let i = 0; i < parts.length - 1; i++) {
        const key = parts[i];
        node[key] = { ...(node[key] || {}) };
        node = node[key];
      }
      node[parts[parts.length - 1]] = value;
      return next;
    });
  };

  const toggleEdit = (id: string, value: boolean) => {
    setIsEditing((prev) => ({ ...prev, [id]: value }));
  };

  const renderField = (field: FieldBase, pathPrefix?: string) => {
    const path = field.storagePath || field.id;
    const fullPath = pathPrefix ? `${pathPrefix}.${path}` : path;
    const value = readAt(fullPath);

    if (field.type === "radio") {
      const options = (field.options || []).map((o) =>
        typeof o === "string" ? { label: o, value: o } : o
      );
      return (
        <RadioGroup
          value={value ?? field.default ?? ""}
          onValueChange={(v: string) => writeAt(fullPath, v)}
          className="flex flex-row gap-6"
        >
          {options.map((opt) => (
            <div className="flex items-center space-x-2" key={opt.value}>
              <RadioGroupItem
                value={String(opt.value)}
                id={`${fullPath}-${opt.value}`}
              />
              <Label
                htmlFor={`${fullPath}-${opt.value}`}
                className="text-foreground"
              >
                {opt.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      );
    }

    if (field.type === "select") {
      const options = (field.options || []).map((o) =>
        typeof o === "string"
          ? { label: String(o).toUpperCase(), value: String(o) }
          : o
      );
      return (
        <Select
          value={value ?? ""}
          onValueChange={(v: string) => writeAt(fullPath, v)}
        >
          <SelectTrigger>
            <SelectValue placeholder={field.placeholder || "Seleccionar"} />
          </SelectTrigger>
          <SelectContent>
            {options.map((opt) => (
              <SelectItem key={opt.value} value={String(opt.value)}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }

    if (field.type === "number") {
      return (
        <Input
          type="number"
          value={value ?? ""}
          onChange={(e) =>
            writeAt(
              fullPath,
              e.target.value === "" ? "" : Number(e.target.value)
            )
          }
          min={field.min}
          max={field.max}
        />
      );
    }

    if (field.type === "date") {
      return (
        <Input
          type="date"
          value={value ?? ""}
          onChange={(e) => writeAt(fullPath, e.target.value)}
        />
      );
    }

    if (field.type === "textarea") {
      return (
        <Textarea
          placeholder={field.placeholder}
          value={value || ""}
          onChange={(e) => writeAt(fullPath, e.target.value)}
          className="min-h-[80px]"
        />
      );
    }

    return null;
  };

  const renderSection = (section: Section) => {
    if (section.type === "richText") {
      const editing = !!isEditing[section.id];
      const value = readAt(section.storagePath) || "";
      return (
        <Card className="medical-card" key={section.id}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-foreground">
                {section.title}
              </CardTitle>
              {!editing ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleEdit(section.id, true)}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              ) : (
                <Button size="sm" onClick={() => toggleEdit(section.id, false)}>
                  <Save className="h-4 w-4 mr-2" />
                  Guardar
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {!editing ? (
              <div className="min-h-[40px] p-2 bg-muted/20 rounded border-2 border-dashed border-muted-foreground/25">
                <p className="text-muted-foreground text-sm">
                  {value || "Presione 'Enter' para guardar"}
                </p>
              </div>
            ) : (
              <Textarea
                placeholder={section.placeholder}
                value={value}
                onChange={(e) => writeAt(section.storagePath, e.target.value)}
                className="min-h-[80px]"
              />
            )}
          </CardContent>
        </Card>
      );
    }

    if (section.type === "group") {
      return (
        <div key={section.id} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {section.fields.map((f) => (
            <Card className="medical-card" key={f.id}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-foreground">
                  {f.label}
                </CardTitle>
              </CardHeader>
              <CardContent>{renderField(f)}</CardContent>
            </Card>
          ))}
        </div>
      );
    }

    if (section.type === "repeatableGroup") {
      const items: any[] = readAt(section.storagePath) || [];
      const addItem = () => {
        const empty: any = {};
        section.fields.forEach((f) => {
          empty[f.id] = f.type === "number" ? "" : "";
        });
        setAntecedentes((prev) => ({
          ...prev,
          [section.storagePath]: [...(prev[section.storagePath] || []), empty],
        }));
      };
      const updateItem = (index: number, fieldId: string, val: any) => {
        const next = [...items];
        next[index] = { ...next[index], [fieldId]: val };
        setAntecedentes((prev) => ({ ...prev, [section.storagePath]: next }));
      };
      const removeItem = (index: number) => {
        const next = items.filter((_, i) => i !== index);
        setAntecedentes((prev) => ({ ...prev, [section.storagePath]: next }));
      };

      return (
        <Card className="medical-card" key={section.id}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-foreground">
                {section.title}
              </CardTitle>
              <Button size="sm" onClick={addItem}>
                <Plus className="h-4 w-4 mr-2" />
                Agregar {section.itemLabel}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {items.length === 0 ? (
              <div className="text-sm text-muted-foreground">Sin registros</div>
            ) : null}
            {items.map((item, idx) => (
              <div key={idx} className="border rounded p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">
                    {section.itemLabel} #{idx + 1}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(idx)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.fields.map((f) => {
                    const fieldValue = item[f.id];
                    if (f.type === "radio") {
                      const options = (f.options || []).map((o) =>
                        typeof o === "string" ? { label: o, value: o } : o
                      );
                      return (
                        <div key={f.id} className="space-y-2">
                          <Label className="text-foreground">{f.label}</Label>
                          <RadioGroup
                            value={fieldValue ?? f.default ?? ""}
                            onValueChange={(v: string) =>
                              updateItem(idx, f.id, v)
                            }
                            className="flex flex-row gap-6"
                          >
                            {options.map((opt) => (
                              <div
                                className="flex items-center space-x-2"
                                key={opt.value}
                              >
                                <RadioGroupItem
                                  value={String(opt.value)}
                                  id={`${section.id}-${idx}-${f.id}-${opt.value}`}
                                />
                                <Label
                                  htmlFor={`${section.id}-${idx}-${f.id}-${opt.value}`}
                                  className="text-foreground"
                                >
                                  {opt.label}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                      );
                    }
                    if (f.type === "select") {
                      const options = (f.options || []).map((o) =>
                        typeof o === "string"
                          ? { label: String(o).toUpperCase(), value: String(o) }
                          : o
                      );
                      return (
                        <div key={f.id} className="space-y-2">
                          <Label className="text-foreground">{f.label}</Label>
                          <Select
                            value={fieldValue ?? ""}
                            onValueChange={(v: string) =>
                              updateItem(idx, f.id, v)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue
                                placeholder={f.placeholder || "Seleccionar"}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              {options.map((opt) => (
                                <SelectItem
                                  key={opt.value}
                                  value={String(opt.value)}
                                >
                                  {opt.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      );
                    }
                    if (f.type === "number") {
                      return (
                        <div key={f.id} className="space-y-2">
                          <Label className="text-foreground">{f.label}</Label>
                          <Input
                            type="number"
                            value={fieldValue ?? ""}
                            onChange={(e) =>
                              updateItem(
                                idx,
                                f.id,
                                e.target.value === ""
                                  ? ""
                                  : Number(e.target.value)
                              )
                            }
                            min={f.min}
                            max={f.max}
                          />
                        </div>
                      );
                    }
                    if (f.type === "date") {
                      return (
                        <div key={f.id} className="space-y-2">
                          <Label className="text-foreground">{f.label}</Label>
                          <Input
                            type="date"
                            value={fieldValue ?? ""}
                            onChange={(e) =>
                              updateItem(idx, f.id, e.target.value)
                            }
                          />
                        </div>
                      );
                    }
                    if (f.type === "textarea") {
                      return (
                        <div key={f.id} className="space-y-2 md:col-span-2">
                          <Label className="text-foreground">{f.label}</Label>
                          <Textarea
                            placeholder={f.placeholder}
                            value={fieldValue || ""}
                            onChange={(e) =>
                              updateItem(idx, f.id, e.target.value)
                            }
                            className="min-h-[80px]"
                          />
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      );
    }

    return null;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">{schema.title}</h2>
          <p className="text-muted-foreground">
            Información médica del paciente
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {schema.sections.map((section) => (
          <div key={section.id}>{renderSection(section)}</div>
        ))}

        <Separator className="my-6" />
      </div>
    </div>
  );
}
