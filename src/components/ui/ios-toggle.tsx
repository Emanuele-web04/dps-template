"use client"

import { useState } from "react"

interface ToggleProps {
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  size?: "sm" | "md" | "lg"
}

export default function IOSToggle({ defaultChecked = true, onChange, disabled = false, size = "md" }: ToggleProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked)

  const handleToggle = () => {
    if (disabled) return

    const newValue = !isChecked
    setIsChecked(newValue)
    onChange?.(newValue)
  }

  // Size configurations
  const sizeConfig = {
    md: {
      container: "w-12 h-7",
      circle: "w-5 h-5",
      translate: "translate-x-6",
    },
  }

  const config = sizeConfig.md

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={disabled}
      className={`
        ${config.container}
        relative flex items-center rounded-full
        transition-colors duration-200 ease-in-out
        focus:outline-none
        ${isChecked ? "bg-sky-500" : "bg-gray-300"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
      role="switch"
      aria-checked={isChecked}
    >
      <span
        className={`
          ${config.circle}
          inline-block rounded-full bg-white shadow-lg
          transform transition-transform duration-200 ease-in-out
          ${isChecked ? config.translate : "translate-x-1"}
        `}
      />
    </button>
  )
}

