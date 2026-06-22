import { createContext, useContext, useMemo, useReducer } from 'react'
import { appReducer, ActionTypes } from './AppReducer'
import { initialState } from './initialState'

const AppContext = createContext(undefined)

/**
 * Wraps the application and provides centralized state via Context + useReducer.
 * Also exposes a small set of memoized selectors and action helpers so
 * components never need to know about action shapes or derive lists themselves.
 */
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const filteredImages = useMemo(() => {
    const query = state.searchQuery.trim().toLowerCase()
    if (!query) return state.images
    return state.images.filter((image) => image.name.toLowerCase().includes(query))
  }, [state.images, state.searchQuery])

  const recentlyViewed = useMemo(() => {
    // Derived from the same `images` array — sorted by most recently opened,
    // never stored as a separate list.
    return [...state.images]
      .sort((a, b) => new Date(b.lastOpened).getTime() - new Date(a.lastOpened).getTime())
      .slice(0, 8)
  }, [state.images])

  const actions = useMemo(
    () => ({
      setSearchQuery: (query) => dispatch({ type: ActionTypes.SET_SEARCH_QUERY, payload: query }),
      selectImage: (image) => dispatch({ type: ActionTypes.SELECT_IMAGE, payload: image }),
      closeImage: () => dispatch({ type: ActionTypes.CLOSE_IMAGE }),
      toggleSidebar: (open) => dispatch({ type: ActionTypes.TOGGLE_SIDEBAR, payload: open }),
      setTheme: (theme) => dispatch({ type: ActionTypes.SET_THEME, payload: theme })
    }),
    []
  )

  const value = useMemo(
    () => ({
      state,
      dispatch,
      filteredImages,
      recentlyViewed,
      ...actions
    }),
    [state, filteredImages, recentlyViewed, actions]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

/**
 * Hook for consuming the centralized app store.
 * Throws if used outside of <AppProvider> to fail fast during development.
 */
export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
