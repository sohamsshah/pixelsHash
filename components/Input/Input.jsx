import React from 'react'

const Input = ({ onKeyDown }) => {
	return (
		<div className="relative flex w-full justify-center flex-wrap items-stretch m-3 p-3">
			<input
				onKeyDown={onKeyDown}
				type="text"
				placeholder="Search Images 📷"
				className="w-96 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-10"
			/>
		</div>
	)
}

export default Input
