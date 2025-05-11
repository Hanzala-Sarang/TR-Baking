import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: ReactNode;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionHeadingProps) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-neutral-600 text-lg max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;