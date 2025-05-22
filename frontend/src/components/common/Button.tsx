import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  // Base classes applied to all buttons
  const baseClasses = `
    inline-flex items-center justify-center
    font-['Montserrat'] font-bold text-sm uppercase tracking-wider
    px-6 py-3
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    rounded-[4px]
  `;

  // Variant-specific classes
  let variantClasses = '';
  switch (variant) {
    case 'primary':
      variantClasses = `
        bg-[#CB6843] text-white
        hover:bg-[#A85735]
        focus:ring-[#CB6843]
      `;
      break;
    case 'secondary':
      variantClasses = `
        border-2 border-[#593D2B] text-[#593D2B] bg-transparent
        hover:bg-[#593D2B] hover:text-white
        focus:ring-[#593D2B]
      `;
      break;
    default:
      // Fallback to primary if an unknown variant is passed
      variantClasses = `
        bg-[#CB6843] text-white
        hover:bg-[#A85735]
        focus:ring-[#CB6843]
      `;
      break;
  }

  return (
    <button
      type={type}
      className={`
        ${baseClasses}
        ${variantClasses}
        ${className}
        ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;