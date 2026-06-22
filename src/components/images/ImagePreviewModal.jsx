import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import { useAppContext } from '../../context/AppContext'
import { formatCreatedDate, relativeTime } from '../../utils/relativeTime'

/**
 * Image preview modal. Purely view-only: shows the large image plus
 * metadata, and a close action. No edit or delete affordances per spec.
 */
export default function ImagePreviewModal() {
  const { state, closeImage } = useAppContext()
  const { selectedImage } = state

  useEffect(() => {
    if (!selectedImage) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') closeImage()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, closeImage])

  if (!selectedImage) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Preview of ${selectedImage.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
    >
      <button
        aria-label="Close preview"
        onClick={closeImage}
        className="absolute inset-0 cursor-default"
      />

      <div className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-card bg-surface shadow-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="truncate text-sm font-semibold text-textPrimary">{selectedImage.name}</h2>
          <button
            aria-label="Close preview"
            onClick={closeImage}
            className="rounded-md p-1.5 text-textSecondary hover:bg-page hover:text-textPrimary"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto bg-page">
          <img
            src={selectedImage.thumbnail}
            alt={selectedImage.name}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-1 border-t border-border px-5 py-4 text-sm">
          <p className="text-textSecondary">
            Created on <span className="font-medium text-textPrimary">{formatCreatedDate(selectedImage.createdAt)}</span>
          </p>
          <p className="text-textSecondary">
            You opened <span className="font-medium text-textPrimary">{relativeTime(selectedImage.lastOpened)}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
