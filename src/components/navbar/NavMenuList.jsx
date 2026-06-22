import { useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'

/**
 * Renders one level of a mega-menu list. Any item with a `children`
 * array gets a chevron and opens a flyout panel to its right on hover —
 * that flyout is just another <NavMenuList>, so nesting is unlimited.
 */
export default function NavMenuList({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <ul className="py-2">
      {items.map((item, index) => {
        const hasChildren = Array.isArray(item.children) && item.children.length > 0

        return (
          <li
            key={item.label}
            className="relative"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-2 px-4 py-2 text-left text-sm text-textSecondary transition-colors hover:bg-page hover:text-primary"
            >
              <span className="truncate">{item.label}</span>
              {hasChildren && <FiChevronRight size={14} className="shrink-0" />}
            </button>

            {hasChildren && openIndex === index && (
              <div className="absolute left-full top-0 z-50 ml-1 w-56 rounded-card border border-border bg-surface shadow-card">
                <NavMenuList items={item.children} />
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
