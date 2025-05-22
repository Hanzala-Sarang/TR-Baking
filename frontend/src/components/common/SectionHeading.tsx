import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: ReactNode; // Can be a string or a React element
  centered?: boolean;
  className?: string; // Allows overriding external styles
}

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionHeadingProps) => {
  return (
    <div
      className={`
        mb-12 md:mb-16 /* Increased bottom margin for better spacing */
        ${centered ? 'text-center' : ''} /* Applies text-align: center to children */
        ${className}
      `}
    >
      <h2
        className={`
          text-3xl sm:text-4xl md:text-5xl lg:text-5xl /* Enhanced font sizes for impact */
          font-['Montserrat'] font-bold uppercase tracking-wider /* Sturdy font, bold, uppercase, wide tracking */
          mb-4 /* Spacing below the title */
        `}
        style={{ color: '#593D2B' }} /* Rich Brown for the title */
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`
            text-base md:text-lg lg:text-xl /* Readable subtitle font size */
            font-['Roboto'] leading-relaxed /* Assuming Roboto for body text, relaxed line height for readability */
            max-w-3xl ${centered ? 'mx-auto' : ''} /* Constrain width for optimal line length and center if needed */
          `}
          style={{ color: '#3C3C3C' }} /* Dark Gray for the subtitle */
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;