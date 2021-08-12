import { defaultOptions } from '../../data/constants'
export const getOptions = () => {
	const history = localStorage.getItem('history')
	if (history === null) {
		return defaultOptions
	}
	return JSON.parse(history)
}
