import React, { useState } from 'react'
import Modal from './../Modal/Modal'
import { MdiDownload } from './../../assets/DownloadIcon'

const Image = ({ image, images, index }) => {
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
			{showModal ? (
				<Modal
					image={modalImage}
					handlePrevModalImage={handlePrevModalImage}
					handleNextModalImage={handleNextModalImage}
					closeModal={() => setShowModal(false)}
				/>
			) : null}
			<div className="card">
				<div onClick={() => setShowModal(true)} className="card-zoom cursor-zoom-in">
					<img
						alt={image.alt_description}
						className="card-zoom-image"
						key={image.user.id}
						src={image.urls.raw}
					/>
				</div>
				<div className="flex justify-between m-3">
					<div>
						📷 Picture by{' '}
						<span className="font-bold">
							<a href={image.user.links.html} target="_blank">
								{`${image.user.first_name}`}{' '}
							</a>
						</span>
					</div>
					<div>
						<a href={image.links.download + '?force=true'}>
							{' '}
							<MdiDownload className="text-2xl" />{' '}
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Image
