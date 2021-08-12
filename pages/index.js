import ImageListing from '../components/ImageListing/ImageListing'
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton'
export default function Home({ imageData }) {
	return (
		<>
			{imageData === null || imageData.errors ? (
				<p className="text-center">Something went wrong.. Please try again later!</p>
			) : (
				<div>
					<ImageListing data={imageData} />
					<ScrollToTopButton />
				</div>
			)}
		</>
	)
}

export const getStaticProps = async () => {
	let imageData = null
	try {
		const data = await fetch(
			`https://api.unsplash.com/search/photos?client_id=${process.env.API_ACCESS_KEY}&query=code&page=1&per_page=20`,
		)
		imageData = await data.json()
	} catch (error) {
		console.log(error.response)
	}
	return {
		props: { imageData },
	}
}
