import DropdownMenu from './DropdownMenu'
import NavMenuList from './NavMenuList'

/**
 * One top-level nav item (Home / Pages / Elements). Click opens the
 * first-level panel below the trigger; any nested levels inside it
 * are handled by <NavMenuList> via hover flyouts.
 */
export default function NavMenuItem({ label, icon: Icon, items, active = false }) {
  return (
    <DropdownMenu
      align="left"
      widthClass="w-56"
      triggerClassName={[
        'flex items-center gap-1.5 border-b-2 pb-1 text-sm font-medium transition-colors',
        active
          ? 'border-primary text-primary'
          : 'border-transparent text-textPrimary hover:text-primary'
      ].join(' ')}
      trigger={
        <>
          <Icon size={16} />
          {label}
        </>
      }
    >
      <NavMenuList items={items} />
    </DropdownMenu>
  )
}
