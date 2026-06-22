import { useAppContext } from '../../context/AppContext'
import ImageCard from './ImageCard'

/**
 * "Recently viewed" rail. Reads `recentlyViewed`, a memoized selector
 * derived from the same `images` array used by the grid below —
 * there is no separate "recent images" list in state.
 */
export default function RecentlyViewed() {
  const { recentlyViewed, selectImage } = useAppContext()

  if (recentlyViewed.length === 0) return null

  return (
    <section aria-labelledby="recently-viewed-heading" className="mb-8">
      <h2 id="recently-viewed-heading" className="mb-3 text-base font-semibold text-textPrimary">
        Recently viewed
      </h2>

      <div className="scrollbar-thin flex gap-4 overflow-x-auto pb-2">
        {recentlyViewed.map((image) => (
          <ImageCard
            key={image.id}
            image={image}
            onOpen={selectImage}
            className="w-56 shrink-0"
          />
        ))}
      </div>
    </section>
  )
}
