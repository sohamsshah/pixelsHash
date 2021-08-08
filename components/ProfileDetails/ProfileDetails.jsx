import React from 'react'

const ProfileDetails = ({user}) => {
    return (
        <div className="flex items-center">
            <img class="inline border object-cover w-10 h-10 mr-2 rounded-full" src={user.profile_image.medium} alt="Profile image"/>
            <div>
            <div>
            {user.name}
            </div>
            <caption class="font-bold">
                <a href={user.links.self} target="_blank">@{user.username}</a>
            </caption>
            </div>
        </div>
    )
}

export default ProfileDetails
