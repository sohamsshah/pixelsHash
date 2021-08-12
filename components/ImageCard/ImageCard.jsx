import { useState } from 'react'
import Modal from '../Modal/Modal'
import { trackWindowScroll } from 'react-lazy-load-image-component'
import GridViewImage from '../GridViewImage/GridViewImage'
import ListViewImage from '../ListViewImage/ListViewImage'
import { nextModalImage, prevModalImage } from './utils'

const ImageCard = ({ image, images, index, scrollPosition, isGridView }) => {
	const [currModalImageIndex, setCurrModalImageIndex] = useState(index)
	const [showModal, setShowModal] = useState(false)
	const [modalImage, setModalImage] = useState(images[index])
	return (
		<>
			{showModal && (
				<Modal
					image={modalImage}
					prevModalImage={() =>
						prevModalImage({
							currModalImageIndex,
							images,
							setModalImage,
							setCurrModalImageIndex,
						})
					}
					nextModalImage={() =>
						nextModalImage({
							currModalImageIndex,
							images,
							setModalImage,
							setCurrModalImageIndex,
						})
					}
					closeModal={() => setShowModal(false)}
				/>
			)}
			{isGridView ? (
				<GridViewImage
					image={image}
					scrollPosition={scrollPosition}
					setShowModal={setShowModal}
				/>
			) : (
				<ListViewImage
					image={image}
					scrollPosition={scrollPosition}
					setShowModal={setShowModal}
				/>
			)}
		</>
	)
}

export default trackWindowScroll(ImageCard)
