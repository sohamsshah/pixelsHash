import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Loader = ({ numberOfItems, isGridView }) => {
	return (
		<>
			{isGridView ? (
				<GridViewLoader numberOfItems={numberOfItems} />
			) : (
				<ListViewLoader numberOfItems={numberOfItems} />
			)}
		</>
	)
}

const GridViewLoader = ({ numberOfItems }) => {
	return (
		<div className="flex m-3 justify-center">
			<div className="flex flex-wrap gap-2 justify-center">
				{[...Array(numberOfItems)].map((e, i) => (
					<div className="flex flex-col justify-between card">
						<div className="w-80 h-80 relative m-3 overflow-hidden">
							<div className="m-4 w-72 h-60 text-center">
								<Skeleton className="w-72 h-60" />
							</div>
							<div className="ml-4 mb-4 w-72 h-6">
								<Skeleton className="w-64 h-6" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
const ListViewLoader = ({ numberOfItems }) => {
	return (
		<div className="flex m-3 justify-center">
			<div className="flex flex-wrap gap-2 justify-center flex-col">
				{[...Array(numberOfItems)].map((e, i) => (
					<div className="card flex justify-around">
						<div className="w-100 h-80">
							<Skeleton className="w-100 h-80" />
						</div>
						<div className="flex flex-col justify-between m-3 w-80">
							<div>
								<div className="mb-5">
									<div>
										<Skeleton className="h-8" />
									</div>
									<div>
										<Skeleton className="h-8" />
									</div>
									<div>
										<Skeleton className="h-8" />
									</div>
								</div>
							</div>
							<div>
								<div className="h-8">
									<Skeleton className="h-8" />
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
