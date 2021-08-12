import { MdiTwitter } from './../../assets/svgs/TwitterIcon'
import { MdiInstagram } from './../../assets/svgs/InstagramIcon'
import { MdiWeb } from './../../assets/svgs/InternetIcon'
import { socialLinksStrings } from './../../data/strings'

const SocialLinks = ({ social }) => {
	return (
		<div className="my-5 flex justify-start">
			{social.instagram_username !== null && (
				<div>
					<a
						target="_blank"
						rel="noreferrer"
						href={`${socialLinksStrings.instagram}${social.instagram_username}`}
					>
						<MdiInstagram className="text-3xl mr-2" />
					</a>
				</div>
			)}

			{social.twitter_username && (
				<div>
					<a
						target="_blank"
						rel="noreferrer"
						href={`${socialLinksStrings.twitter}${social.twitter_username}`}
					>
						<MdiTwitter className="text-3xl mr-2" />
					</a>
				</div>
			)}
			{social.portfolio_url && (
				<div>
					<a target="_blank" rel="noreferrer" href={`${social.portfolio_url}`}>
						<MdiWeb className="text-3xl mr-2" />
					</a>
				</div>
			)}
		</div>
	)
}

export default SocialLinks
