import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import ImageCard from '../ImageCard/ImageCard'
import Loader from '../Loader/Loader'
import englishBadWords from 'naughty-words/en.json'
import Navbar from '../Navbar/Navbar'
import NoResults from '../NoResults/NoResults'

const Images = ({ data }) => {
	const DEFAULT_QUERY = 'code'
	const PER_PAGE = '10'
	const [images, setImages] = useState(data.results)
	const [hasMore, setHasMore] = useState(true)
	const [page, setPage] = useState(2)
	const [query, setQuery] = useState(DEFAULT_QUERY)
	const [isGridView, setIsGridView] = useState(false)
	const [selectedOption, setSelectedOption] = useState(null)
	const [options, setOptions] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const defaultOptions = [
		{ value: 'nature', label: 'Nature' },
		{ value: 'people', label: 'People' },
		{ value: 'wallpapers', label: 'Wallpapers' },
	]

	useEffect(() => {
		getMoreImages()
	}, [query])

	useEffect(() => {
		;(async function () {
			const res = await getOptions()
			setOptions(res.slice(0, 5))
		})()
	}, [])

	const getOptions = async () => {
		const history = await localStorage.getItem('history')
		if (history === null) {
			return defaultOptions
		}
		return JSON.parse(history)
	}
	const saveQueryToHistory = (query) => {
		if (localStorage.getItem('history') === null) {
			localStorage.setItem('history', JSON.stringify(defaultOptions))
		}
		let userHistory = JSON.parse(localStorage.getItem('history'))
		const newHistoryItem = { value: query.toLowerCase(), label: query }
		userHistory = userHistory.filter((item) => item.value != newHistoryItem.value)
		userHistory.unshift(newHistoryItem)
		localStorage.setItem('history', JSON.stringify(userHistory))
		setOptions(userHistory.slice(0, 5))
		setSelectedOption(newHistoryItem)
	}
	const searchImages = (e) => {
		if (e.keyCode === 13) {
			if (e.target.value === '') {
				e.target.value = selectedOption.value
			}
			console.log(typeof englishBadWords)
			let englishBadWordsArray = []
			for (let i in englishBadWords) {
				englishBadWordsArray.push(englishBadWords[i])
			}
			if (englishBadWordsArray.find((item) => item === e.target.value)) {
				e.target.value = 'bad word'
				setQuery('bad word')
			} else {
				setQuery(e.target.value)
			}
			setImages([])
			setPage(1)
			saveQueryToHistory(e.target.value)
			setHasMore(true)
		}
	}

	const getMoreImages = async () => {
		try {
			setIsLoading(true)
			const res = await fetch(
				`https://api.unsplash.com/search/photos?client_id=${process.env.API_ACCESS_KEY}&query=${query}&page=${page}&per_page=${PER_PAGE}`,
			)
			const newPosts = await res.json()
			if (newPosts.total_pages < page) {
				setHasMore(false)
			} else {
				setImages((images) => [...images, ...newPosts.results])
				setPage(page + 1)
			}
		} catch (error) {
			console.log(error.response)
		} finally {
			setIsLoading(false)
		}
	}
	return (
		<>
			<div className="flex justify-center">
				<Navbar
					isGridView={isGridView}
					searchImages={searchImages}
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
					options={options}
					setIsGridView={setIsGridView}
				/>
			</div>
			<InfiniteScroll
				dataLength={images.length}
				next={getMoreImages}
				hasMore={hasMore}
				scrollThreshold={0.99}
				loader={images.length < 6 && <Loader isGridView={isGridView} numberOfItems={3} />}
			>
				<div className="flex m-3 justify-center">
					<div
						className={`flex flex-wrap gap-2 justify-center ${
							!isGridView ? 'flex-col' : ''
						}`}
					>
						{images.map((image, index) => (
							<ImageCard
								image={image}
								index={index}
								key={index}
								images={images}
								isGridView={isGridView}
							/>
						))}
					</div>
				</div>
			</InfiniteScroll>
			{images.length === 0 && !isLoading && <NoResults />}
		</>
	)
}

export default Images
