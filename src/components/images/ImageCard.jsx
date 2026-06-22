import { formatCreatedDate, relativeTime } from '../../utils/relativeTime'

/**
 * Image card. Used identically in the "Recently viewed" rail and the
 * "All Images" grid — same component, different container layout —
 * so there is no duplicated markup for the two sections.
 */
export default function ImageCard({ image, onOpen, className = '' }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(image)}
      className={[
        'group flex flex-col overflow-hidden rounded-card border border-border bg-surface text-left shadow-card transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-none',
        className
      ].join(' ')}
    >
      <span className="aspect-[4/3] w-full overflow-hidden bg-page">
        <img
          src={image.thumbnail}
          alt={image.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </span>

      <span className="flex flex-col gap-1 px-3 py-3">
        <span className="truncate text-sm font-semibold text-textPrimary">{image.name}</span>
        <span className="text-xs text-textSecondary">Created on {formatCreatedDate(image.createdAt)}</span>
        <span className="text-xs text-textSecondary">
          You opened <span className="font-medium text-textPrimary">{relativeTime(image.lastOpened)}</span>
        </span>
      </span>
    </button>
  )
}
