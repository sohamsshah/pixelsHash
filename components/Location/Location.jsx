import { MdiMapMarker } from './../../assets/svgs/MapIcon'

const Location = ({ location }) => {
	return (
		<div className="flex items-center">
			<MdiMapMarker className="mr-1 my-2" />
			<div>
				<span>{location}</span>
			</div>
		</div>
	)
}

export default Location
