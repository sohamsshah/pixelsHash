import { useState } from 'react'
import Modal from '../Modal/Modal'
import { trackWindowScroll } from 'react-lazy-load-image-component'
import GridViewImage from '../GridViewImage/GridViewImage'
import ListViewImage from '../ListViewImage/ListViewImage'

const ImageCard = ({ image, images, index, scrollPosition, isGridView }) => {
	const [currModalImageIndex, setCurrModalImageIndex] = useState(index)
	const [showModal, setShowModal] = useState(false)
	const [modalImage, setModalImage] = useState(images[index])
	const handleNextModalImage = () => {
		if (currModalImageIndex < images.length - 1) {
			setModalImage(images[currModalImageIndex + 1])
			setCurrModalImageIndex((prev) => prev + 1)
		}
	}
	const handlePrevModalImage = () => {
		if (currModalImageIndex > 0) {
			setModalImage(images[currModalImageIndex - 1])
			setCurrModalImageIndex((prev) => prev - 1)
		}
	}
	return (
		<>
			{showModal && (
				<Modal
					image={modalImage}
					handlePrevModalImage={handlePrevModalImage}
					handleNextModalImage={handleNextModalImage}
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
