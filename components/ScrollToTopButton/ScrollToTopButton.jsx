import { useState, useEffect } from 'react'
import { MdiChevronDoubleUp } from './../../assets/svgs/ChevDoubleUpIcon'
const ScrollToTopButton = () => {
	const [visible, setVisible] = useState(false)
	useEffect(() => {
		window.addEventListener('scroll', toggleVisible)
	}, [])
	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop
		if (scrolled > 300) {
			setVisible(true)
		} else if (scrolled <= 300) {
			setVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div>
			<button
				aria-label="scroll to top button"
				className={`${
					!visible && 'hidden'
				}  duration-500 ease-in-out fixed z-50 bg-black text-white rounded-full h-16 w-16 flex items-center justify-center bottom-2 right-2 cursor-pointer`}
				onClick={scrollToTop}
			>
				<MdiChevronDoubleUp className="hover:scale-110 text-center text-4xl" />
			</button>
		</div>
	)
}

export default ScrollToTopButton
