import { FiPlus } from 'react-icons/fi'
import Button from '../components/common/Button'
import RecentlyViewed from '../components/images/RecentlyViewed'
import ImageGrid from '../components/images/ImageGrid'

/**
 * "File Manager → Image Folder" page — the primary page being cloned.
 * Header + CTA, recently-viewed rail, and the full searchable image grid.
 */
export default function ImagesPage() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-textPrimary">Images</h1>
        <Button icon={FiPlus}>Add Image</Button>
      </div>

      <RecentlyViewed />
      <ImageGrid />
    </div>
  )
}
