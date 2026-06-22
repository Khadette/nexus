import { FiBell } from 'react-icons/fi'
import DropdownMenu from './DropdownMenu'
import { notifications } from '../../data/notifications'

/**
 * Notification dropdown — static mock list, view-only.
 * Unread items get a small primary-colored dot, matching common
 * Hope UI–style notification treatments.
 */
export default function NotificationDropdown() {
  const unreadCount = notifications.filter((item) => item.unread).length

  return (
    <DropdownMenu
      trigger={
        <span className="relative">
          <FiBell size={19} />
          {unreadCount > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-white">
              {unreadCount}
            </span>
          )}
        </span>
      }
    >
      <div className="border-b border-border px-4 py-3">
        <h3 className="text-sm font-semibold text-textPrimary">Notifications</h3>
      </div>

      <ul className="max-h-80 overflow-y-auto py-1">
        {notifications.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-page"
          >
            <span
              className={[
                'mt-1.5 h-2 w-2 shrink-0 rounded-full',
                item.unread ? 'bg-primary' : 'bg-border'
              ].join(' ')}
              aria-hidden="true"
            />
            <div className="min-w-0">
              <p className="text-sm font-medium text-textPrimary">{item.title}</p>
              <p className="truncate text-xs text-textSecondary">{item.message}</p>
              <p className="mt-1 text-[11px] text-textSecondary">{item.timestamp}</p>
            </div>
          </li>
        ))}
      </ul>
    </DropdownMenu>
  )
}
