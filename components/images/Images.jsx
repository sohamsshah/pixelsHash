import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Image from '../Image/Image'
import Input from '../Input/Input'
import Loader from '../Loader/Loader'
import Alert from '../Alert/Alert'
import englishBadWords from "naughty-words/en.json"


const Images = ({ data }) => {
	const DEFAULT_QUERY = 'code'
	const PER_PAGE = '10'
	const [images, setImages] = useState(data.results)
	const [hasMore, setHasMore] = useState(true)
	const [page, setPage] = useState(2)
	const [query, setQuery] = useState(DEFAULT_QUERY)

	useEffect(() => {
		getMoreImages()
	}, [query])

	const searchImages = (e) => {
		if (e.keyCode === 13) {
			if(englishBadWords.toString().includes(e.target.value)){
				e.target.value = 'code'
				setQuery('code')		
			}else{
				setQuery(e.target.value)	
			}
			setImages([])
			setPage(1)
			setHasMore(true)
		}
	}

	const getMoreImages = async () => {
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
	}
	return (
		<>
			<Input onKeyDown={(e) => searchImages(e)} />
			<InfiniteScroll
				dataLength={images.length}
				next={getMoreImages}
				hasMore={hasMore}
				scrollThreshold={0.99}
				loader={(images.length < 6)?"":<Loader numberOfCards={6} /> }
				endMessage={
					images.length > 3 ? <Alert color="white" bgColor="blue-500">
						{' '}
						Wohoo! You have reached the end! 🎉
					</Alert>:""
				}
			>
				<div className="flex m-3 justify-center">
					<div className="flex flex-wrap gap-2 justify-center">
						{images.map((image, index) => (
							<Image image={image} index={index} key={index} images={images} />
						))}
					</div>
				</div>
				{/* {images.length === 0 ? <Alert color="white" bgColor="blue-500">
						{' '}
						Sorry, nothing to show! Try searching for other keywords 😅
					</Alert> : ""
					}
				{images.length < 3 && images.length > 0? <Alert color="white" bgColor="blue-500">
						{' '}
						Wohoo! You have reached the end! 🎉
					</Alert> : ""} */}
				
			</InfiniteScroll>
		</>
	)
}

export default Images
