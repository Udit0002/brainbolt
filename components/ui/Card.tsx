import { ReactNode } from "react"

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl 
        bg-white/5 
        border border-white/10 
        shadow-xl 
        p-6 
        ${className}
      `}
    >
      {children}
    </div>
  )
}