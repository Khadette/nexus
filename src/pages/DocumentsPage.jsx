import { FiFileText } from 'react-icons/fi'
import { documents } from '../data/documents'
import { formatCreatedDate, relativeTime } from '../utils/relativeTime'

/**
 * Documents page. Uses a row-based list rather than a card grid since
 * documents are typically scanned by name/type rather than thumbnail.
 */
export default function DocumentsPage() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-textPrimary">Documents</h1>
      </div>

      <div className="overflow-hidden rounded-card border border-border bg-surface shadow-card">
        <table className="w-full text-left text-sm">
          <thead className="bg-page text-xs uppercase tracking-wider text-textSecondary">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="hidden px-4 py-3 font-medium sm:table-cell">Type</th>
              <th className="hidden px-4 py-3 font-medium md:table-cell">Size</th>
              <th className="hidden px-4 py-3 font-medium lg:table-cell">Created</th>
              <th className="px-4 py-3 font-medium">Opened</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {documents.map((doc) => (
              <tr key={doc.id} className="transition-colors hover:bg-page">
                <td className="flex items-center gap-3 px-4 py-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-primary-50 text-primary">
                    <FiFileText size={16} />
                  </span>
                  <span className="truncate font-medium text-textPrimary">{doc.name}</span>
                </td>
                <td className="hidden px-4 py-3 text-textSecondary sm:table-cell">{doc.type}</td>
                <td className="hidden px-4 py-3 text-textSecondary md:table-cell">{doc.size}</td>
                <td className="hidden px-4 py-3 text-textSecondary lg:table-cell">
                  {formatCreatedDate(doc.createdAt)}
                </td>
                <td className="px-4 py-3 text-textSecondary">{relativeTime(doc.lastOpened)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
