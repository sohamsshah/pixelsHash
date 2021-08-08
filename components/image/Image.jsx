import React, { useState } from 'react'

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
  console.log(image);
	return (
		<>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<button
							className="fixed top-2 left-2 p-1 z-60 ml-auto border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
							onClick={() => setShowModal(false)}
						>
							<span className="text-white h-6 w-6 text-4xl block outline-none focus:outline-none">
								×
							</span>
						</button>
						<div className="hidden lg:block">
							<button
								onClick={handlePrevModalImage}
								className="fixed top-80 left-20 text-4xl text-white p-10 font-bold z-20"
							>
								{' '}
								{'<'}{' '}
							</button>
						</div>
						<div className="hidden lg:block">
							<button
								onClick={handleNextModalImage}
								className="fixed top-80 right-20 text-4xl text-white p-10 font-bold z-20"
							>
								{' '}
								{'>'}{' '}
							</button>
						</div>
						<div className="flex items-center mx-5 lg:mx-0">
							<div className="lg:m-20 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								<div className="lg:flex p-6">
									<div>
										<img
											className="lg:w-100 lg:h-100 h-full w-full"
											src={modalImage.urls.regular}
										/>
									</div>
									<div className="lg:w-96 flex flex-col justify-start lg:px-10 py-5 lg:py-0">
                    <div class="mb-5">
                      <div className="font-bold">
                        About this Image
                      </div>
                      <span>
                        {modalImage.description}
                      </span>
                      <div>
                      <span>
                        Location: {modalImage.user.location}
                      </span>
                    </div>
                    <div>
                      <span>
                        Clicked at {modalImage.created_at}
                      </span>
                    </div>
                    <div className="my-2">
                      {modalImage.tags.map(tag => {
                        return <span className="mr-2 my-2 border p-1">{tag.title}</span>
                      })}
                    </div>
                    </div>
                    
                    <div className="mb-5">
                    <div class="font-bold text-lg mb-2">
                      Picture 📸 by
                    </div>
                  <div className="flex items-center">
                    <img class="inline border object-cover w-10 h-10 mr-2 rounded-full" src={modalImage.user.profile_image.medium} alt="Profile image"/>
                    <div>
                      <div>
                      {modalImage.user.name}
                      </div>
                      <caption class="font-bold">
                        <a href={modalImage.user.links.self} target="_blank">@{modalImage.user.username}</a>
                      </caption>
                    </div>
                    
                </div>
                <div class="my-2 flex justify-start">
                        <div>
                          <a target="_blank" href={`https://www.instagram.com/${modalImage.user.social.instagram_username}`}>I</a>
                        </div>
                        <div>
                        <a target="_blank" href={`https://www.twitter.com/${modalImage.user.social.twitter_username}`}>T</a>
                        </div>
                        <div>
                        <a target="_blank" href={`${modalImage.user.social.portfolio_url}`}>W</a>
                        </div>
                  </div> 
                  <div className="">
                    <span class="font-bold">
                      About Me
                    </span>
                    <div>
                      {modalImage.user.bio}
                    </div>
                  </div>
                  </div>
								</div>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
			<div className="card">
				<div onClick={() => setShowModal(true)} className="card-zoom cursor-zoom-in">
					<img alt={image.alt_description} className="card-zoom-image" key={image.user.id} src={image.urls.raw} />
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
						<a href={''}> Download </a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Image
