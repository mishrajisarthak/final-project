import { forwardRef } from 'react'

const Button = forwardRef(({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  fullWidth = false,
  size = 'md',
  ...props
}, ref) => {
  const baseClasses = 'btn flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2'
  
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5',
    lg: 'px-8 py-3 text-lg'
  }
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-300 disabled:bg-primary-300',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-300 disabled:bg-secondary-300',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-300 disabled:bg-accent-300',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-200',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-200'
  }
  
  const classes = [
    baseClasses,
    sizeClasses[size] || sizeClasses.md,
    variantClasses[variant] || variantClasses.primary,
    fullWidth ? 'w-full' : '',
    disabled ? 'cursor-not-allowed opacity-70' : '',
    className
  ].join(' ')

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button