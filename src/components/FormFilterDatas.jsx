import {useMemo, useState} from "react";
import {Button, FormControl, InputLabel, MenuItem, Select, Grid } from "@mui/material";
import extractUniqueItem from "../functions/extractUniqueItem";

export default function FormFilterDatas({data, filterRegions, filterDomaines, clearFilters}) {
    const [stateRegion, setRegion] = useState("");
    const [stateDomaine, setDomaine] = useState("");
    const uniqueRegion = useMemo(()=>{
        return extractUniqueItem(data, "region")
    }, [data])

    const regions = uniqueRegion.map(item => {
        if (!undefined || !false){
            return (
                <MenuItem value={item} key={"menuItemRegion-"+item}>{item}</MenuItem>
            )
        }else{
            return null
        }
    })

    const uniqueDomaine = useMemo(()=>{
        return extractUniqueItem(data, "domaine")
    }, [data])

    const domaines = uniqueDomaine.map(item => {
        if (!undefined || !false){
            return (
                <MenuItem value={item} key={"menuItemDomaine-"+item}>{item.charAt(0).toUpperCase() + item.slice(1)}</MenuItem>
            )
        }else{
            return null
        }
    })

    function changeRegion(e){
        setRegion(
            prevState => e.target.value
        )
        filterRegions(e)
    }

    function changeDomaine(e){
        setDomaine(
            prevState => e.target.value
        )
        filterDomaines(e)
    }

    function clearFilter() {
        setRegion(
            prevState => ""
        )
        setDomaine(
            prevState => ""
        )
        clearFilters()
    }
    return (
        <Grid container padding={"1em"} justifyContent={"start"} alignItems={"center"} spacing={2} className={"FormFilterDatas"}>
           <Grid item xs={2}>
                <FormControl fullWidth>
                    <InputLabel id="region">Région</InputLabel>
                    <Select
                        labelId="region"
                        id="region"
                        value={stateRegion}
                        label="Région"
                        onChange={changeRegion}
                    >
                        {regions}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth>
                    <InputLabel id="domaines">Domaine</InputLabel>
                    <Select
                        labelId="domaines"
                        id="domaines"
                        value={stateDomaine}
                        label="domaines"
                        onChange={changeDomaine}
                    >
                        {domaines}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth>




                </FormControl>
            </Grid>
            <Grid item>
                <Button variant="text" onClick={clearFilter}>Réinitialiser</Button>
            </Grid>
        </Grid>
    )
}
