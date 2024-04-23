import React from 'react'
import { Map, Marker } from "pigeon-maps";

function GoogleMap() {
  return (
    <div>
      <Map height={760} width={1010} defaultCenter={[17.3850, 78.4867]} defaultZoom={11}>
         <div><Marker width={50} anchor={[17.3850, 78.4867]} /></div>
      </Map>
    </div>
  )
}

export default GoogleMap