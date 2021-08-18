import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useTheme } from 'next-themes'

const Loader = ({ numberOfItems, isGridView }) => {
	const { theme } = useTheme()
	return (
		<>
			{isGridView ? (
				<GridViewLoader theme={theme} numberOfItems={numberOfItems} />
			) : (
				<ListViewLoader theme={theme} numberOfItems={numberOfItems} />
			)}
		</>
	)
}

const GridViewLoader = ({ theme, numberOfItems }) => {
	return (
		<div className="flex m-3 justify-center">
			<div className="flex flex-wrap gap-2 justify-center">
				{[...Array(numberOfItems)].map((_, i) => (
					<div key={i} className="flex flex-col justify-between card">
						<div className="w-80 h-80 relative m-3 overflow-hidden">
							<div className="m-4 w-72 h-60 text-center">
								<SkeletonTheme
									color={theme === 'dark' && `#121212`}
									highlightColor={theme === 'dark' && `#4B5563`}
								>
									<Skeleton className="w-72 h-60" />
								</SkeletonTheme>
							</div>
							<div className="ml-4 mb-4 w-72 h-6">
								<SkeletonTheme
									color={theme === 'dark' && `#121212`}
									highlightColor={theme === 'dark' && `#4B5563`}
								>
									<Skeleton className="w-64 h-6" />
								</SkeletonTheme>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
const ListViewLoader = ({ theme, numberOfItems }) => {
	return (
		<div className="flex m-3 justify-center">
			<div className="flex flex-wrap gap-2 justify-center flex-col">
				{[...Array(numberOfItems)].map((_, i) => (
					<div
						key={i}
						className="card md:flex-row flex-col flex md:justify-around items-center"
					>
						<div className="w-80 h-56 lg:w-100 lg:h-80">
							<SkeletonTheme
								color={theme === 'dark' && `#121212`}
								highlightColor={theme === 'dark' && `#4B5563`}
							>
								<Skeleton className="w-80 h-56 lg:w-100 lg:h-80" />
							</SkeletonTheme>
						</div>
						<div className="flex flex-col justify-between m-3 w-80">
							<div>
								<div className="mb-5">
									<div>
										<SkeletonTheme
											color={theme === 'dark' && `#121212`}
											highlightColor={theme === 'dark' && `#4B5563`}
										>
											<Skeleton className="h-8" />
										</SkeletonTheme>
									</div>
									<div>
										<SkeletonTheme
											color={theme === 'dark' && `#121212`}
											highlightColor={theme === 'dark' && `#4B5563`}
										>
											<Skeleton className="h-8" />
										</SkeletonTheme>
									</div>
									<div>
										<SkeletonTheme
											color={theme === 'dark' && `#121212`}
											highlightColor={theme === 'dark' && `#4B5563`}
										>
											<Skeleton className="h-8" />
										</SkeletonTheme>
									</div>
								</div>
							</div>
							<div>
								<div className="h-8">
									<SkeletonTheme
										color={theme === 'dark' && `#121212`}
										highlightColor={theme === 'dark' && `#4B5563`}
									>
										<Skeleton className="h-8" />
									</SkeletonTheme>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Loader
