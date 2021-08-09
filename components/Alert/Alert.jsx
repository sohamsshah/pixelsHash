import React from 'react'

const Alert = ({ bgColor, color, children }) => {
	return (
		<div className="flex justify-center m-24">
			<div
				className={`flex p-2 items-center bg-${bgColor} text-${color} text-xl font-bold px-4 py-3" role="alert`}
			>
				<p>{children}</p>
			</div>
		</div>
	)
}

export default Alert
