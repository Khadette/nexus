import { FiX, FiShoppingBag, FiShield, FiBell } from 'react-icons/fi'
import { useAppContext } from '../../context/AppContext'
import { navGroups } from './navConfig'
import SidebarLink from './SidebarLink'

export default function Sidebar() {
  const { state, toggleSidebar } = useAppContext()
  const { sidebarOpen } = state

  return (
    <>
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <button
          aria-label="Close sidebar"
          onClick={() => toggleSidebar(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={[
          'fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col border-r border-border bg-surface transition-transform duration-200 lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        ].join(' ')}
      >
        <button
          aria-label="Close sidebar"
          onClick={() => toggleSidebar(false)}
          className="absolute right-3 top-3 rounded-md p-1 text-textSecondary hover:bg-page lg:hidden"
        >
          <FiX size={20} />
        </button>

        {/* Centered user profile */}
        <div className="flex flex-col items-center px-5 pb-5 pt-7">
          <img
            src="https://hopeui.iqonic.design/wp-content/uploads/2023/03/logo.png"
            alt="Hope UI"
            className="mb-5 h-7 w-auto"
          />
          <img
            src="https://templates.iqonic.design/hope-ui/html/dist/assets/images/avatars/01.png"
            alt="Profile portrait of the signed-in user"
            className="h-20 w-20 rounded-2xl object-cover"
          />
          <p className="mt-3 text-base font-semibold text-textPrimary">Elon Musk</p>
          <p className="text-sm text-primary">@musk</p>

          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              aria-label="Cart"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"
            >
              <FiShoppingBag size={14} />
            </button>
            <button
              type="button"
              aria-label="Privacy"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"
            >
              <FiShield size={14} />
            </button>
            <button
              type="button"
              aria-label="Notifications"
              className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white"
            >
              <FiBell size={14} />
              <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-red-500" />
            </button>
          </div>
        </div>

        {/* Nav groups */}
        <nav className="flex-1 overflow-y-auto px-4 pb-6">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-6">
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-textSecondary">
                {group.label}
              </p>
              <div className="flex flex-col gap-1">
                {group.items.map((item) => (
                  <SidebarLink
                    key={item.to}
                    {...item}
                    onNavigate={() => toggleSidebar(false)}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}