import Creatable from 'react-select/creatable'
import { MdiFormatListBulletedSquare } from '../../assets/svgs/ListIcon'
import { MdiGrid } from '../../assets/svgs/GridIcon'
import pixelsHashLogo from './../../assets/images/pixelsHashLogo.png'
import { MdiGithub } from '../../assets/svgs/GithubIcon'
import Image from 'next/image'
import { repositoryLink } from '../../data/strings'
import DarkModeToggleButton from './../DarkModeToggleButton/DarkModeToggleButton'
import { useTheme } from 'next-themes'
const Navbar = ({
	isGridView,
	searchImages,
	selectedOption,
	setSelectedOption,
	options,
	imageListingDispatch,
}) => {
	const { theme } = useTheme()
	return (
		<div className="flex flex-col md:flex-row justify-between md:w-3/4 w-full items-center">
			<Image width="150" height="150" src={pixelsHashLogo} alt="PixelsHash Logo" />
			<div className="flex items-center w-full px-2 lg:w-2/4 justify-around lg:justify-between">
				<Creatable
					type="input"
					for="select"
					isClearable
					placeholder="🔍 Search Images"
					value={selectedOption}
					onKeyDown={(e) => searchImages(e)}
					onChange={(value) => setSelectedOption(value)}
					options={options}
					id="input-value"
					className="w-80 m-3"
					formatCreateLabel={() => `Search this...`}
					theme={(boxTheme) => {
						if (theme === 'dark') {
							return {
								...boxTheme,
								colors: {
									...boxTheme.colors,
									primary50: '#4B5563',
									primary25: '#4B5563',
									neutral20: '#4B5563',
									neutral50: '#4B5563',
									neutral0: '#121212',
									neutral80: 'white',
									neutral30: '#4B5563',
								},
							}
						}
						return { ...boxTheme }
					}}
				/>
				<div className="flex items-center">
					<button
						aria-label="toggle view button"
						className="text-center text-2xl mx-2"
						onClick={() => imageListingDispatch({ type: 'TOGGLE_VIEW' })}
					>
						{isGridView ? <MdiFormatListBulletedSquare /> : <MdiGrid />}
					</button>
					<button aria-label="github button">
						<a
							target="_blank"
							rel="noreferrer"
							href={repositoryLink}
							className="text-center text-2xl mx-2"
						>
							<MdiGithub />
							<span className="sr-only">Github Link</span>
						</a>
					</button>
					<DarkModeToggleButton />
				</div>
			</div>
		</div>
	)
}

export default Navbar
