"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  DollarLineIcon,
  GroupIcon,
  OrderIcon,
  ShoppingBagIcon,
} from "@/icons";

export const EcommerceMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
      {/* <!-- Ventas Totales --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-white/80">
          <ShoppingBagIcon className="size-6" />
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Ventas totales
            </span>
            <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">
              1,280
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            6.8%
          </Badge>
        </div>
      </div>
      {/* <!-- Pedidos Totales --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-white/80">
          <OrderIcon className="size-6" />
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Pedidos totales
            </span>
            <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">
              5,359
            </h4>
          </div>
          <Badge color="error">
            <ArrowDownIcon className="text-error-500" />
            4.2%
          </Badge>
        </div>
      </div>
      {/* <!-- Ingresos Totales --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-white/80">
          <DollarLineIcon className="size-6" />
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Ingresos totales
            </span>
            <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">
              $82,540
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            12.4%
          </Badge>
        </div>
      </div>
      {/* <!-- Clientes --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-white/80">
          <GroupIcon className="size-6" />
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Clientes
            </span>
            <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">
              3,782
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            9.8%
          </Badge>
        </div>
      </div>
    </div>
  );
};
