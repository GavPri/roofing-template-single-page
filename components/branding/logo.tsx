// logo component
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "icon" | "text";
  href?: string;
  logoSrc?: string;
}

const sizeClasses = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-12 w-12",
  xl: "h-16 w-16",
};

const textSizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
};

export function Logo({
  className,
  size = "md",
  variant = "default",
  href,
  logoSrc = "/branding/logo.svg",
}: LogoProps) {
  const LogoIcon = () => (
    <div className={cn("flex items-center justify-center", sizeClasses[size])}>
      <Image
        src={logoSrc || "/placeholder.svg"}
        alt="Top Tier Roofing - Austin's Premier Roofing Contractor"
        width={
          Number.parseInt(sizeClasses[size].split("h-")[1].split(" ")[0]) * 4
        } // Convert h-6 to 24px, h-8 to 32px, etc.
        height={
          Number.parseInt(sizeClasses[size].split("h-")[1].split(" ")[0]) * 4
        }
        className={cn("object-contain", sizeClasses[size])}
        priority
      />
    </div>
  );

  const LogoText = () => (
    <span className={cn("font-bold text-foreground", textSizeClasses[size])}>
      Top Tier Roofing
    </span>
  );

  const LogoContent = () => {
    switch (variant) {
      case "icon":
        return <LogoIcon />;
      case "text":
        return <LogoText />;
      default:
        return (
          <div className="flex items-center gap-2">
            <LogoIcon />
            <LogoText />
          </div>
        );
    }
  };

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "inline-flex items-center transition-opacity hover:opacity-80",
          className
        )}
      >
        <LogoContent />
      </a>
    );
  }

  return (
    <div className={cn("inline-flex items-center", className)}>
      <LogoContent />
    </div>
  );
}
