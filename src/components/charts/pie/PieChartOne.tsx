"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import type { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(
  () => import("react-apexcharts").then((mod) => mod.default),
  {
    ssr: false,
  },
);

const demographicSegments = [
  { label: "18-24 años", value: 420, color: "#465FFF" },
  { label: "25-34 años", value: 360, color: "#6280FF" },
  { label: "35-44 años", value: 260, color: "#7F9AFF" },
  { label: "45-54 años", value: 160, color: "#A3B6FF" },
  { label: "55+ años", value: 100, color: "#C7D1FF" },
];

export default function PieChartOne() {
  const totalCustomers = useMemo(
    () =>
      demographicSegments.reduce((total, segment) => {
        return total + segment.value;
      }, 0),
    [],
  );

  const chartSeries = useMemo(
    () => demographicSegments.map((segment) => segment.value),
    [],
  );

  const chartOptions = useMemo<ApexOptions>(
    () => ({
      chart: {
        type: "donut",
        fontFamily: "Outfit, sans-serif",
      },
      labels: demographicSegments.map((segment) => segment.label),
      colors: demographicSegments.map((segment) => segment.color),
      legend: {
        show: false,
      },
      stroke: {
        colors: ["#ffffff"],
        width: 2,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
            labels: {
              show: true,
              name: {
                show: false,
              },
              value: {
                fontSize: "26px",
                fontWeight: 600,
                color: "#1F2937",
                formatter: (value) => Number(value).toLocaleString("es-ES"),
              },
              total: {
                show: false,
              },
            },
          },
        },
      },
      tooltip: {
        y: {
          formatter: (value: number) =>
            `${value.toLocaleString("es-ES")} clientes`,
        },
      },
      responsive: [
        {
          breakpoint: 640,
          options: {
            chart: {
              height: 260,
            },
            legend: {
              fontSize: "12px",
            },
          },
        },
      ],
    }),
    [totalCustomers],
  );

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="donut"
      height={320}
    />
  );
}
