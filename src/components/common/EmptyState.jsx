import { FiImage } from 'react-icons/fi'

/**
 * Shown when a search query matches no images.
 * Speaks in the interface's voice: explains what happened, not an apology.
 */
export default function EmptyState({ query }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-card border border-dashed border-border bg-surface px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary">
        <FiImage size={26} />
      </div>
      <h3 className="text-base font-semibold text-textPrimary">No images match &ldquo;{query}&rdquo;</h3>
      <p className="mt-1 text-sm text-textSecondary">
        Check the spelling or try a different file name.
      </p>
    </div>
  )
}
