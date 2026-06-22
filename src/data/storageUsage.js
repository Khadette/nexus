/**
 * Storage usage summary shown under the gauge in "Storage Details".
 * `percent` drives each row's progress bar width.
 */
export const storageUsage = {
  usedGb: 75,
  totalGb: 100,
  breakdown: [
    { label: 'Documents', count: '5,674s', percent: 78, barClass: 'bg-primary' },
    { label: 'Videos', count: '1,624', percent: 45, barClass: 'bg-emerald-500' },
    { label: 'Images', count: '5,515', percent: 60, barClass: 'bg-orange-500' }
  ]
}
