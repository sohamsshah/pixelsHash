import { useEffect, useReducer } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import ImageCard from '../ImageCard/ImageCard'
import Loader from '../Loader/Loader'
import englishBadWords from 'naughty-words/en.json'
import Navbar from '../Navbar/Navbar'
import NoResults from '../NoResults/NoResults'
import { getOptions, searchImages } from './utils'
import { DEFAULT_QUERY, PER_PAGE, defaultOptions, SCROLL_THRESHOLD } from '../../data/constants'
import { imageListingReducer } from './imageListingReducer'

const ImageListing = ({ data }) => {
	const [
		{ images, hasMore, options, page, query, isGridView, selectedOption, isLoading },
		imageListingDispatch,
	] = useReducer(imageListingReducer, {
		images: [...data.results],
		hasMore: true,
		query: DEFAULT_QUERY,
		isGridView: true,
		selectedOption: null,
		options: defaultOptions,
		isLoading: false,
		page: 2,
	})
	useEffect(() => {
		;(async function () {
			await getMoreImages()
		})()
	}, [query])

	useEffect(() => {
		const res = getOptions()
		imageListingDispatch({ type: 'SET_OPTIONS', payload: res.slice(0, 5) })
	}, [])

	const getMoreImages = async () => {
		try {
			imageListingDispatch({ type: 'SET_LOADING', payload: true })
			const res = await fetch(
				`https://api.unsplash.com/search/photos?client_id=${process.env.API_ACCESS_KEY}&query=${query}&page=${page}&per_page=${PER_PAGE}`,
			)
			const newPosts = await res.json()
			if (newPosts.total_pages < page) {
				imageListingDispatch({ type: 'SET_HAS_MORE', payload: false })
			} else {
				imageListingDispatch({ type: 'ADD_MORE_IMAGES', payload: newPosts.results })
			}
		} catch (error) {
			console.log(error.response)
		} finally {
			imageListingDispatch({ type: 'SET_LOADING', payload: false })
		}
	}
	return (
		<>
			<div className="flex justify-center">
				<Navbar
					isGridView={isGridView}
					searchImages={(e) =>
						searchImages(e, selectedOption, imageListingDispatch, englishBadWords)
					}
					selectedOption={selectedOption}
					setSelectedOption={(value) =>
						imageListingDispatch({ type: 'SET_SELECTED_OPTION', payload: value })
					}
					options={options}
					imageListingDispatch={imageListingDispatch}
				/>
			</div>
			<InfiniteScroll
				dataLength={images.length}
				next={getMoreImages}
				hasMore={hasMore}
				scrollThreshold={SCROLL_THRESHOLD}
				loader={images.length > 6 && <Loader isGridView={isGridView} numberOfItems={3} />}
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

export default ImageListing
