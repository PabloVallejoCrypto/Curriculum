import { GoogleMap, useJsApiLoader, LoadScript, Marker, Autocomplete } from '@react-google-maps/api';
import React from 'react'
import Link from 'next/link'
import Logo from '../../public/chaoticLogo.png'

import store from '../../components/store.js'

const containerStyle = {
  padding: "5%",
  width: '100vw',
  height: '100vh'
};

const center = {
  	lat: 41.390205,  
    lng: 2.154007
};

const libraries = ["places"];

const inputStyle = {
  boxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  padding: `0 12px`,
  borderRadius: `3px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
  position: "absolute",
  left: "50%",
  marginLeft: "-120px"
};

const returnStyle = {position: "absolute", bottom: "25px", left: "25px", textDecoration: "none"};

export default function Map(props) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: props.KEY.KEY,
    libraries: ['places']
  })

  const [map, setMap] = React.useState(null)

  const [mapCenter, setMapCenter] = React.useState(center);
  const [markerPosition, setMarkerPosition] = React.useState(null);
  const [markerHidden, setMarkerHidden] = React.useState(true);
  const [autoComplete, setAutoComplete] = React.useState(null);

  const mapClick = (clickPosition) => {
    setMarkerPosition({lat: clickPosition.latLng.lat(), lng: clickPosition.latLng.lng()});
    store.dispatch({type: 'newMark', payload: {type: "mapClick", lat: clickPosition.latLng.lat(), lng: clickPosition.latLng.lng()}});
    setMarkerHidden(false);
  }

  const onLoad = autocomplete => setAutoComplete(autocomplete);
  const onPlacesChanged = () => {
    if (autoComplete !== null) {
      console.log(autoComplete.getPlace())
      if (autoComplete.getPlace().geometry !== undefined){
        setMarkerPosition({lat: autoComplete.getPlace().geometry.location.lat(), lng: autoComplete.getPlace().geometry.location.lng()});
        setMarkerHidden(false);
        store.dispatch({type: 'newMark', payload: autoComplete.getPlace()});
        setMapCenter({lat: autoComplete.getPlace().geometry.location.lat(), lng: autoComplete.getPlace().geometry.location.lng()})
      } else {
        console.log("No place found");
      }
        
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  }

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return isLoaded ? (
  	<>
        <GoogleMap
          id="googleMap"
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={mapClick}
        >
          <>
            <Marker   
              position={markerPosition}
              hidden={markerHidden} 
              id="chaoticMarker"
            />
            <Autocomplete
              onLoad={onLoad}
              onPlaceChanged={
                onPlacesChanged
              }
            >
              <input
                type="text"
                className="text-center"
                placeholder="Search your favorite place"
                style={inputStyle}
              />
            </Autocomplete>
          </>
        </GoogleMap>
        <Link href='/apps'><a className='badge badgeWhite' style={returnStyle}>  RETURN  </a></Link>
    </>
  ) : <></>
}
