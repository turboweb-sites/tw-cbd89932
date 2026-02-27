interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionTitle({
  label,
  title,
  description,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {label && (
        <span className="inline-block text-primary-500 text-sm font-semibold tracking-widest uppercase mb-4">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-dark-300' : 'text-dark-300'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}