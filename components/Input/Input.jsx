import React from 'react'

const Input = ({ onKeyDown }) => {
	return (
		<div className="relative flex w-full justify-center flex-wrap items-stretch m-3 p-3">
			<span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
				<i className="fas fa-lock"></i>
			</span>
			<input
				onKeyDown={onKeyDown}
				type="text"
				placeholder="Search Images"
				className="w-96 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pl-10"
			/>
		</div>
	)
}

export default Input
