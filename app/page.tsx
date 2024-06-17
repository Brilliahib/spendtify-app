"use client";
import React, { useState } from "react";
import Button from "@/components/atoms/Button/page";
import CardWallet from "@/components/atoms/CardWallet/page";
import AddItems from "@/components/molecules/Drawer/page"; // Pastikan path-nya sesuai dengan struktur proyek Anda
import Form from "@/components/molecules/Form/page";
import Navbar from "@/components/molecules/Navbar/page";
import { DataTableDemo } from "@/components/molecules/Table/page";
import StatusBadge from "@/components/atoms/Badges/page";
import Window from "@/components/organisms/Window/page";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <main className="flex flex-col w-full flex-1 h-screen">
        <Navbar />
        <section className="pad-x mb-8 lg:py-24 py-12">
          <div className="text-center flex justify-center mb-3">
            <StatusBadge status="success" className="w-fit">
              E-Wallet Real Time
            </StatusBadge>
          </div>
          <div className="text-center space-y-4 md:mb-24 mb-12">
            <h1 className="text-center text-2xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Build and manage your salary
            </h1>
            <p className="max-w-3xl text-center md:text-lg text-sm font-light text-foreground/60 inline-block">
              A free financial assistant that is always ready and available to
              help you with any financial matters at any time of the day.
            </p>
          </div>
          <div>
            <Window />
          </div>
        </section>
      </main>
    </>
  );
}
