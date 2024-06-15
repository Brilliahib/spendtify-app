// components/molecules/Navbar/page.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import Profile from "@/components/atoms/Avatar/page";

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navMenuRef = useRef<HTMLDivElement>(null);

  const handleUserButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    signOut();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navMenuRef.current &&
      !navMenuRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);
  return (
    <nav className="flex items-center justify-between py-4 lg:py-8 w-full pad-x">
      <div className="flex items-center">
        <span className="text-lg font-bold">Spendtify</span>
      </div>
      <div className="flex items-center">
        <Profile />
      </div>
    </nav>
  );
};

export default Navbar;
