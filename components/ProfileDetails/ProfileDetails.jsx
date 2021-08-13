import Image from 'next/image'
const ProfileDetails = ({ user: { name, id, profile_image, username, links } }) => {
	return (
		<div className="flex items-center">
			<div className="object-cover w-10 h-10 mr-2">
				<Image
					className="inline border rounded-full"
					src={profile_image.medium}
					key={id}
					alt={`Profile image of ${name}`}
					width={40}
					height={40}
				/>
			</div>
			<div>
				<div>{name}</div>
				<span className="font-bold">
					<a href={links.html} target="_blank" rel="noreferrer">
						@{username}
					</a>
				</span>
			</div>
		</div>
	)
}

export default ProfileDetails
