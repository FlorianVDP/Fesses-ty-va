import './App.css';
import {useEffect, useState} from "react";
import GoogleMapComponent from "./components/GoogleMap/GoogleMapComponent";
import FormFilterDatas from "./components/FormFilterDatas";
import Aside from "./components/Aside/Aside";

export default function App() {
    const [data, setData] = useState([])
    const [dataFiltred, setDataFiltred] = useState([])
    const [filterRegion, setFilterRegion] = useState()
    useEffect(() => {
        fetch("https://data.culture.gouv.fr/api/v2/catalog/datasets/panorama-des-festivals/exports/json")
            .then(
                res => {
                    return res.json()
                }
            )
            .then(
                res => {
                    setData(res)
                }
            )
            .catch(e => console.log(e))
    }, [])
    useEffect(() => {
        // FilterType
        if (filterRegion === null) {
            setDataFiltred(data)
        } else {
            setDataFiltred(
                data.filter(
                    item => (item.region.includes(filterRegion))
                )
            )
        }
    }, [filterRegion, data])

    function clearFilter() {
        setFilterRegion()
    }
    //TODO Make other filters
    function filterRegions(e) {
        setFilterRegion(e.target.value)
    }

    function showEvent(event) {
        //TODO Show event in side window
        console.log(event)
    }

    return (
        <>
            <FormFilterDatas data={data} filterRegions={filterRegions} clearFilter={clearFilter}/>
            {dataFiltred.length > 0 ? <Aside data={dataFiltred} /> : null}
            <GoogleMapComponent data={dataFiltred} showEvent={showEvent}/>
        </>
    );
}