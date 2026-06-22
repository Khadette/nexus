/**
 * Converts an ISO date string into a Hope UI style relative phrase,
 * e.g. "just now", "2 hours ago", "2 days ago", "a month ago".
 *
 * @param {string} isoDate - ISO 8601 date string.
 * @returns {string} Human readable relative time.
 */
export function relativeTime(isoDate) {
  if (!isoDate) return ''

  const now = new Date()
  const then = new Date(isoDate)
  const diffMs = now.getTime() - then.getTime()

  if (Number.isNaN(diffMs)) return ''

  const seconds = Math.floor(diffMs / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)

  if (seconds < 45) return 'just now'
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`
  if (days === 1) return 'yesterday'
  if (days < 30) return `${days} day${days === 1 ? '' : 's'} ago`
  if (months < 12) return months <= 1 ? 'a month ago' : `${months} months ago`
  return years <= 1 ? 'a year ago' : `${years} years ago`
}

/**
 * Formats an ISO date string into "Created on Mon DD, YYYY" style text
 * matching the reference design's date format.
 *
 * @param {string} isoDate - ISO 8601 date string.
 * @returns {string} Formatted creation date label.
 */
export function formatCreatedDate(isoDate) {
  if (!isoDate) return ''
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return ''

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  })
}
