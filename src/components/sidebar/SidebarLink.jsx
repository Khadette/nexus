import { NavLink } from 'react-router-dom'

/**
 * One sidebar item. Active route gets the primary-blue left-bordered
 * treatment; inactive items get a quiet hover state.
 */
export default function SidebarLink({ to, label, icon: Icon, end = false, badge, onNavigate }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          'group flex items-center gap-3 rounded-[10px] border-l-[3px] px-3 py-2.5 text-sm font-medium transition-colors duration-150',
          isActive
            ? 'border-primary bg-primary-50 text-primary'
            : 'border-transparent text-textSecondary hover:bg-page hover:text-textPrimary'
        ].join(' ')
      }
    >
      <Icon size={18} className="shrink-0" />
      <span className="flex-1 truncate">{label}</span>
      {badge !== undefined && (
        <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-600">
          {badge}
        </span>
      )}
    </NavLink>
  )
}
