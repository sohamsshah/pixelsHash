import { useEffect, useReducer } from 'react'
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll'
import ImageCard from '../ImageCard/ImageCard'
import Loader from '../Loader/Loader'
import Navbar from '../Navbar/Navbar'
import NoResults from '../NoResults/NoResults'
import { getOptions, searchImages } from './utils'
import { DEFAULT_QUERY, PER_PAGE, defaultOptions, VISIBILITY_THRESHOLD } from '../../data/constants'
import { imageListingReducer } from './imageListingReducer'
import axios from 'axios'

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
		page: 2, // initialize with page 2 because page 1 was fetched via SSG
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
		// make an API call to get more images
		try {
			imageListingDispatch({ type: 'SET_LOADING', payload: true })
			const response = await axios.get(
				`https://api.unsplash.com/search/photos?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_ACCESS_KEY}&query=${query}&page=${page}&per_page=${PER_PAGE}`,
			)
			if (response.status === 200) {
				const newPosts = response.data
				if (newPosts.total_pages < page) {
					imageListingDispatch({ type: 'SET_HAS_MORE', payload: false })
				} else {
					imageListingDispatch({ type: 'ADD_MORE_IMAGES', payload: newPosts.results })
				}
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
					searchImages={(e) => searchImages(e, selectedOption, imageListingDispatch)}
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
				hasMore={hasMore}
				next={getMoreImages}
				loader={images.length > 6 && <Loader isGridView={isGridView} numberOfItems={3} />}
				threshold={VISIBILITY_THRESHOLD}
			>
				<div className="flex m-3 justify-center">
					<div
						className={`flex flex-wrap gap-4 justify-center ${
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
				{images.length === 0 && !isLoading && <NoResults />}
			</InfiniteScroll>
		</>
	)
}

export default ImageListing
