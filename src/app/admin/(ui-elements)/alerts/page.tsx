import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import Alert from "@/components/ui/alert/Alert";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Alertas | KyzrUI",
};

export default function Alerts() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Alertas" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Alerta de éxito">
          <Alert
            variant="success"
            title="Mensaje de éxito"
            message="Ten cuidado al realizar esta acción."
            showLink={true}
            linkHref="/"
            linkText="Más información"
          />
          <Alert
            variant="success"
            title="Mensaje de éxito"
            message="Ten cuidado al realizar esta acción."
            showLink={false}
          />
        </ComponentCard>
        <ComponentCard title="Alerta de advertencia">
          <Alert
            variant="warning"
            title="Mensaje de advertencia"
            message="Ten cuidado al realizar esta acción."
            showLink={true}
            linkHref="/"
            linkText="Más información"
          />
          <Alert
            variant="warning"
            title="Mensaje de advertencia"
            message="Ten cuidado al realizar esta acción."
            showLink={false}
          />
        </ComponentCard>{" "}
        <ComponentCard title="Alerta de error">
          <Alert
            variant="error"
            title="Mensaje de error"
            message="Ten cuidado al realizar esta acción."
            showLink={true}
            linkHref="/"
            linkText="Más información"
          />
          <Alert
            variant="error"
            title="Mensaje de error"
            message="Ten cuidado al realizar esta acción."
            showLink={false}
          />
        </ComponentCard>{" "}
        <ComponentCard title="Alerta informativa">
          <Alert
            variant="info"
            title="Mensaje informativo"
            message="Ten cuidado al realizar esta acción."
            showLink={true}
            linkHref="/"
            linkText="Más información"
          />
          <Alert
            variant="info"
            title="Mensaje informativo"
            message="Ten cuidado al realizar esta acción."
            showLink={false}
          />
        </ComponentCard>
      </div>
    </div>
  );
}
