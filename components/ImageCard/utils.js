export const nextModalImage = ({
	currModalImageIndex,
	images,
	setModalImage,
	setCurrModalImageIndex,
}) => {
	if (currModalImageIndex < images.length - 1) {
		setModalImage(images[currModalImageIndex + 1])
		setCurrModalImageIndex((prev) => prev + 1)
	}
}

export const prevModalImage = ({
	currModalImageIndex,
	images,
	setModalImage,
	setCurrModalImageIndex,
}) => {
	if (currModalImageIndex > 0) {
		setModalImage(images[currModalImageIndex - 1])
		setCurrModalImageIndex((prev) => prev - 1)
	}
}
