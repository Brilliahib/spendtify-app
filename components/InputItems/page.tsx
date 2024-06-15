import React, { ReactNode, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";

interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}

export function InputItems({
  type = "text",
  placeholder = "",
  name = "",
  value,
  onChange,
  children,
}: InputProps) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
}
