interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''}`}>
      {label && (
        <p
          className={`section-label mb-3 ${
            light ? 'text-white/50' : 'text-kr-muted'
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`editorial-heading text-3xl lg:text-4xl xl:text-5xl ${
          light ? 'text-white' : 'text-kr-charcoal'
        } ${align === 'center' ? 'mx-auto' : ''} max-w-3xl`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base lg:text-lg leading-relaxed ${
            light ? 'text-white/60' : 'text-kr-slate'
          } max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
