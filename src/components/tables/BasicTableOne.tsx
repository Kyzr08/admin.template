import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import Badge from "../ui/badge/Badge";
import Image from "next/image";

interface Order {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  projectName: string;
  team: {
    images: string[];
  };
  status: string;
  budget: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user1.jpg",
      name: "Mariana López",
      role: "Diseñadora web",
    },
    projectName: "Sitio web de agencia",
    team: {
      images: [
        "/images/user/user2.jpg",
        "/images/user/user3.jpg",
        "/images/user/user4.jpg",
      ],
    },
    budget: "3.9K",
    status: "Activo",
  },
  {
    id: 2,
    user: {
      image: "/images/user/user5.jpg",
      name: "Javier Morales",
      role: "Gestor de proyectos",
    },
    projectName: "Tecnología",
    team: {
      images: ["/images/user/user6.jpg", "/images/user/user7.jpg"],
    },
    budget: "24.9K",
    status: "Pendiente",
  },
  {
    id: 3,
    user: {
      image: "/images/user/user2.jpg",
      name: "Andrés Castillo",
      role: "Redactor de contenido",
    },
    projectName: "Redacción de blog",
    team: {
      images: ["/images/user/user3.jpg"],
    },
    budget: "12.7K",
    status: "Activo",
  },
  {
    id: 4,
    user: {
      image: "/images/user/user4.jpg",
      name: "Diego Hernández",
      role: "Especialista en marketing digital",
    },
    projectName: "Redes sociales",
    team: {
      images: [
        "/images/user/user5.jpg",
        "/images/user/user6.jpg",
        "/images/user/user7.jpg",
      ],
    },
    budget: "2.8K",
    status: "Cancelado",
  },
  {
    id: 5,
    user: {
      image: "/images/user/user7.jpg",
      name: "Gabriela Ruiz",
      role: "Desarrolladora front-end",
    },
    projectName: "Sitio web",
    team: {
      images: [
        "/images/user/user1.jpg",
        "/images/user/user2.jpg",
        "/images/user/user3.jpg",
      ],
    },
    budget: "4.5K",
    status: "Activo",
  },
];

export default function BasicTableOne() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Usuario
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Proyecto
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Equipo
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Estado
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Presupuesto
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <Image
                          width={40}
                          height={40}
                          src={order.user.image}
                          alt={order.user.name}
                        />
                      </div>
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {order.user.name}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {order.user.role}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.projectName}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <div className="flex -space-x-2">
                      {order.team.images.map((teamImage, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                        >
                          <Image
                            width={24}
                            height={24}
                            src={teamImage}
                            alt={`Team member ${index + 1}`}
                            className="w-full"
                          />
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={
                        order.status === "Activo"
                          ? "success"
                          : order.status === "Pendiente"
                          ? "warning"
                          : "error"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.budget}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
