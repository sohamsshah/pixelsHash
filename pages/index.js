import Head from 'next/head'
import Images from '../components/Images/Images'
import Link from 'next/link'

export default function Home(props) {
	return (
		<>
			<div>
				<Images data={props.data} />
			</div>
		</>
	)
}

export const getStaticProps = async () => {
	const data = await fetch(
		`https://api.unsplash.com/search/photos?client_id=${process.env.API_ACCESS_KEY}&query=code&page=1&per_page=20`,
	).then((response) => response.json())
	return {
		props: { data },
	}
}
