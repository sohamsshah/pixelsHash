import Alert from './../Alert/Alert'
import noResults from './../../assets/images/noResults.gif'
import Image from 'next/image'
import { noResultsString } from '../../data/strings'
const NoResults = () => {
	return (
		<div className="flex justify-center items-center flex-col">
			<Image
				className="w-96 h-96"
				alt="no results image"
				height={400}
				width={400}
				src={noResults}
			/>

			<div>
				<Alert color="white" bgColor="black">
					{noResultsString}
				</Alert>
			</div>
		</div>
	)
}

export default NoResults
