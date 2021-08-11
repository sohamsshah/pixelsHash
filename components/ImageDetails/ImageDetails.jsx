import { MdiCalendarMonth } from '../../assets/svgs/CalendarIcon'
import moment from 'moment'
import Location from './../Location/Location'
import Tags from './../Tags/Tags'

const ImageDetails = ({ image: { user, created_at, tags, description } }) => {
	return (
		<div>
			<div className="font-bold text-lg">About this Image</div>
			<span>{description}</span>
			{user.location !== null && <Location location={user.location} />}
			<div>
				<span className="flex items-center">
					<MdiCalendarMonth className="text-lg mr-1" /> Published on{' '}
					{moment(created_at).format('MMM Do YYYY')}
				</span>
			</div>
			{tags.length !== 0 && <Tags tags={tags} />}
		</div>
	)
}

export default ImageDetails
