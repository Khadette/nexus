import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  FiArrowLeft,
  FiHome,
  FiFileText,
  FiMessageSquare,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiMaximize2
} from 'react-icons/fi'
import { useAppContext } from '../../context/AppContext'
import NavMenuItem from './NavMenuItem'
import { homeMenu, pagesMenu, elementsMenu } from './navMenuData'

const fontSizes = [
  { key: 'sm', label: 'A', textClass: 'text-xs' },
  { key: 'md', label: 'A', textClass: 'text-sm' },
  { key: 'lg', label: 'A', textClass: 'text-base' }
]

const pageLabels = {
  '/': 'Dashboard',
  '/images': 'Image',
  '/videos': 'Video',
  '/documents': 'Document',
  '/all-files': 'All Files',
  '/trash': 'Trash'
}

const homeRoutes = ['/', '/images', '/videos', '/documents', '/all-files', '/trash']

export default function Navbar() {
  const { state, setSearchQuery } = useAppContext()
  const [activeSize, setActiveSize] = useState('md')
  const location = useLocation()
  const navigate = useNavigate()

  const currentLabel = pageLabels[location.pathname] ?? 'Dashboard'
  const isHomeActive = homeRoutes.includes(location.pathname)

  return (
    <header className="sticky top-0 z-20 flex items-center gap-4 border-b border-border bg-surface px-4 py-2.5 sm:px-6">
      {/* Back button */}
      <button
        type="button"
        aria-label="Go back"
        onClick={() => navigate(-1)}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white transition-opacity hover:opacity-90"
      >
        <FiArrowLeft size={15} />
      </button>

      {/* Current section label */}
      <span className="text-sm text-textSecondary">{currentLabel}</span>

      {/* Primary horizontal menu */}
      <nav className="ml-2 hidden items-center gap-6 md:flex">
        <NavMenuItem label="Home" icon={FiHome} items={homeMenu} active={isHomeActive} />
        <NavMenuItem label="Pages" icon={FiFileText} items={pagesMenu} />
        <NavMenuItem label="Elements" icon={FiMessageSquare} items={elementsMenu} />
      </nav>

      {/* Right-hand cluster */}
      <div className="ml-auto flex items-center gap-3">
        {/* Font size selector */}
        <div className="hidden items-center gap-1 sm:flex">
          {fontSizes.map(({ key, label, textClass }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveSize(key)}
              aria-pressed={activeSize === key}
              aria-label={`Set font size ${key}`}
              className={[
                'flex h-7 w-7 items-center justify-center rounded-md font-semibold transition-colors',
                textClass,
                activeSize === key
                  ? 'bg-primary text-white'
                  : 'text-textSecondary hover:bg-page'
              ].join(' ')}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Search */}
        <label className="relative hidden items-center sm:flex">
          <span className="sr-only">Search</span>
          <input
            type="search"
            value={state.searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search..."
            className="w-40 rounded-[10px] border border-border bg-page py-1.5 pl-3 pr-8 text-sm text-textPrimary placeholder:text-textSecondary focus-visible:border-primary lg:w-56"
          />
          <FiSearch className="pointer-events-none absolute right-2.5 text-textSecondary" size={15} />
        </label>

        {/* Cart */}
        <button
          type="button"
          aria-label="Open cart"
          className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary"
        >
          <FiShoppingBag size={16} />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <button
          type="button"
          aria-label="Open profile menu"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary"
        >
          <FiUser size={16} />
        </button>

        {/* Expand / customizer */}
        <button
          type="button"
          aria-label="Expand"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white"
        >
          <FiMaximize2 size={15} />
        </button>
      </div>
    </header>
  )
}