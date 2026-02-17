import { ButtonHTMLAttributes } from "react"
import clsx from "clsx"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "success" | "danger"
}

export function Button({ variant = "primary", className, ...props }: Props) {
  const variantStyles = {
    primary: "bg-[var(--color-primary)]",
    success: "bg-[var(--color-success)]",
    danger: "bg-[var(--color-danger)]"
  }

  return (
    <button
      className={clsx(
        "px-[var(--space-md)] py-[var(--space-sm)] rounded-[var(--radius-md)] text-white transition hover:opacity-90",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
}