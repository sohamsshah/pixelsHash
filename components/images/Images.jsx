import React from 'react'
import Image from "./../image/Image";

export default function Images({props}) {
    console.log(props);
    return (
        <>
        <div>
          <Image data={props.data} />
        </div>
      </>
    );
  }



