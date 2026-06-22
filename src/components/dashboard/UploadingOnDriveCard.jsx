import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { uploadsInProgress } from '../../data/uploadsInProgress'

/**
 * "Uploading on Drive" panel. The × button removes a row from local
 * component state only — there is no upload happening to cancel,
 * it's purely a visual interaction matching the reference.
 */
export default function UploadingOnDriveCard() {
  const [uploads, setUploads] = useState(uploadsInProgress)

  return (
    <section className="rounded-card border border-border bg-surface p-5 shadow-card">
      <h2 className="mb-4 text-lg font-bold text-textPrimary">Uploading on Drive</h2>

      <div className="flex max-h-96 flex-col gap-4 overflow-y-auto pr-1">
        {uploads.map((upload) => (
          <div key={upload.id} className="flex items-center gap-3">
            <span className="w-28 shrink-0 truncate text-sm text-textPrimary">{upload.name}</span>
            <div className="h-1.5 flex-1 rounded-full bg-page">
              <div
                className="h-1.5 rounded-full bg-primary"
                style={{ width: `${upload.percent}%` }}
              />
            </div>
            <span className="w-12 shrink-0 text-right text-sm text-textSecondary">{upload.size}</span>
            <button
              type="button"
              aria-label={`Remove ${upload.name} from list`}
              onClick={() => setUploads((prev) => prev.filter((item) => item.id !== upload.id))}
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary-50 text-primary hover:bg-primary-100"
            >
              <FiX size={13} />
            </button>
          </div>
        ))}

        {uploads.length === 0 && (
          <p className="py-4 text-center text-sm text-textSecondary">No uploads in progress.</p>
        )}
      </div>
    </section>
  )
}
