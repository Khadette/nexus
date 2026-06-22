/**
 * Reusable button. Visually matches the reference "Add Image" CTA —
 * solid primary fill, pill-ish rounded corners, icon + label.
 * Intentionally has no side effects; onClick is optional so it can be
 * used purely for visual parity where no functionality is required.
 */
export default function Button({
  children,
  icon: Icon,
  variant = 'primary',
  onClick,
  type = 'button',
  className = ''
}) {
  const base =
    'inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-600 shadow-sm',
    ghost: 'bg-transparent text-textPrimary hover:bg-page',
    outline: 'border border-border text-textPrimary hover:bg-page'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
    >
      {Icon ? <Icon size={16} /> : null}
      <span>{children}</span>
    </button>
  )
}
