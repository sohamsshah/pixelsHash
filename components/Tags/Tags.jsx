const Tags = ({ tags }) => {
	return (
		<div className="my-2 flex flex-wrap">
			{tags.map((tag, index) => {
				return (
					<div key={index} className="mr-2 my-1 border p-1">
						<span>{tag.title}</span>
					</div>
				)
			})}
		</div>
	)
}

export default Tags
