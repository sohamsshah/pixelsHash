import React from 'react'
import { MdiTwitter } from './../../assets/TwitterIcon'
import { MdiInstagram } from './../../assets/InstagramIcon'
import { MdiWeb } from './../../assets/InternetIcon'

const SocialLinks = ({ social }) => {
	return (
		<div className="my-5 flex justify-start">
			{social.instagram_username !== null ? (
				<div>
					<a
						target="_blank"
						href={`https://www.instagram.com/${social.instagram_username}`}
					>
						<MdiInstagram className="text-3xl mr-2" />
					</a>
				</div>
			) : (
				''
			)}

			{social.twitter_username ? (
				<div>
					<a target="_blank" href={`https://www.twitter.com/${social.twitter_username}`}>
						<MdiTwitter className="text-3xl mr-2" />
					</a>
				</div>
			) : (
				''
			)}
			{social.portfolio_url ? (
				<div>
					<a target="_blank" href={`${social.portfolio_url}`}>
						<MdiWeb className="text-3xl mr-2" />
					</a>
				</div>
			) : (
				''
			)}
		</div>
	)
}

export default SocialLinks
