import React from 'react'

interface ButtonProps {
  className?: string
  text: string
  onClick: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  text,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} py-2 px-4 rounded font-bold 
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
