import { defaultOptions, REPLACED_PROFANE_WORD } from '../../data/constants'
export const getOptions = () => {
	const history = localStorage.getItem('history')
	if (history === null) {
		return defaultOptions
	}
	return JSON.parse(history)
}

const saveQueryToHistory = (query, imageListingDispatch) => {
	if (localStorage.getItem('history') === null) {
		localStorage.setItem('history', JSON.stringify(defaultOptions))
	}
	let userHistory = JSON.parse(localStorage.getItem('history'))
	const newHistoryItem = { value: query.toLowerCase(), label: query }
	userHistory = userHistory.filter((item) => item.value != newHistoryItem.value)
	userHistory.unshift(newHistoryItem)
	localStorage.setItem('history', JSON.stringify(userHistory))
	imageListingDispatch({ type: 'SET_OPTIONS', payload: userHistory.slice(0, 5) })
	imageListingDispatch({ type: 'SET_SELECTED_OPTION', payload: newHistoryItem })
}

export const searchImages = (e, selectedOption, imageListingDispatch, englishBadWords) => {
	if (e.keyCode === 13) {
		if (e.target.value === '') {
			e.target.value = selectedOption.value
		}
		let englishBadWordsArray = []
		for (let i in englishBadWords) {
			englishBadWordsArray.push(englishBadWords[i])
		}
		if (englishBadWordsArray.find((item) => item === e.target.value)) {
			e.target.value = REPLACED_PROFANE_WORD
			imageListingDispatch({ type: 'SET_QUERY', payload: REPLACED_PROFANE_WORD })
		} else {
			imageListingDispatch({ type: 'SET_QUERY', payload: e.target.value })
		}
		imageListingDispatch({ type: 'RESET_IMAGES' })
		saveQueryToHistory(e.target.value, imageListingDispatch)
		imageListingDispatch({ type: 'SET_HAS_MORE', payload: true })
	}
}
