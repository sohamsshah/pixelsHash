import { useTheme } from 'next-themes'
import { MdiWeatherSunny } from '../../assets/svgs/SunIcon'
import { MdiMoonWaningCrescent } from '../../assets/svgs/MoonIcon'

const DarkModeToggleButton = () => {
	const { theme, setTheme } = useTheme()
	return (
		<div>
			<button
				aria-label="Toggle Dark Mode"
				type="button"
				className="text-2xl mx-2 order-2 md:order-3"
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			>
				{theme === 'dark' ? <MdiWeatherSunny /> : <MdiMoonWaningCrescent />}
			</button>
		</div>
	)
}

export default DarkModeToggleButton
