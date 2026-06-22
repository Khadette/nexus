import { useRef, useState } from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useClickOutside } from '../../utils/useClickOutside'

/**
 * One folder card. The 3-dot button opens a tiny view-only menu
 * (Open / Rename / Delete) — no destructive action is wired up,
 * matching the project's view-only scope.
 */
export default function FolderCard({ folder }) {
  const { name, itemCount, icon: Icon, route } = folder
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useClickOutside(menuRef, () => setMenuOpen(false), menuOpen)

  return (
    <div className="relative flex flex-col rounded-card border border-border bg-surface p-5 shadow-card transition-transform duration-150 hover:-translate-y-0.5">
      <div className="mb-4 flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary">
          <Icon size={18} />
        </span>

        <div ref={menuRef} className="relative">
          <button
            type="button"
            aria-label={`Options for ${name}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-md p-1 text-textSecondary hover:bg-page"
          >
            <FiMoreVertical size={16} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-7 z-10 w-32 rounded-card border border-border bg-surface py-1 shadow-card">
              <Link
                to={route}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-1.5 text-sm text-textPrimary hover:bg-page"
              >
                Open
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="block w-full px-3 py-1.5 text-left text-sm text-textPrimary hover:bg-page"
              >
                Rename
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="block w-full px-3 py-1.5 text-left text-sm text-textPrimary hover:bg-page"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <Link to={route} className="text-base font-semibold text-textPrimary hover:text-primary">
        {name}
      </Link>
      <span className="mt-1 text-sm text-textSecondary">{itemCount} Items</span>
    </div>
  )
}
