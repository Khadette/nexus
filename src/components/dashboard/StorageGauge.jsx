/**
 * Semi-circle gauge for storage usage, drawn with plain SVG (no chart
 * library needed for a single static arc).
 */
export default function StorageGauge({ usedGb, totalGb }) {
  const radius = 90
  const center = 100
  const circumference = Math.PI * radius
  const percent = Math.min(usedGb / totalGb, 1)
  const dashOffset = circumference * (1 - percent)

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 200 110" className="w-full max-w-[260px]">
        <path
          d={`M10,${center} A${radius},${radius} 0 0,1 190,${center}`}
          fill="none"
          stroke="#E9ECEF"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path
          d={`M10,${center} A${radius},${radius} 0 0,1 190,${center}`}
          fill="none"
          stroke="#3A57E8"
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </svg>

      <div className="-mt-8 flex flex-col items-center">
        <span className="text-3xl font-bold text-textSecondary">{usedGb}GB</span>
        <span className="mt-1 text-sm font-semibold text-primary">used of {totalGb}GB</span>
      </div>
    </div>
  )
}
