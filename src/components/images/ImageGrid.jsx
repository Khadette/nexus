import { useAppContext } from '../../context/AppContext'
import ImageCard from './ImageCard'
import EmptyState from '../common/EmptyState'

/**
 * "All Images" grid. Reads `filteredImages`, which is the full image
 * list narrowed by `searchQuery` — same underlying array as the
 * recently-viewed rail, just filtered, never duplicated.
 */
export default function ImageGrid() {
  const { filteredImages, state, selectImage } = useAppContext()

  if (filteredImages.length === 0) {
    return <EmptyState query={state.searchQuery} />
  }

  return (
    <section aria-labelledby="all-images-heading">
      <h2 id="all-images-heading" className="mb-3 text-base font-semibold text-textPrimary">
        All images
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredImages.map((image) => (
          <ImageCard key={image.id} image={image} onOpen={selectImage} />
        ))}
      </div>
    </section>
  )
}
