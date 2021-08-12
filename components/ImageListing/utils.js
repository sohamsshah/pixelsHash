import { defaultOptions, REPLACED_PROFANE_WORD } from '../../data/constants'
import englishBadWords from 'naughty-words/en.json'
export const getOptions = () => {
	// get select options from local storage history 
	const history = localStorage.getItem('history')
	if (history === null) {
		return defaultOptions
	}
	return JSON.parse(history)
}

const saveQueryToHistory = (query, imageListingDispatch) => {
	// check if history exists, if not save default options to history
	if (localStorage.getItem('history') === null) {
		localStorage.setItem('history', JSON.stringify(defaultOptions))
	}
	let userHistory = JSON.parse(localStorage.getItem('history'))
	const newHistoryItem = { value: query, label: query }
	// if same history value already exists, remove it
	userHistory = userHistory.filter((item) => item.value != newHistoryItem.value)
	// add new history item to the first index of userHistory - stack implementation
	userHistory.unshift(newHistoryItem)
	localStorage.setItem('history', JSON.stringify(userHistory))
	imageListingDispatch({ type: 'SET_OPTIONS', payload: userHistory.slice(0, 5) })
	imageListingDispatch({ type: 'SET_SELECTED_OPTION', payload: newHistoryItem })
}

export const searchImages = (e, selectedOption, imageListingDispatch) => {
	if (e.keyCode === 13) { // if enter is pressed
		if (e.target.value === '') {
			e.target.value = selectedOption.value
		}
		if (isBadWord(e.target.value)) {
			// Replace search value with REPLACED word and search for that query instead
			e.target.value = REPLACED_PROFANE_WORD
			imageListingDispatch({ type: 'SET_QUERY', payload: REPLACED_PROFANE_WORD })
		} else {
			// search input query 
			imageListingDispatch({ type: 'SET_QUERY', payload: e.target.value })
		}
		// empty images array in state and add to history
		imageListingDispatch({ type: 'RESET_IMAGES' })
		saveQueryToHistory(e.target.value, imageListingDispatch)
		imageListingDispatch({ type: 'SET_HAS_MORE', payload: true })
	}
}

export const isBadWord = (word) => {
	// returns true if the word is bad word, else false
	let englishBadWordsArray = []
	for (let i in englishBadWords) {
		englishBadWordsArray.push(englishBadWords[i])
	}
	return englishBadWordsArray.find((item) => item === word)
}
