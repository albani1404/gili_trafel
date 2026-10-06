import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer select-none';

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  secondary: 'border border-line bg-white text-ink hover:border-brand hover:text-brand',
  accent: 'bg-accent text-ink hover:bg-accent-dark',
  light: 'bg-white text-ink hover:bg-sand',
  'outline-light': 'border border-white/60 text-white hover:bg-white/10',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-[0.9375rem]',
  lg: 'px-7 py-3.5 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  className = '',
  icon: Icon,
  ...props
}) {
  const classes = `${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />}
    </>
  );

  // Internal route (e.g. "/#contact"): client-side navigation
  if (href && href.startsWith('/')) {
    return (
      <Link to={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isAnchor = href.startsWith('#');
    return (
      <a
        href={href}
        className={classes}
        {...(isAnchor ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
