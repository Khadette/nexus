import { images } from '../data/images'

/**
 * Initial application state.
 *
 * `images` is the single source of truth — the recently-viewed rail,
 * the all-images grid, and search results are all derived from this
 * one array rather than being copied into separate lists.
 */
export const initialState = {
  images,
  searchQuery: '',
  selectedImage: null,
  sidebarOpen: true,
  theme: 'light'
}
