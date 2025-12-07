"use client";
import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Select from "../Select";
import MultiSelect from "../MultiSelect";
import { ChevronDownIcon } from "@/icons";

export default function SelectInputs() {
  const options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Plantilla" },
    { value: "development", label: "Desarrollo" },
  ];

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectChange = (value: string) => {
    console.log("Valor seleccionado:", value);
  };

  const multiOptions = [
    { value: "1", text: "Opción 1", selected: false },
    { value: "2", text: "Opción 2", selected: false },
    { value: "3", text: "Opción 3", selected: false },
    { value: "4", text: "Opción 4", selected: false },
    { value: "5", text: "Opción 5", selected: false },
  ];

  return (
    <ComponentCard title="Entradas de selección">
      <div className="space-y-6">
        <div>
          <Label>Campo de selección</Label>
         <div className="relative">
           <Select
            options={options}
            placeholder="Selecciona una opción"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
          <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <ChevronDownIcon/>
            </span>
         </div>
        </div>
        <div className="relative">
          <MultiSelect
            label="Opciones múltiples"
            options={multiOptions}
            defaultSelected={["1", "3"]}
            onChange={(values) => setSelectedValues(values)}
          />
          <p className="sr-only">
            Valores seleccionados: {selectedValues.join(", ")}
          </p>
        </div>
      </div>
    </ComponentCard>
  );
}
