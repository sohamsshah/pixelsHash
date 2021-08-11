import Alert from './../Alert/Alert'
import noResults from './../../assets/images/noResults.gif'
const NoResults = () => {
	return (
		<div className="flex justify-center items-center flex-col">
			<img className="w-96 h-96" src={noResults.src} />

			<div>
				<Alert color="white" bgColor="black">
					Sorry, no results match your search! Try searching for other keywords 😅
				</Alert>
			</div>
		</div>
	)
}

export default NoResults
