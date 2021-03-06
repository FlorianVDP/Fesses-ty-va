import {useMemo, useRef} from "react";
import {GoogleMap, Marker} from "@react-google-maps/api";

export default function Map({data, showEvent}) {
    const element = useRef()

    const center = useMemo(() => ({ lat: 46, lng: 2 }), []);
    const markers = data.map((item, key) => {

        if (item.coordonnees_insee !== null){
            const position = {
                lat : item.coordonnees_insee.lat,
                lng : item.coordonnees_insee.lon,
            }
            return(
                <Marker position={position} key={"marker-"+key} onClick={()=>showEvent(item)} ref={element} />
            )
        }else{
            return (
                <></>
            )
        }
    })

    //TODO Add marker cluster
    //const markerCluster = new MarkerClusterer({ map, markers });

    return (
        <GoogleMap zoom={6} center={center} mapContainerClassName="map-container">
            {markers}
        </GoogleMap>
    );
}