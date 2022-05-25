import './App.css';
import {useEffect, useState} from "react";
import GoogleMapComponent from "./components/GoogleMap/GoogleMapComponent";
import FormFilterDatas from "./components/FormFilterDatas";
import Aside from "./components/Aside/Aside";

export default function App() {
    const [data, setData] = useState([])
    const [dataFiltred, setDataFiltred] = useState([])
    const [filterRegion, setFilterRegion] = useState()
    const [filterDomaine, setFilterDomaine] = useState()
    const [filterAnnee, setFilterAnnee] = useState()

    function sanitize(str){
        str = str.toLowerCase()
        return str
    }
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
                        //console.log(item.domaine)
                        return item
                    })
                    setData(dataSanitized)
                }
            )
            .catch(e => console.log(e))
    }, [])
    useEffect(() => {
        if (!filterRegion && !filterDomaine && !filterAnnee) {
            setDataFiltred([])
        } else {
            console.log("filter on")
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

    function showEvent(event) {
        //TODO Show event in side window
        console.log(event)
    }
    function clearFilters(){
        setDataFiltred(
            prevState => []
        )
    }
    return (
        <>
            <FormFilterDatas data={data} filterRegions={filterRegions} filterDomaines={filterDomaines} filterAnnees={filterAnnees} clearFilters={clearFilters} />
            {dataFiltred.length > 0 ? <Aside data={dataFiltred} /> : null}
            <GoogleMapComponent data={dataFiltred} showEvent={showEvent}/>
        </>
    );
}