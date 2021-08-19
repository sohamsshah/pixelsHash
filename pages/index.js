import Head from 'next/head'
import axios from 'axios'
import ImageListing from '../components/ImageListing/ImageListing'
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton'
export default function Home({ imageData }) {
	return (
		<>
			<Head>
				<title>pixelsHash</title>
				<meta
					name="description"
					content="pixelsHash: The Go-to place for High Quality, Beautiful and Picturesque 3-D matrices of Pixels - hashed perfectly for you to describe your thoughts in high resolution! 🖼⚡ You can view, search and download everything that you want! Powered By Unsplash!"
				></meta>
				<meta
					property="og:title"
					content="pixelsHash: 📸 pixels turned into life"
					key="title"
				></meta>
				<meta property="og:image" content="/pixelsHashLogo.png"></meta>
				<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-icon-192x192.png"
				/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff"></meta>
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png"></meta>
				<meta name="theme-color" content="#ffffff"></meta>
			</Head>
			<main>
				{imageData === null ? (
					<div className="flex h-screen justify-center items-center">
						<div>
							<h1 className="p-2 text-6xl">Ooops...</h1>
							<h2 className="p-2 text-4xl">
								Something went wrong. Try again later :(
							</h2>
						</div>
					</div>
				) : (
					<div>
						<ImageListing data={imageData} />
						<ScrollToTopButton />
					</div>
				)}
			</main>
		</>
	)
}

export const getStaticProps = async () => {
	let imageData = null
	try {
		const response = await axios.get(
			`https://api.unsplash.com/search/photos?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_ACCESS_KEY}&query=code&page=1&per_page=10`,
		)
		if (response.status === 200) {
			imageData = response.data
		}
	} catch (error) {
		console.log(error.response)
	}
	return {
		props: { imageData },
	}
}
