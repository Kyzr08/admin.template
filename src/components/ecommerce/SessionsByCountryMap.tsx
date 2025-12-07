"use client";

import { useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

type CountryMetric = {
  name: string;
  coordinates: [number, number];
  value: string;
  change: string;
};

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const countryMetrics: CountryMetric[] = [
  {
    name: "Canadá",
    coordinates: [-106, 56],
    value: "4.9k",
    change: "+2%",
  },
  {
    name: "Estados Unidos",
    coordinates: [-95, 37],
    value: "12.4k",
    change: "+5%",
  },
  {
    name: "Brasil",
    coordinates: [-51, -14],
    value: "5.2k",
    change: "+3%",
  },
  {
    name: "Rusia",
    coordinates: [105, 61],
    value: "3.8k",
    change: "+1%",
  },
  {
    name: "China",
    coordinates: [104, 35],
    value: "6.1k",
    change: "+4%",
  },
];

export default function SessionsByCountryMap() {
  const summary = useMemo(
    () => [
      { label: "ESTA SEMANA", value: "23.5k" },
      { label: "SEMANA PASADA", value: "41.05k" },
    ],
    [],
  );

  return (
    <section className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <header className="px-6 pt-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Sesiones por país
        </h3>
      </header>

      <div className="flex flex-1 flex-col px-4 pb-6 sm:px-6">
        {/* Mapa responsive */}
        <div className="mt-4 aspect-[4/3] w-full max-h-[180px] overflow-hidden rounded-xl bg-gray-50/50 dark:bg-white/5 sm:aspect-[3/2] sm:max-h-[200px] lg:max-h-[220px]">
          <ComposableMap
            projectionConfig={{
              scale: 135,
              center: [10, 20],
            }}
            width={500}
            height={300}
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#E8EBF0",
                        outline: "none",
                        stroke: "#D1D5DB",
                        strokeWidth: 0.5,
                      },
                      hover: {
                        fill: "#DBE4FF",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#DBE4FF",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>

            {countryMetrics.map((country) => {
              const valueText = `${country.value} · ${country.change}`;
              const labelWidth = Math.max(country.name.length, valueText.length) * 6 + 16;
              const labelHeight = 32;

              return (
                <Marker key={country.name} coordinates={country.coordinates}>
                  {/* Punto del marcador */}
                  <circle r="4" fill="#4F5B93" opacity="0.9" />
                  <circle r="2" fill="white" />

                  {/* Tooltip del país */}
                  <g transform="translate(8, -16)">
                    <rect
                      x="0"
                      y="0"
                      rx="4"
                      ry="4"
                      width={labelWidth}
                      height={labelHeight}
                      className="fill-white drop-shadow-sm dark:fill-gray-900"
                      style={{
                        filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
                      }}
                    />
                    <text
                      x="6"
                      y="12"
                      className="fill-gray-700 text-[11px] font-medium dark:fill-white"
                      style={{ pointerEvents: "none" }}
                    >
                      {country.name}
                    </text>
                    <text
                      x="6"
                      y="24"
                      className="fill-gray-500 text-[10px] dark:fill-gray-400"
                      style={{ pointerEvents: "none" }}
                    >
                      {valueText}
                    </text>
                  </g>
                </Marker>
              );
            })}
          </ComposableMap>
        </div>

        {/* Estadísticas */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {summary.map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-white p-4 text-center dark:bg-white/5"
            >
              <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}