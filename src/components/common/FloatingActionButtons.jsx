import { useState } from 'react'
import { FiShoppingBag, FiSettings } from 'react-icons/fi'

/**
 * Fixed vertical action rail docked to the right viewport edge —
 * Buy Now / Settings / Landing Pages, matching the reference's
 * floating tabs. Buy Now and Landing Pages are external links;
 * Settings just toggles a visual pressed state (no panel wired up).
 */
export default function FloatingActionButtons() {
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <div className="fixed right-0 top-1/2 z-40 flex -translate-y-1/2 flex-col items-end gap-3">
      <a
        href="https://iqonic.design/product/hope-ui-pro/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 rounded-l-[10px] bg-emerald-500 px-2 py-4 text-white shadow-card transition-transform hover:-translate-x-1"
      >
        <FiShoppingBag size={16} />
        <span className="text-xs font-semibold tracking-wide [writing-mode:vertical-rl]">
          Buy Now
        </span>
      </a>
      <button
        type="button"
        aria-pressed={settingsOpen}
        aria-label="Toggle settings"
        onClick={() => setSettingsOpen((prev) => !prev)}
        className={[
          'flex h-11 w-11 items-center justify-center rounded-full text-white shadow-card transition-transform',
          settingsOpen ? 'rotate-45 bg-orange-600' : 'bg-orange-500'
        ].join(' ')}
      >
        <FiSettings size={18} />
      </button>

      <a
        href="https://iqonic.design/templates/category/landing-page/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-l-[10px] bg-[#0B1437] px-2 py-4 text-white shadow-card transition-transform hover:-translate-x-1"
      >
        <span className="text-xs font-semibold tracking-wide [writing-mode:vertical-rl]">
          Landing Pages
        </span>
      </a>
    </div>
  )
}