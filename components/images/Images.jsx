import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Image from '../Image/Image'
import Input from '../Input/Input'
import Loader from '../Loader/Loader'

const Images = ({ data }) => {
	const DEFAULT_QUERY = 'code'
	const [images, setImages] = useState(data.results)
	const [hasMore, setHasMore] = useState(true)
	const [page, setPage] = useState(2)
	const [query, setQuery] = useState(DEFAULT_QUERY)

	useEffect(() => {
		getMoreImages()
	}, [query])

	const searchImages = (e) => {
		if (e.keyCode === 13) {
			setQuery(e.target.value)
			setImages([])
			setPage(1)
			setHasMore(true)
		}
	}

	const getMoreImages = async () => {
		const res = await fetch(
			`https://api.unsplash.com/search/photos?client_id=${process.env.API_ACCESS_KEY}&query=${query}&page=${page}&per_page=20`,
		)
		const newPosts = await res.json()
		if (newPosts.total_pages < page) {
			setHasMore(false)
		} else {
			setImages((images) => [...images, ...newPosts.results])
			setPage(page + 1)
		}
	}
	return (
		<>
			<Input onKeyDown={(e) => searchImages(e)} />
			<InfiniteScroll
				dataLength={images.length}
				next={getMoreImages}
				hasMore={hasMore}
				scrollThreshold={0.99}
				loader={<Loader numberOfCards={6} />}
				endMessage={<h4>Nothing more to show</h4>}
			>
				<div className="flex m-3 justify-center">
					<div className="flex flex-wrap gap-2 justify-center">
						{images.map((image, index) => (
							<Image image={image} index={index} images={images} />
						))}
					</div>
				</div>
			</InfiniteScroll>
		</>
	)
}

export default Images
