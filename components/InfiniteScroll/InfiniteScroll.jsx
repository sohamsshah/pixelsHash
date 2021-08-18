import { useEffect, useRef } from 'react'
import { useIntersectionObserver } from './../../utils/hooks/useIntersectionObserver'
const InfiniteScroll = ({ dataLength, hasMore = false, next, loader, threshold = 1, children }) => {
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
			if (isBottomVisible && dataLength !== 0) {
				console.log('inside next images effect')
				await next()
			}
		})()
	}, [isBottomVisible])

	return (
		<div className="App">
			{children}
			{hasMore ? <div ref={ref}>{loader}</div> : ''}
		</div>
	)
}

export default InfiniteScroll
