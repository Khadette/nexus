import { FiTrash2 } from 'react-icons/fi'
import { trashedItems } from '../data/trashedItems'
import { relativeTime } from '../utils/relativeTime'

/**
 * Trash page. Lists mock deleted items for visual completeness only —
 * per spec there is no restore or permanent-delete functionality.
 */
export default function TrashPage() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-textPrimary">Trash</h1>
      </div>

      {trashedItems.length === 0 ? (
        <p className="text-sm text-textSecondary">Trash is empty.</p>
      ) : (
        <div className="overflow-hidden rounded-card border border-border bg-surface shadow-card">
          <table className="w-full text-left text-sm">
            <thead className="bg-page text-xs uppercase tracking-wider text-textSecondary">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="hidden px-4 py-3 font-medium sm:table-cell">Type</th>
                <th className="hidden px-4 py-3 font-medium md:table-cell">Size</th>
                <th className="px-4 py-3 font-medium">Deleted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {trashedItems.map((item) => (
                <tr key={item.id} className="text-textSecondary transition-colors hover:bg-page">
                  <td className="flex items-center gap-3 px-4 py-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-page text-textSecondary">
                      <FiTrash2 size={16} />
                    </span>
                    <span className="truncate font-medium text-textPrimary">{item.name}</span>
                  </td>
                  <td className="hidden px-4 py-3 sm:table-cell">{item.type}</td>
                  <td className="hidden px-4 py-3 md:table-cell">{item.size}</td>
                  <td className="px-4 py-3">{relativeTime(item.deletedAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
