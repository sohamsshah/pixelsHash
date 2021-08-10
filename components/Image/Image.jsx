import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { MdiDownload } from '../../assets/DownloadIcon'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { MdiCalendarMonth } from '../../assets/CalendarIcon'
import Location from '../Location/Location'
import moment from 'moment'
import Tags from '../Tags/Tags'

const Image = ({ image, images, index, scrollPosition, isGridView }) => {
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
			{isGridView ? (
				<div className="card items-start flex-col flex justify-between">
					<div className="h-full flex flex-col items-center justify-between">
						<div
							onClick={() => setShowModal(true)}
							className="h-full card-zoom cursor-zoom-in"
						>
							<LazyLoadImage
								effect="blur"
								alt={image.alt_description}
								key={image.user.id}
								scrollPosition={scrollPosition}
								className="card-zoom-image"
								src={image.urls.raw}
							/>
						</div>
						<div className="px-4 w-full flex justify-between m-3">
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
				</div>
			) : (
				<div className="card md:flex-row flex-col flex md:justify-around items-center">
					<div
						onClick={() => setShowModal(true)}
						className="list-card-zoom cursor-zoom-in"
					>
						<LazyLoadImage
							effect="blur"
							alt={image.alt_description}
							key={image.user.id}
							scrollPosition={scrollPosition}
							className="card-zoom-image"
							src={image.urls.raw}
						/>
					</div>
					<div className="flex h-full flex-col justify-between mr-4 py-4 w-80">
						<div>
							<div className="">
								<div className="font-bold text-lg">About this Image</div>
								<span>{image.description}</span>
								{image.user.location !== null ? (
									<Location location={image.user.location} />
								) : (
									''
								)}
								<div>
									<span className="flex items-center">
										<MdiCalendarMonth className="text-lg mr-1" /> Published on{' '}
										{moment(image.created_at).format('MMM Do YYYY')}
									</span>
								</div>
								{image.tags.length !== 0 ? <Tags tags={image.tags} /> : ''}
							</div>
						</div>
						<div className="flex justify-between">
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
				</div>
			)}
		</>
	)
}

export default trackWindowScroll(Image)
