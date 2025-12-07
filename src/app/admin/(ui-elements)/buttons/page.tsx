import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Button from "@/components/ui/button/Button";
import { BoxIcon } from "@/icons";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Botones | KyzrUI",
};

export default function Buttons() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Botones" />
      <div className="space-y-5 sm:space-y-6">
        {/* Primary Button */}
        <ComponentCard title="Botón primario">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary">
              Texto del botón
            </Button>
            <Button size="md" variant="primary">
              Texto del botón
            </Button>
          </div>
        </ComponentCard>
        {/* Primary Button with Start Icon */}
        <ComponentCard title="Botón primario con ícono a la izquierda">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary" startIcon={<BoxIcon />}>
              Texto del botón
            </Button>
            <Button size="md" variant="primary" startIcon={<BoxIcon />}>
              Texto del botón
            </Button>
          </div>
        </ComponentCard>{" "}
        {/* Primary Button with Start Icon */}
        <ComponentCard title="Botón primario con ícono a la derecha">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary" endIcon={<BoxIcon />}>
              Texto del botón
            </Button>
            <Button size="md" variant="primary" endIcon={<BoxIcon />}>
              Texto del botón
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button */}
        <ComponentCard title="Botón secundario">
          <div className="flex items-center gap-5">
            {/* Outline Button */}
            <Button size="sm" variant="outline">
              Texto del botón
            </Button>
            <Button size="md" variant="outline">
              Texto del botón
            </Button>
          </div>
        </ComponentCard>
        {/* Outline Button with Start Icon */}
        <ComponentCard title="Botón con borde e ícono a la izquierda">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="outline" startIcon={<BoxIcon />}>
              Texto del botón
            </Button>
            <Button size="md" variant="outline" startIcon={<BoxIcon />}>
              Texto del botón
            </Button>
          </div>
        </ComponentCard>{" "}
        {/* Outline Button with Start Icon */}
        <ComponentCard title="Botón con borde e ícono a la derecha">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="outline" endIcon={<BoxIcon />}>
              Texto del botón
            </Button>
            <Button size="md" variant="outline" endIcon={<BoxIcon />}>
              Texto del botón
            </Button>
          </div>
        </ComponentCard>
      </div>
    </div>
  );
}
