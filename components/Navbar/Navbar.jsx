import React from 'react'
import Creatable from 'react-select/creatable'
import { MdiFormatListBulletedSquare } from '../../assets/svgs/ListIcon'
import { MdiGrid } from '../../assets/svgs/GridIcon'
import pixelsHashLogo from './../../assets/images/pixelsHashLogo.png'
import { MdiGithub } from '../../assets/svgs/GithubIcon'
import Image from 'next/image'

const Navbar = ({
	isGridView,
	searchImages,
	selectedOption,
	setSelectedOption,
	options,
	setIsGridView,
}) => {
	return (
		<div className="flex flex-col md:flex-row justify-between md:w-3/4 w-full items-center">
			<Image width="150" height="150" src={pixelsHashLogo} alt="PixelsHash Logo" />
			<div className="flex items-center w-full px-2 lg:w-2/4 justify-around lg:justify-between">
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
				<div className="flex items-center">
						<button
							className="text-center text-2xl mx-2"
							onClick={() => setIsGridView((prev) => !prev)}
						>
							{isGridView ? <MdiFormatListBulletedSquare /> : <MdiGrid />}
						</button>
						<a
							target="_blank"
							href="https://github.com/sohamsshah/pixelsHash/"
							className="text-center text-2xl mx-2"
						>
							<MdiGithub />
						</a>
					
				</div>
			</div>
		</div>
	)
}

export default Navbar
