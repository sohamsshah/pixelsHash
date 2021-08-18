import Image from 'next/image'
import CardFooter from '../CardFooter/CardFooter'
import ImageDetails from '../ImageDetails/ImageDetails'

const ListViewImage = ({ image, setShowModal }) => {
	return (
		<div className="card md:flex-row flex-col flex md:justify-around items-center dark:border-gray-600 border">
			<div onClick={() => setShowModal(true)} className="list-card-zoom cursor-zoom-in">
				<div className="m-2">
					<Image
						src={image.urls.regular}
						key={image.user.id}
						className="lg:w-100 lg:h-100 max-h-64 lg:max-h-full w-full"
						alt={image.alt_description ? image.alt_description : 'High Quality Image'}
						width={750}
						height={562.5}
					/>
				</div>
			</div>
			<div className="flex h-full flex-col justify-between mr-2 py-4 w-80">
				<ImageDetails image={image} />

				<div className="px-4 w-full flex justify-between m-3">
					<CardFooter image={image} />
				</div>
			</div>
		</div>
	)
}

export default ListViewImage
