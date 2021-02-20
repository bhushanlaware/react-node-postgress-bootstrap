import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps';

const MapComponent = withScriptjs(withGoogleMap((props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={props.position}
    >
        {props.isMarkerShown && <Marker position={props.position} />}
    </GoogleMap>
)));

const GMapComponent = (props) => {
    return (<MapComponent
        position={props.position}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />  );
}
 
export default GMapComponent;
