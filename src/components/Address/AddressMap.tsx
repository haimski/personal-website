import React, { FC } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export interface AddressMapProps {
    mapContainerStyle: React.CSSProperties;
    center: {
        lat: number;
        lng: number;
    };
}

const AddressMap: FC<AddressMapProps> = ({
    mapContainerStyle,
    center
}) => {
    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}

export default AddressMap;
