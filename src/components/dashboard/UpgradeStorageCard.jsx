import Button from '../common/Button'

/**
 * Small inline illustration standing in for the reference's folder +
 * shield artwork — an original simple shape, not a copied asset.
 */
function StorageIllustration() {
  return (
    <svg width="120" height="110" viewBox="0 0 120 110" aria-hidden="true">
      <rect x="14" y="28" width="92" height="62" rx="10" fill="#1F2A44" />
      <rect x="22" y="18" width="50" height="20" rx="6" fill="#3A57E8" />
      <rect x="14" y="36" width="92" height="54" rx="10" fill="#2F3B5C" />
      <circle cx="60" cy="64" r="16" fill="#FFFFFF" />
      <path
        d="M53 64 L58 69 L68 58"
        stroke="#3A57E8"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export default function UpgradeStorageCard() {
  return (
    <section className="flex flex-col items-center rounded-card border border-border bg-surface p-6 text-center shadow-card">
      <StorageIllustration />
      <p className="mt-5 text-base font-semibold text-textPrimary">
        Upgrade to Special Offer For Unlimited Storage
      </p>
      <Button className="mt-5 w-full justify-center">Buy storage</Button>
    </section>
  )
}
