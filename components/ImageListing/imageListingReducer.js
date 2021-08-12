export const imageListingReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_MORE_IMAGES':
			return {
				...state,
				images: [...state.images, ...action.payload],
				page: state.page + 1,
			}
		case 'RESET_IMAGES':
			return { ...state, images: [], page: 1 }
		case 'SET_HAS_MORE':
			return { ...state, hasMore: action.payload }
		case 'SET_QUERY':
			return { ...state, query: action.payload }
		case 'TOGGLE_VIEW':
			return { ...state, isGridView: !state.isGridView }
		case 'SET_SELECTED_OPTION':
			return { ...state, selectedOption: action.payload }
		case 'SET_OPTIONS':
			return { ...state, options: action.payload }
		case 'SET_LOADING':
			return { ...state, isLoading: action.payload }
		default:
			return { ...state }
	}
}
