import BioDetails from '../BioDetails/BioDetails'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import SocialLinks from '../SocialLinks/SocialLinks'
import { creatorDetailsStrings } from '../../data/strings'
const CreatorDetails = ({ image: { user } }) => {
	return (
		<div>
			<div className="font-bold text-lg mb-2">{creatorDetailsStrings.title}</div>
			<ProfileDetails user={user} />
			<SocialLinks social={user.social} />

			{user.bio && <BioDetails bio={user.bio} />}
		</div>
	)
}

export default CreatorDetails
