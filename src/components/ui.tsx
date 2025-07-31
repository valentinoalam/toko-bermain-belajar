"use client"

import type React from "react"

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`rounded-md shadow-sm bg-white ${className}`}>{children}</div>
}

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "outline" | "destructive"
  style?: React.CSSProperties
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, variant = "default", style }) => {
  let buttonClass =
    "rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  switch (variant) {
    case "outline":
      buttonClass += " border border-gray-200 bg-transparent hover:bg-gray-100"
      break
    case "destructive":
      buttonClass += " bg-red-500 text-white hover:bg-red-600"
      break
    default:
      buttonClass += " bg-blue-500 text-white hover:bg-blue-600"
      break
  }

  buttonClass += ` ${className || ""}`

  return (
    <button onClick={onClick} className={buttonClass} style={style}>
      {children}
    </button>
  )
}
