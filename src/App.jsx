import './App.css';
import {useEffect, useRef, useState} from "react";
import GoogleMapComponent from "./components/GoogleMap/GoogleMapComponent";
import FormFilterDatas from "./components/FormFilterDatas";
import Aside from "./components/Aside/Aside";
import sanitize from "./functions/sanitize";
import AddToCalendar from "./functions/addToCalendar";

export default function App() {
    const [data, setData] = useState([])
    const [dataFiltred, setDataFiltred] = useState([])
    const [filterRegion, setFilterRegion] = useState()
    const [filterDomaine, setFilterDomaine] = useState()
    const [filterAnnee, setFilterAnnee] = useState()
    const [currentEvent, setCurrentEvent] = useState()

    useEffect(() => {
        fetch("https://data.culture.gouv.fr/api/v2/catalog/datasets/panorama-des-festivals/exports/json")
            .then(
                res => {
                    return res.json()
                }
            )
            .then(
                res => {
                    const dataSanitized = res.map(item => {
                        item.domaine = sanitize(item.domaine)
                        return item
                    })
                    setData(dataSanitized)
                }
            )
            .catch(e => console.error(e))
    }, [])
    useEffect(() => {
        if (!filterRegion && !filterDomaine && !filterAnnee) {
            setDataFiltred([])
        } else {
            setDataFiltred(
                data.filter(
                    item => filterRegion ? (item.region === filterRegion) : true
                ).filter(
                        item => filterDomaine ?(item.domaine === filterDomaine):true
                    ).filter(
                        item => filterAnnee ?(item.mois_habituel_de_debut === filterAnnee):true
                    )
            )
        }
    }, [filterRegion, filterDomaine, filterAnnee, data])

    function filterRegions(e) {
        setFilterRegion(e.target.value)
    }
    function filterDomaines(e) {
        setFilterDomaine(e.target.value)
    }
    function filterAnnees(e) {
        setFilterAnnee(e.target.value)
    }

    function showEvent(item) {
        //TODO Show event in side window
        setCurrentEvent(
            item
        )
        const eventName = sanitize(item.nom_de_la_manifestation);
        document.getElementById(eventName).scrollIntoView({ behavior: 'smooth' })
    }

    function clearFilters(){
        setDataFiltred(
            prevState => []
        )
    }

    return (
        <>
            <FormFilterDatas data={data} filterRegions={filterRegions} filterDomaines={filterDomaines} filterAnnees={filterAnnees} clearFilters={clearFilters} />
            {dataFiltred.length > 0 ? <Aside currentEvent={currentEvent} data={dataFiltred} addToCalendar={AddToCalendar} /> : null}
            <GoogleMapComponent data={dataFiltred} showEvent={showEvent} />
        </>
    );
}