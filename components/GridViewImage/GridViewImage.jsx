import CardFooter from '../CardFooter/CardFooter'
import Image from 'next/image'

const GridViewImage = ({ image, setShowModal }) => {
	return (
		<div className="card items-start flex-col flex justify-between dark:border-gray-600 border ">
			<div className="h-full flex flex-col items-center justify-between">
				<div onClick={() => setShowModal(true)} className="h-full card-zoom cursor-zoom-in">
					<div className="m-2">
						<Image
							src={image.urls.regular}
							key={image.user.id}
							className="lg:w-100 lg:h-100 max-h-64 lg:max-h-full w-full"
							alt={
								image.alt_description ? image.alt_description : 'High Quality Image'
							}
							width={750}
							height={562.5}
						/>
					</div>
				</div>
			</div>
			<div className="px-4 w-full flex justify-between m-3">
				<CardFooter image={image} />
			</div>
		</div>
	)
}

export default GridViewImage
