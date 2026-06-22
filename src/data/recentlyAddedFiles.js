import { FiImage, FiFileText, FiVideo } from 'react-icons/fi'

/**
 * Recently added files shown in the dashboard table. Distinct from
 * `data/images.js` — this widget mixes file types, matching the
 * reference's "Recently added files" panel.
 */
export const recentlyAddedFiles = [
  { id: 1, name: 'Marcus Family.jpg', lastModified: '16 Oct, 11:23am', size: '12 MB', icon: FiImage },
  { id: 2, name: 'Work.Doc', lastModified: '20 Nov, 12:40pm', size: '4.3 MB', icon: FiFileText },
  { id: 3, name: 'Apha.mkv', lastModified: '08 Oct, 05:45pm', size: '10 MB', icon: FiVideo },
  { id: 4, name: 'SVG Logo.png', lastModified: '04 Jul, 10:30pm', size: '9 MB', icon: FiImage }
]
