import GridShape from "@/components/common/GridShape";
import ThemeTogglerTwo from "@/components/common/ThemeTogglerTwo";

import { ThemeProvider } from "@/context/ThemeContext";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <ThemeProvider>
        <div className="relative flex lg:flex-row w-full h-screen justify-center flex-col dark:bg-gray-900 sm:p-0">
          {/* PANEL IZQUIERDO */}
          <div className="order-2 lg:order-1 lg:w-1/2 w-full h-full relative overflow-hidden hidden lg:flex">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Light mode layers */}
              <div className="absolute inset-0 bg-[linear-gradient(132deg,#fdf6f0_0%,#f4efff_50%,#edf7ff_100%)] dark:hidden" />
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-violet-200/45 to-transparent dark:hidden" />
              <div className="absolute inset-y-20 left-16 h-[70%] w-[1px] bg-gradient-to-b from-violet-200/40 via-sky-200/15 to-transparent dark:hidden" />

              {/* Dark mode layers */}
              <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
              <div className="absolute inset-0 hidden dark:block opacity-[0.28] mix-blend-screen bg-[linear-gradient(135deg,rgba(96,165,250,0.25)_0%,rgba(96,165,250,0)_45%,rgba(99,102,241,0)_55%,rgba(99,102,241,0.3)_100%)]" />
              <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(115deg,rgba(148,163,184,0.12)_0%,rgba(148,163,184,0.05)_25%,rgba(148,163,184,0)_100%)]" />
              <div className="absolute hidden dark:block h-[180px] w-[180px] rounded-full bg-blue-500/15 blur-3xl top-16 left-24" />
              <div className="absolute hidden dark:block h-[220px] w-[220px] rounded-full bg-indigo-500/20 blur-[120px] bottom-10 right-20" />
              <div className="absolute hidden dark:block inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
              <div className="absolute hidden dark:block inset-y-20 left-16 h-[70%] w-[1px] bg-gradient-to-b from-blue-500/30 via-blue-400/10 to-transparent" />
            </div>

            <GridShape />

            {/* CONTENIDO */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-12 py-16">
              <div className="w-full max-w-lg space-y-6 text-center">
                <div className="space-y-3 text-gray-900 dark:text-white">
                  <span className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-gray-600/90 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
                    Acceso administrativo
                  </span>

                  <p className="text-sm text-gray-600 dark:text-white/70 md:text-base">
                    Un template moderno desarrollado con Next.js y Tailwind CSS, diseñado para optimizar la gestión y la toma de decisiones.
                  </p>
                </div>

                

              </div>
            </div>
          </div>

          {/* PANEL DERECHO: FORMULARIO */}
          <div className="order-1 lg:order-2 flex w-full flex-1 lg:w-1/2">
            {children}
          </div>

          {/* BOTÓN DEL TEMA */}
          <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
            <ThemeTogglerTwo />
          </div>

        </div>
      </ThemeProvider>
    </div>
  );
}
