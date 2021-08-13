import { MdiDownload } from '../../assets/svgs/DownloadIcon'
import { creatorDetailsStrings } from '../../data/strings'
const CardFooter = ({ image }) => {
	return (
		<>
			<div>
				{creatorDetailsStrings.title}{' '}
				<span className="font-bold">
					<a href={image.user.links.html} rel="noreferrer" target="_blank">
						{`${image.user.first_name}`}{' '}
					</a>
				</span>
			</div>
			<div>
				<a aria-label="Download Link" href={`${image.links.download}?force=true`}>
					{' '}
					<MdiDownload className="text-2xl" />{' '}
					<span className="sr-only">Download Button</span>
				</a>
			</div>
		</>
	)
}

export default CardFooter
