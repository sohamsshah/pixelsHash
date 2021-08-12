import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import CardFooter from '../CardFooter/CardFooter'
import ImageDetails from '../ImageDetails/ImageDetails'

const ListViewImage = ({ image, setShowModal }) => {
	return (
		<div className="card md:flex-row flex-col flex md:justify-around items-center">
			<div onClick={() => setShowModal(true)} className="list-card-zoom cursor-zoom-in">
				<LazyLoadImage
					effect="blur"
					alt={image.alt_description}
					key={image.user.id}
					className="card-zoom-image"
					src={image.urls.regular}
				/>
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
