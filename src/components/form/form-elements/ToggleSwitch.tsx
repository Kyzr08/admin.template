"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Switch from "../switch/Switch";

export default function ToggleSwitch() {
  const handleSwitchChange = (checked: boolean) => {
    console.log("El interruptor está:", checked ? "ACTIVADO" : "DESACTIVADO");
  };
  return (
    <ComponentCard title="Interruptores">
      <div className="flex gap-4">
        <Switch
          label="Predeterminado"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch
          label="Activado"
          defaultChecked={true}
          onChange={handleSwitchChange}
        />
        <Switch label="Deshabilitado" disabled={true} />
      </div>{" "}
      <div className="flex gap-4">
        <Switch
          label="Predeterminado"
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch
          label="Activado"
          defaultChecked={true}
          onChange={handleSwitchChange}
          color="gray"
        />
        <Switch label="Deshabilitado" disabled={true} color="gray" />
      </div>
    </ComponentCard>
  );
}
