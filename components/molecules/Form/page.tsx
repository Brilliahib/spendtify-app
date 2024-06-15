"use client";

import InputForm from "@/components/atoms/InputForm/page";
import GoogleForm from "@/components/atoms/GoogleAuth/page";
import PasswordInputForm from "@/components/atoms/PasswordInputForm/page";
import Button from "@/components/atoms/Button/page";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { auth, googleProvider } from "@/lib/firebase/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  User,
} from "firebase/auth";

export default function Form() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        document.cookie = `token=${user.refreshToken}; path=/`;
        // console.log(user);
        router.push("/"); // Set the cookie on login
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        formState.email,
        formState.password
      );
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle error (e.g., show an error message)
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error logging in with Google:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <>
      <div className="flex flex-col items-center w-full justify-center h-screen">
        <div className="flex flex-col gap-y-4 mb-4 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center text-foreground mb-4">
            Spendtify
          </h1>
          <h2 className="text-xl font-semibold">
            Free financial assistant ready to help you at any time
          </h2>
          <p className="text-muted-foreground font-semibold text-md">
            Try it out now!
          </p>
          <GoogleForm onClick={handleGoogleLogin} />
          <span className="text-center">OR</span>
        </div>
        <form
          className="flex flex-col gap-y-4 w-full max-w-sm mb-4"
          onSubmit={handleLogin}
        >
          <InputForm
            name="email"
            value={formState.email}
            onChange={handleInputChange}
          >
            Email
          </InputForm>
          <PasswordInputForm
            name="password"
            value={formState.password}
            onChange={handleInputChange}
          >
            Password
          </PasswordInputForm>
          <Button>Login</Button>
        </form>
        <p className="text-white text-sm">
          Don't have an account?{" "}
          <a href="" className="underline font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </>
  );
}
