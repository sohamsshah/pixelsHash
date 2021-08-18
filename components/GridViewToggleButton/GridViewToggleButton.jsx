import { MdiFormatListBulletedSquare } from '../../assets/svgs/ListIcon'
import { MdiGrid } from '../../assets/svgs/GridIcon'
const GridViewToggleButton = ({ onClick, isGridView }) => {
	return (
		<div>
			<button
				aria-label="toggle view button"
				className="text-center text-2xl mx-2"
				onClick={onClick}
			>
				{isGridView ? <MdiFormatListBulletedSquare /> : <MdiGrid />}
			</button>
		</div>
	)
}

export default GridViewToggleButton
