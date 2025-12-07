"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Button from "../../ui/button/Button";
import { Modal } from "../../ui/modal";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import { useModal } from "@/hooks/useModal";

export default function FormInModal() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Guardando cambios...");
    closeModal();
  };
  return (
    <ComponentCard title="Formulario en modal">
      <Button size="sm" onClick={openModal}>
        Abrir modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[584px] p-5 lg:p-10"
      >
        <form className="">
          <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
            Información personal
          </h4>

          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            <div className="col-span-1">
              <Label>Nombre</Label>
              <Input type="text" placeholder="Emilia" />
            </div>

            <div className="col-span-1">
              <Label>Apellido</Label>
              <Input type="text" placeholder="Castañeda" />
            </div>

            <div className="col-span-1">
              <Label>Correo electrónico</Label>
              <Input type="email" placeholder="emilia.castaneda55@gmail.com" />
            </div>

            <div className="col-span-1">
              <Label>Teléfono</Label>
              <Input type="text" placeholder="+51 963 398 146" />
            </div>

            <div className="col-span-1 sm:col-span-2">
              <Label>Biografía</Label>
              <Input type="text" placeholder="Gerente de equipo" />
            </div>
          </div>

          <div className="flex items-center justify-end w-full gap-3 mt-6">
            <Button size="sm" variant="outline" onClick={closeModal}>
              Cerrar
            </Button>
            <Button size="sm" onClick={handleSave}>
              Guardar cambios
            </Button>
          </div>
        </form>
      </Modal>
    </ComponentCard>
  );
}
