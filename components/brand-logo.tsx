import { cn } from "@/lib/utils"

interface BrandLogoProps {
  variant?: "light" | "dark"
  className?: string
}

export default function BrandLogo({ variant = "dark", className }: BrandLogoProps) {
  const isLight = variant === "light"

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* Icon mark */}
      <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-primary shadow-md shrink-0">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Oil drop */}
          <path
            d="M12 3C12 3 7 9.5 7 13.5C7 16.538 9.239 19 12 19C14.761 19 17 16.538 17 13.5C17 9.5 12 3Z"
            fill="white"
            fillOpacity="0.95"
          />
          {/* Wrench */}
          <path
            d="M16.5 4.5C15.12 4.5 14 5.62 14 7C14 7.37 14.08 7.72 14.22 8.04L10.26 12H9V14H7V16H10V14.5H11.74L15.96 10.28C16.28 10.42 16.63 10.5 17 10.5C18.38 10.5 19.5 9.38 19.5 8C19.5 7.63 19.42 7.28 19.28 6.96L17.56 8.68L15.82 6.94L17.54 5.22C17.22 4.76 16.88 4.5 16.5 4.5Z"
            fill="white"
            fillOpacity="0.7"
          />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading font-extrabold tracking-tight text-base leading-none",
            isLight ? "text-white" : "text-foreground"
          )}
        >
          LUBRICENTRO
        </span>
        <span
          className={cn(
            "font-heading font-bold tracking-widest text-[11px] uppercase leading-tight mt-0.5",
            isLight ? "text-accent" : "text-primary"
          )}
        >
          Canning
        </span>
      </div>
    </div>
  )
}
