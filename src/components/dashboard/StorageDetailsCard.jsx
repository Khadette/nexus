import { storageUsage } from '../../data/storageUsage'
import StorageGauge from './StorageGauge'

export default function StorageDetailsCard() {
  return (
    <section className="rounded-card border border-border bg-surface p-5 shadow-card">
      <h2 className="mb-4 text-lg font-bold text-textPrimary">Storage Details</h2>

      <StorageGauge usedGb={storageUsage.usedGb} totalGb={storageUsage.totalGb} />

      <div className="mt-6 flex flex-col gap-4">
        {storageUsage.breakdown.map((row) => (
          <div key={row.label} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-textPrimary">{row.label}</span>
              <span className="text-textSecondary">{row.count}</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-page">
              <div
                className={`h-1.5 rounded-full ${row.barClass}`}
                style={{ width: `${row.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
