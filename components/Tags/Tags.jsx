import React from 'react'

const Tags = ({tags}) => {
    return (
            <div className="my-2 flex flex-wrap">
                {tags.map(tag => {
                    return <div className="mr-2 my-1 border p-1">{tag.title}</div>
                })}
            </div>
    )
}

export default Tags
