import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function GoogleMapComponent() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA0n6tlDmXklI2kMKIxLOXn-3_V0cZDeR0",
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat: 46, lng: 2 }), []);

    return (
        <GoogleMap zoom={6} center={center} mapContainerClassName="map-container">
            <Marker position={{lat: 5, lng: 2}} />
            <Marker position={center} />
        </GoogleMap>
    );
}