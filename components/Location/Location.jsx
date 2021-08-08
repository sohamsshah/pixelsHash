import React from 'react'
import {MdiMapMarker} from "./../../assets/MapIcon"

const Location = ({location}) => {
    return (
        <div className="flex items-center">
                      <MdiMapMarker className="mr-1 my-2" /> 
                      <div>
                        {location}
                      </div>
                    </div>
    )
}

export default Location
