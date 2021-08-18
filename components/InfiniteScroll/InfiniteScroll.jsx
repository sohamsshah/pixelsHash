import { useEffect, useRef } from 'react'
import { useIntersectionObserver } from './../../utils/hooks/useIntersectionObserver'
const InfiniteScroll = ({ hasMore = false, next, loader, threshold = 1, children }) => {
	const ref = useRef(null)
	const isBottomVisible = useIntersectionObserver(
		ref,
		{
			threshold,
		},
		false,
	)

	useEffect(() => {
		;(async function () {
			if (isBottomVisible) {
				await next()
			}
		})()
	}, [isBottomVisible])

	return (
		<div className="App">
			{children}
			<div ref={ref}>{hasMore ? loader : ''}</div>
		</div>
	)
}

export default InfiniteScroll
