import React from 'react'

const Image = ({ image }) => {
	return (
		<div className="card-zoom">
			<img className="card-zoom-image" key={image.id} src={image.urls.regular} />
		</div>
	)
}

export default Image
