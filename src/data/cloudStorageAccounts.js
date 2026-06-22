import { SiDropbox, SiGoogledrive } from 'react-icons/si'
import { FiCloud } from 'react-icons/fi'

/**
 * Connected cloud storage accounts shown in the "Cloud Storage" panel.
 * `usedGb` / `totalGb` drive each row's progress bar.
 */
export const cloudStorageAccounts = [
  { id: 1, name: 'Drop Box', usedGb: 32, totalGb: 48, icon: SiDropbox, iconClass: 'text-blue-500' },
  { id: 2, name: 'One Drive', usedGb: 10, totalGb: 48, icon: FiCloud, iconClass: 'text-sky-500' },
  { id: 3, name: 'Google Drive', usedGb: 15, totalGb: 48, icon: SiGoogledrive, iconClass: 'text-emerald-500' }
]
