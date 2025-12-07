import PieChartOne from "@/components/charts/pie/PieChartOne";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gráfico circular | KyzrUI",
};

export default function PieChartPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Gráfico circular" />
      <div className="space-y-6">
        <ComponentCard title="Gráfico circular 1">
          <PieChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
