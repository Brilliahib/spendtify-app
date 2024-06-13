import { cn } from "@/lib/utils";

const Button = ({
  children = "Button",
  className,
  variant = "primary",
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "destructive" | "outline";
}) => {
  const buttonVariant = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 border-primary",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/90 border-border",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive",
    outline:
      "border bg-background text-foreground hover:bg-secondary border-border",
  };

  return (
    <button
      className={cn(
        "anim flex items-center rounded-md border px-4 py-2 font-semibold justify-center text-sm",
        className,
        buttonVariant[variant]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
