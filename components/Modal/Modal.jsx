import ImageDetails from '../ImageDetails/ImageDetails'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { MdiChevronLeft } from '../../assets/svgs/ChevLeftIcon'
import { MdiChevronRight } from '../../assets/svgs/ChevRightIcon'
import CreatorDetails from '../CreatorDetails/CreatorDetails'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Modal = ({ image, closeModal, prevModalImage, nextModalImage }) => {
	return (
		<>
			<div className="absolute inset-0 flex items-center justify-center py-12">
				<div className="justify-center items-center flex max-h-full overflow-auto fixed inset-0 z-50 outline-none focus:outline-none">
					<button
						className="fixed z-50 top-2 left-2 p-1 z-60 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
						onClick={closeModal}
					>
						<span className="text-white h-6 w-6 text-4xl block outline-none focus:outline-none">
							×
						</span>
					</button>
					<div>
						<button
							onClick={prevModalImage}
							className="fixed lg:bottom-80 lg:left-24 left-12 bottom-0.5 text-4xl text-white p-5 font-bold z-20"
						>
							<MdiChevronLeft />
						</button>
					</div>
					<div>
						<button
							onClick={nextModalImage}
							className="fixed lg:bottom-80 lg:right-24 right-12 bottom-0.5 text-4xl text-white p-5 font-bold z-20"
						>
							<MdiChevronRight />
						</button>
					</div>
					<div className="flex items-center mx-5 lg:mx-0">
						<div className="lg:m-20 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
							<div className="lg:flex p-6">
								<div className="flex justify-center">
									<LazyLoadImage
										effect="blur"
										alt={image.alt_description}
										key={image.user.id}
										className="lg:w-100 lg:h-100 max-h-64 lg:max-h-full w-full"
										src={image.urls.regular}
									/>
								</div>
								<div className="overflow-y-auto max-h-56 lg:max-h-full lg:w-96 flex flex-col justify-start lg:px-10 py-5 lg:py-0">
									<div className="mb-5">
										<ImageDetails image={image} />
									</div>
									<div className="mb-5">
										<CreatorDetails image={image} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
			</div>
		</>
	)
}

export default Modal
