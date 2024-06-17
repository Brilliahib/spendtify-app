"use client";
import React, { useState } from "react";
import Button from "@/components/atoms/Button/page";
import CardWallet from "@/components/atoms/CardWallet/page";
import AddItems from "@/components/molecules/Drawer/page"; // Pastikan path-nya sesuai dengan struktur proyek Anda
import Form from "@/components/molecules/Form/page";
import Navbar from "@/components/molecules/Navbar/page";
import { DataTableDemo } from "@/components/molecules/Table/page";

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
      <main className="flex flex-col w-full flex-1">
        <Navbar />
        <section className="pad-x mb-8">
          <div className="flex justify-between lg:py-8 py-4">
            <div className="flex items-center">
              <div className="flex flex-col space-y-2">
                <span className="text-lg font-bold">Your Wallet</span>
                <p className="text-sm text-foreground/60">
                  You can store in several different pockets.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex items-center grid grid-cols-2 grid-rows-2 lg:gap-8 gap-6 mb-12">
            <CardWallet variant="income" />
            <CardWallet variant="expenses" />
            <CardWallet variant="balance" />
            <CardWallet variant="investments" />
          </div>
          <div className="flex flex-col mt-12">
            <div className="flex justify-between lg:py-8 py-4">
              <div className="flex flex-col space-y-2">
                <span className="text-lg font-bold">Your Transactions</span>
                <p className="text-sm text-foreground/60">
                  You can store in several different pockets.
                </p>
              </div>
              <div className="flex flex-col">
                <AddItems onClose={handleCloseDrawer} />{" "}
                {/* Mengirimkan prop onClose ke AddItems */}
              </div>
            </div>
            <div className="rounded-md border border-border">
              <div className="relative w-full overflow-auto">
                <DataTableDemo />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
