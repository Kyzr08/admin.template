"use client";
import React from "react";
import ComponentCard from "../../common/ComponentCard";
import Button from "../../ui/button/Button";
import { Modal } from "../../ui/modal";
import { useModal } from "@/hooks/useModal";

export default function VerticallyCenteredModal() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Guardando cambios...");
    closeModal();
  };
  return (
    <ComponentCard title="Modal centrado verticalmente">
      <Button size="sm" onClick={openModal}>
        Abrir modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        showCloseButton={false}
        className="max-w-[507px] p-6 lg:p-10"
      >
        <div className="text-center">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
            ¡Todo listo! Éxito confirmado
          </h4>
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
            Usa este modal para confirmar acciones importantes y brindar un
            mensaje claro al usuario sobre el resultado de su tarea.
          </p>

          <div className="flex items-center justify-center w-full gap-3 mt-8">
            <Button size="sm" variant="outline" onClick={closeModal}>
              Cerrar
            </Button>
            <Button size="sm" onClick={handleSave}>
              Guardar cambios
            </Button>
          </div>
        </div>
      </Modal>
    </ComponentCard>
  );
}
