import { FiUser, FiShield, FiLogOut } from 'react-icons/fi'
import DropdownMenu from './DropdownMenu'

const menuItems = [
  { label: 'Profile', icon: FiUser },
  { label: 'Privacy Settings', icon: FiShield },
  { label: 'Logout', icon: FiLogOut }
]

/**
 * Profile dropdown in the navbar. View-only — items render and close
 * the menu but perform no navigation or auth side effects.
 */
export default function ProfileDropdown() {
  return (
    <DropdownMenu
      trigger={
        <img
          src="https://i.pravatar.cc/80?img=12"
          alt="Open profile menu"
          className="h-9 w-9 rounded-full object-cover"
        />
      }
    >
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <img
          src="https://i.pravatar.cc/80?img=12"
          alt="Profile portrait of the signed-in user"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-textPrimary">Alex Carter</p>
          <p className="truncate text-xs text-textSecondary">alex.carter@example.com</p>
        </div>
      </div>

      <ul className="py-1">
        {menuItems.map(({ label, icon: Icon }) => (
          <li key={label}>
            <button
              type="button"
              className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-textPrimary transition-colors hover:bg-page"
            >
              <Icon size={16} className="text-textSecondary" />
              {label}
            </button>
          </li>
        ))}
      </ul>
    </DropdownMenu>
  )
}
