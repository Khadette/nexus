export const ActionTypes = {
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  SELECT_IMAGE: 'SELECT_IMAGE',
  CLOSE_IMAGE: 'CLOSE_IMAGE',
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
  SET_THEME: 'SET_THEME'
}

/**
 * Root reducer for the application store.
 *
 * @param {object} state - Current state.
 * @param {{type: string, payload?: any}} action - Dispatched action.
 * @returns {object} Next state.
 */
export function appReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      }

    case ActionTypes.SELECT_IMAGE:
      return {
        ...state,
        selectedImage: action.payload
      }

    case ActionTypes.CLOSE_IMAGE:
      return {
        ...state,
        selectedImage: null
      }

    case ActionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: typeof action.payload === 'boolean' ? action.payload : !state.sidebarOpen
      }

    case ActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload
      }

    default:
      return state
  }
}
