import Link from 'next/link'

const NotFound = () => {
	return (
		<div className="flex h-screen justify-center items-center">
			<div>
				<h1 className="p-2 text-6xl">Ooops...</h1>
				<h2 className="p-2 text-4xl">That page cannot be found :(</h2>
				<p className="p-2 text-xl">
					Go back to the{' '}
					<Link href="/">
						<a className="underline">Homepage</a>
					</Link>
				</p>
			</div>
		</div>
	)
}

export default NotFound
