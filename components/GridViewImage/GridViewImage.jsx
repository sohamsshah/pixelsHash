import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import CardFooter from '../CardFooter/CardFooter'

const GridViewImage = ({ image, setShowModal, scrollPosition }) => {
	return (
		<div className="card items-start flex-col flex justify-between">
			<div className="h-full flex flex-col items-center justify-between">
				<div onClick={() => setShowModal(true)} className="h-full card-zoom cursor-zoom-in">
					<LazyLoadImage
						effect="blur"
						alt={image.alt_description}
						key={image.user.id}
						scrollPosition={scrollPosition}
						className="card-zoom-image"
						src={image.urls.regular}
					/>
				</div>
			</div>
			<div className="px-4 w-full flex justify-between m-3">
				<CardFooter image={image} />
			</div>
		</div>
	)
}

export default GridViewImage
