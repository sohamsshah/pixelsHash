import React from 'react'

const Alert = ({bgColor, color, children}) => {
    return (
        <div className="flex justify-center m-12">
        <div
          className={
            `text-center w-96 text-${color} px-6 py-4 border-0 rounded relative mb-4 bg-${bgColor}`
          }
        >
          <span className="inline-block align-middle mr-8">
            {children} 
          </span>
        </div>
        </div>

    )
}

export default Alert
