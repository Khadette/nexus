import { FiSearch } from 'react-icons/fi'
import { useAppContext } from '../../context/AppContext'

/**
 * Filename search input. Reads/writes `searchQuery` directly on the
 * centralized store — no local component state, no duplicate source of truth.
 */
export default function SearchBar() {
  const { state, setSearchQuery } = useAppContext()

  return (
    <label className="relative hidden w-full max-w-sm items-center sm:flex">
      <FiSearch className="pointer-events-none absolute left-3 text-textSecondary" size={16} />
      <span className="sr-only">Search images by file name</span>
      <input
        type="search"
        value={state.searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search files..."
        className="w-full rounded-[10px] border border-border bg-page py-2 pl-9 pr-3 text-sm text-textPrimary placeholder:text-textSecondary focus-visible:border-primary"
      />
    </label>
  )
}
