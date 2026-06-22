import { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { recentlyAddedFiles } from '../../data/recentlyAddedFiles'

/**
 * "Recently added files" table. The trash icon removes a row from
 * local state only — view-only per the project's scope, no backend
 * delete call is made.
 */
export default function RecentlyAddedFilesCard() {
  const [files, setFiles] = useState(recentlyAddedFiles)

  return (
    <section className="rounded-card border border-border bg-surface p-5 shadow-card">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-bold text-textPrimary">Recently added files</h2>
        <Link to="/all-files" className="text-sm font-medium text-primary hover:underline">
          View all
        </Link>
      </div>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border text-xs uppercase tracking-wider text-textSecondary">
            <th className="py-3 font-medium">Files</th>
            <th className="hidden py-3 font-medium sm:table-cell">Last Modified</th>
            <th className="py-3 font-medium">Size</th>
            <th className="py-3" />
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {files.map((file) => (
            <tr key={file.id}>
              <td className="flex items-center gap-3 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-primary-50 text-primary">
                  <file.icon size={16} />
                </span>
                <span className="truncate font-medium text-textPrimary">{file.name}</span>
              </td>
              <td className="hidden py-3 text-textSecondary sm:table-cell">{file.lastModified}</td>
              <td className="py-3 font-medium text-primary">{file.size}</td>
              <td className="py-3 text-right">
                <button
                  type="button"
                  aria-label={`Remove ${file.name}`}
                  onClick={() => setFiles((prev) => prev.filter((item) => item.id !== file.id))}
                  className="rounded-md p-1.5 text-red-400 hover:bg-red-50"
                >
                  <FiTrash2 size={16} />
                </button>
              </td>
            </tr>
          ))}

          {files.length === 0 && (
            <tr>
              <td colSpan={4} className="py-6 text-center text-textSecondary">
                No recent files.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  )
}
