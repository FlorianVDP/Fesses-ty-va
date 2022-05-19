import {useLoadScript} from "@react-google-maps/api";
import Map from "./Map";

export default function GoogleMapComponent({data, showEvent}) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA0n6tlDmXklI2kMKIxLOXn-3_V0cZDeR0",
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map data={data} showEvent={(item) => showEvent(item)} />;
}