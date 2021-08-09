import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProfileDetails = ({ user }) => {
	return (
		<div className="flex items-center">
			<LazyLoadImage
					effect="blur"
					alt={`Profile image of ${user.name}`}
					key={user.id}
					className="inline border object-cover w-10 h-10 mr-2 rounded-full"
					src={user.profile_image.medium}
			/>
			<div>
				<div>{user.name}</div>
				<caption class="font-bold">
					<a href={user.links.html} target="_blank">
						@{user.username}
					</a>
				</caption>
			</div>
		</div>
	)
}

export default ProfileDetails
