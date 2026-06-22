import { useRef, useState } from 'react'
import { useClickOutside } from '../../utils/useClickOutside'

/**
 * Shared dropdown shell used by Cart, Notification, and Profile menus.
 * Owns its own open/closed state locally — that UI toggle is ephemeral
 * presentation state, not part of the centralized app store.
 */
export default function DropdownMenu({
  trigger,
  children,
  align = 'right',
  widthClass = 'w-80',
  panelClassName = '',
  triggerClassName = 'flex h-10 w-10 items-center justify-center rounded-full text-textSecondary transition-colors hover:bg-page hover:text-textPrimary'
}) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useClickOutside(containerRef, () => setOpen(false), open)

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={triggerClassName}
      >
        {trigger}
      </button>

      {open && (
        <div
          role="menu"
          className={[
            'absolute top-full z-50 mt-2 rounded-card border border-border bg-surface shadow-card',
            widthClass,
            align === 'right' ? 'right-0' : 'left-0',
            panelClassName
          ].join(' ')}
        >
          {children}
        </div>
      )}
    </div>
  )
}
