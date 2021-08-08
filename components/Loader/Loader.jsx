import React from 'react'
import Skeleton from "react-loading-skeleton";

const Loader = ({numberOfCards}) => {
    return (
        <div className="flex m-3 justify-center">
				<div className="flex flex-wrap gap-2 justify-center">
					{[...Array(numberOfCards)].map((e, i) => 
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
                )}
                    	
					
				</div>
			</div>
    )
}

export default Loader
