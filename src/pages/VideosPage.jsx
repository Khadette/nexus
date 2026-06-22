import { FiPlay } from 'react-icons/fi'
import { videos } from '../data/videos'
import { formatCreatedDate, relativeTime } from '../utils/relativeTime'

/**
 * Videos page. Mirrors the Images page's card-grid pattern using the
 * video mock dataset — view-only, no playback wiring required.
 */
export default function VideosPage() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-textPrimary">Videos</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex flex-col overflow-hidden rounded-card border border-border bg-surface shadow-card"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-page">
              <img src={video.thumbnail} alt={video.name} className="h-full w-full object-cover" />
              <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary">
                  <FiPlay size={16} />
                </span>
              </span>
              <span className="absolute bottom-2 right-2 rounded-md bg-black/70 px-1.5 py-0.5 text-[11px] font-medium text-white">
                {video.duration}
              </span>
            </div>
            <div className="flex flex-col gap-1 px-3 py-3">
              <span className="truncate text-sm font-semibold text-textPrimary">{video.name}</span>
              <span className="text-xs text-textSecondary">Created on {formatCreatedDate(video.createdAt)}</span>
              <span className="text-xs text-textSecondary">
                You opened <span className="font-medium text-textPrimary">{relativeTime(video.lastOpened)}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
