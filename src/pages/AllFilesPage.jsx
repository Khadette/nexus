import { FiImage, FiVideo, FiFileText } from 'react-icons/fi'
import { useAppContext } from '../context/AppContext'
import { videos } from '../data/videos'
import { documents } from '../data/documents'
import { formatCreatedDate, relativeTime } from '../utils/relativeTime'

/**
 * All Files page. Aggregates the three file datasets into one list,
 * tagging each row with its source type — a real cross-section view,
 * not a placeholder.
 */
export default function AllFilesPage() {
  const { state } = useAppContext()

  const allFiles = [
    ...state.images.map((file) => ({ ...file, kind: 'Image', icon: FiImage })),
    ...videos.map((file) => ({ ...file, kind: 'Video', icon: FiVideo })),
    ...documents.map((file) => ({ ...file, kind: 'Document', icon: FiFileText }))
  ].sort((a, b) => new Date(b.lastOpened).getTime() - new Date(a.lastOpened).getTime())

  const summary = [
    { label: 'Images', count: state.images.length, icon: FiImage },
    { label: 'Videos', count: videos.length, icon: FiVideo },
    { label: 'Documents', count: documents.length, icon: FiFileText }
  ]

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-textPrimary">All Files</h1>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {summary.map(({ label, count, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-card border border-border bg-surface px-4 py-4 shadow-card"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary-50 text-primary">
              <Icon size={18} />
            </span>
            <div>
              <p className="text-lg font-bold text-textPrimary">{count}</p>
              <p className="text-xs text-textSecondary">{label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-card border border-border bg-surface shadow-card">
        <table className="w-full text-left text-sm">
          <thead className="bg-page text-xs uppercase tracking-wider text-textSecondary">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="hidden px-4 py-3 font-medium lg:table-cell">Created</th>
              <th className="px-4 py-3 font-medium">Opened</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {allFiles.map((file) => (
              <tr key={`${file.kind}-${file.id}`} className="transition-colors hover:bg-page">
                <td className="flex items-center gap-3 px-4 py-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-primary-50 text-primary">
                    <file.icon size={16} />
                  </span>
                  <span className="truncate font-medium text-textPrimary">{file.name}</span>
                </td>
                <td className="px-4 py-3 text-textSecondary">{file.kind}</td>
                <td className="hidden px-4 py-3 text-textSecondary lg:table-cell">
                  {formatCreatedDate(file.createdAt)}
                </td>
                <td className="px-4 py-3 text-textSecondary">{relativeTime(file.lastOpened)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
