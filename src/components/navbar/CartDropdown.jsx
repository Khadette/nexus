import { FiShoppingCart } from 'react-icons/fi'
import DropdownMenu from './DropdownMenu'
import { cartItems } from '../../data/cartItems'

/**
 * Cart dropdown — mock items only, view-only (no add/remove behavior),
 * matching the reference's "All Carts" panel.
 */
export default function CartDropdown() {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <DropdownMenu
      trigger={
        <span className="relative">
          <FiShoppingCart size={19} />
          <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-white">
            {cartItems.length}
          </span>
        </span>
      }
    >
      <div className="border-b border-border px-4 py-3">
        <h3 className="text-sm font-semibold text-textPrimary">All Carts</h3>
      </div>

      <ul className="max-h-72 overflow-y-auto py-2">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center gap-3 px-4 py-2">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-11 w-11 rounded-[10px] object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-textPrimary">{item.title}</p>
              <p className="text-xs text-textSecondary">${item.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between border-t border-border px-4 py-3">
        <span className="text-sm font-semibold text-textPrimary">Total</span>
        <span className="text-sm font-semibold text-primary">${total.toFixed(2)}</span>
      </div>
    </DropdownMenu>
  )
}
