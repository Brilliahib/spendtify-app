import React from "react";
import { cn } from "@/lib/utils";

type CardWalletProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "income" | "ballance" | "expenses" | "investments";
};

const CardWallet = ({
  children,
  className,
  variant = "income",
}: CardWalletProps) => {
  const CardWalletVariant: { [key: string]: string } = {
    income: "bg-[#1c2e1b]",
    ballance: "bg-[#1c2e1b]",
    expenses: "bg-[#301d1d]",
    investments: "bg-[#2e2c1b]",
  };

  const headerChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.props["data-type"] === "header") {
      return React.cloneElement(child);
    }
    return null;
  });

  const mainChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.props["data-type"] === "main") {
      return React.cloneElement(child);
    }
    return null;
  });

  return (
    <div className="card p-5 bg-[#191919] rounded-xl lg:min-h-[250px] min-h-[200px] flex flex-col">
      <div className="header-status">
        <div
          className={cn(
            "py-1 px-2 rounded-md text-sm inline-block",
            className,
            CardWalletVariant[variant]
          )}
        >
          {headerChildren}
        </div>
      </div>
      <div className="main-status flex-1 flex items-end">
        <div className="flex flex-col space-y-2">{mainChildren}</div>
      </div>
    </div>
  );
};

export default CardWallet;
