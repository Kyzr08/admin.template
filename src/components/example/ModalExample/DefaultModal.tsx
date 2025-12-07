"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";

import { Modal } from "../../ui/modal";
import Button from "../../ui/button/Button";
import { useModal } from "@/hooks/useModal";

export default function DefaultModal() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Guardando cambios...");
    closeModal();
  };
  return (
    <div>
      <ComponentCard title="Modal predeterminado">
        <Button size="sm" onClick={openModal}>
          Abrir modal
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          className="max-w-[600px] p-5 lg:p-10"
        >
          <h4 className="font-semibold text-gray-800 mb-7 text-title-sm dark:text-white/90">
            Encabezado del modal
          </h4>
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
            Este texto de muestra en español explica el contenido principal del
            modal. Puedes utilizarlo para proporcionar instrucciones, detallar
            un proceso o compartir información relevante con tus usuarios.
          </p>
          <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
            Añade cualquier detalle adicional necesario para completar la
            acción. Mantén el mensaje claro y directo para facilitar la
            comprensión.
          </p>
          <div className="flex items-center justify-end w-full gap-3 mt-8">
            <Button size="sm" variant="outline" onClick={closeModal}>
              Cerrar
            </Button>
            <Button size="sm" onClick={handleSave}>
              Guardar cambios
            </Button>
          </div>
        </Modal>
      </ComponentCard>
    </div>
  );
}
