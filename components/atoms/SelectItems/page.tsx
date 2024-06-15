import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps {
  name?: string;
  value: string;
  onChange: (value: string) => void;
}

export function SelectItems({
  name = "category",
  value,
  onChange,
}: SelectProps) {
  return (
    <Select name={name} value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="income">Income</SelectItem>
          <SelectItem value="expenses">Expenses</SelectItem>
          <SelectItem value="balance">Balance</SelectItem>
          <SelectItem value="investments">Investments</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
