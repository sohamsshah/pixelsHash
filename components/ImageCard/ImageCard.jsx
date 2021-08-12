import { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'
import GridViewImage from '../GridViewImage/GridViewImage'
import ListViewImage from '../ListViewImage/ListViewImage'
import { nextModalImage, prevModalImage } from './utils'

const ImageCard = ({ image, images, index, isGridView }) => {
	const [currModalImageIndex, setCurrModalImageIndex] = useState(index)
	const [showModal, setShowModal] = useState(false)
	const [modalImage, setModalImage] = useState(images[index])
	useEffect(() => {
		setCurrModalImageIndex(index)
		setModalImage(images[index])
	}, [showModal])
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
				<GridViewImage image={image} setShowModal={setShowModal} />
			) : (
				<ListViewImage image={image} setShowModal={setShowModal} />
			)}
		</>
	)
}

export default ImageCard
