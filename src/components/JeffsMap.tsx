
import 'semantic-ui-css/semantic.min.css'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent} from 'react-leaflet'
import React, { Component} from 'react'
import 'leaflet/dist/leaflet.css';

const MyMarker = (props:any) => {

  const initMarker = (ref:any) => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }

  return <Marker ref={initMarker} {...props}/>
}

function PlaceMarker() {
  const map = useMapEvent('click', (e) => {
      const latlng = map.mouseEventToLatLng(e.originalEvent)
      console.log(latlng.lat + ', ' + latlng.lng)
      return <Marker position={latlng}/> 
  })
  return null
}

export default class JeffsMap extends Component {
    state = {
        currentPos: undefined
    };

    render() {
        return (
            <MapContainer 
                maxBoundsViscosity={1} 
                maxBounds={[[7, 900], [89, 1186.5]]} 
                minZoom={3}
                maxZoom={7} 
                center={[69, 1073]} 
                zoom={5} 
                scrollWheelZoom={true}
                className="full-bleed"
                >
                <PlaceMarker/>
                <TileLayer
                attribution={'&copy; <a href="https://www.algonquinmap.com/">Jeff\'s Map</a>, Thanks to Jeff'}
                url="./tiles/{z}/{x}/{y}.png"
                />
                <Marker position={[10, 10]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>

                </Marker>
                { this.state.currentPos && <MyMarker position={this.state.currentPos}>
              <Popup position={this.state.currentPos}>
                Current location: <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>
              </Popup>
              </MyMarker>}
            </MapContainer>
        )
    }
}