import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
const ProfileDetails = ({ user: { name, id, profile_image, username, links } }) => {
	return (
		<div className="flex items-center">
			<LazyLoadImage
				effect="blur"
				alt={`Profile image of ${name}`}
				key={id}
				className="inline border object-cover w-10 h-10 mr-2 rounded-full"
				src={profile_image.medium}
			/>
			<div>
				<div>{name}</div>
				<caption className="font-bold">
					<a href={links.html} target="_blank" rel="noreferrer">
						@{username}
					</a>
				</caption>
			</div>
		</div>
	)
}

export default ProfileDetails
