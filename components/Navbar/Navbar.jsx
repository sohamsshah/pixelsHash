import React from 'react'
import Creatable from 'react-select/creatable'
import { MdiFormatListBulletedSquare } from '../../assets/ListIcon'
import { MdiGrid } from '../../assets/GridIcon'

const Navbar = ({
	isGridView,
	searchImages,
	selectedOption,
	setSelectedOption,
	options,
	setIsGridView,
}) => {
	const handleInputChange = (option) => {
		let searchInput = document.getElementById('react-select-2-input')
		searchInput.value = option.value
		console.log(searchInput.value)
		setSelectedOption(option)
	}
	return (
		<div className="flex justify-center">
			<Creatable
				isClearable
				value={selectedOption}
				onKeyDown={(e) => searchImages(e)}
				onChange={(value) => setSelectedOption(value)}
				options={options}
				id="input-value"
				className="w-80 m-3"
				formatCreateLabel={() => `Search this...`}
			/>
			<button className="text-2xl" onClick={() => setIsGridView((prev) => !prev)}>
				{isGridView ? <MdiFormatListBulletedSquare /> : <MdiGrid />}
			</button>
		</div>
	)
}

export default Navbar
