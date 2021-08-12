import { creatorDetailsStrings } from '../../data/strings'
const BioDetails = ({ bio }) => {
	return (
		<div>
			<span className="font-bold text-lg mb-2">{creatorDetailsStrings.bioText}</span>
			<div>{bio}</div>
		</div>
	)
}

export default BioDetails
