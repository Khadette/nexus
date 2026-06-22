import { FiUsers, FiVideo, FiFile, FiVolume2, FiPlayCircle, FiEdit3, FiFolder, FiStar } from 'react-icons/fi'

/**
 * Folder tiles shown in the dashboard's "Your Folders" section.
 * `icon` + `tint` drive the small circular badge per card.
 */
export const folders = [
  { id: 1, name: 'Image', itemCount: 246, icon: FiUsers, route: '/images' },
  { id: 2, name: 'Video', itemCount: 246, icon: FiVideo, route: '/videos' },
  { id: 3, name: 'Documents', itemCount: 246, icon: FiFile, route: '/documents' },
  { id: 4, name: 'Audio', itemCount: 246, icon: FiVolume2, route: '/all-files' },
  { id: 5, name: 'Movies', itemCount: 246, icon: FiPlayCircle, route: '/videos' },
  { id: 6, name: 'Assignment', itemCount: 246, icon: FiEdit3, route: '/documents' },
  { id: 7, name: 'Ui-Kit', itemCount: 246, icon: FiFolder, route: '/all-files' },
  { id: 8, name: 'Design', itemCount: 246, icon: FiStar, route: '/images' }
]
