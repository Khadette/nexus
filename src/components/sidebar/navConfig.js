import {
  FiGrid,
  FiImage,
  FiVideo,
  FiFileText,
  FiFolder,
  FiTrash2,
  FiLogOut
} from 'react-icons/fi'

/**
 * Static nav configuration for the sidebar, grouped exactly like the
 * reference: FILE MANAGER, PAGES, OTHER. `badge`, when present, renders
 * a small count pill next to the label (e.g. All Files → 21).
 */
export const navGroups = [
  {
    label: 'File Manager',
    items: [{ to: '/', label: 'Dashboard', icon: FiGrid, end: true }]
  },
  {
    label: 'Pages',
    items: [
      { to: '/images', label: 'Image', icon: FiImage },
      { to: '/videos', label: 'Video', icon: FiVideo },
      { to: '/documents', label: 'Document', icon: FiFileText },
      { to: '/all-files', label: 'All Files', icon: FiFolder, badge: 21 },
      { to: '/trash', label: 'Trash', icon: FiTrash2 }
    ]
  },
  {
    label: 'Other',
    items: [{ to: '/sign-out', label: 'Sign Out', icon: FiLogOut }]
  }
]
