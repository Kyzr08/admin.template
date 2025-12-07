import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Página en blanco | KyzrUI",
};

export default function BlankPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Página en blanco" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Título de la tarjeta
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
            Comienza a colocar contenido en las cuadrículas o paneles; también puedes usar diferentes combinaciones. Revisa el tablero y el resto de páginas para inspirarte.
          </p>
        </div>
      </div>
    </div>
  );
}
