import { cloudStorageAccounts } from '../../data/cloudStorageAccounts'

export default function CloudStorageCard() {
  return (
    <section className="rounded-card border border-border bg-surface p-5 shadow-card">
      <h2 className="mb-4 text-lg font-bold text-textPrimary">Cloud Storage</h2>

      <div className="flex flex-col gap-5">
        {cloudStorageAccounts.map((account) => (
          <div key={account.id}>
            <div className="mb-2 flex items-center gap-2">
              <account.icon size={18} className={account.iconClass} />
              <span className="text-sm font-semibold text-textPrimary">{account.name}</span>
            </div>

            <div className="mb-1.5 flex items-center justify-between text-xs text-textSecondary">
              <span>{account.usedGb}gb</span>
              <span>{account.totalGb}gb</span>
            </div>

            <div className="h-1.5 w-full rounded-full bg-page">
              <div
                className="h-1.5 rounded-full bg-primary"
                style={{ width: `${(account.usedGb / account.totalGb) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
