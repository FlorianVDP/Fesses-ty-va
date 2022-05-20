import {useMemo, useState} from "react";
import {Button, FormControl, InputLabel, MenuItem, Select, Grid} from "@mui/material";

export default function FormFilterDatas({data, filterRegions, clearFilter}) {
    const [stateRegion, setRegion] = useState("");
    const [stateDomaine, setDomaine] = useState("");
    const [stateMois, setStateMois] = useState("");

    const uniqueRegion = useMemo(()=>{
        const deeptypes = data.map(item => item.region);
        const flatTypes = deeptypes.flat();
        const dataTypes = [...new Set(flatTypes)].sort();
        return dataTypes
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

    //TODO Use custom hook ?

    const uniqueDomaine = useMemo(()=>{
        const deeptypes = data.map(item => item.domaine);
        const flatTypes = deeptypes.flat();
        const dataTypes = [...new Set(flatTypes)].sort();
        return dataTypes
    }, [data])

    const domaines = uniqueDomaine.map(item => {
        return (
            <MenuItem value={item} key={"menuItemDomaine-"+item}>{item}</MenuItem>
        )
    })

    //TODO Use custom hook ?

    const uniqueMois = useMemo(()=>{
        const deeptypes = data.map(item => item.mois_habituel_de_debut);
        const flatTypes = deeptypes.flat();
        const dataTypes = [...new Set(flatTypes)].sort();
        return dataTypes
    }, [data])

    const mois = uniqueMois.map(item => {
        return (
            <MenuItem value={item} key={"menuItemMois-"+item}>{item}</MenuItem>
        )
    })


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
                        //TODO How to use 2 functions ?
                        onChange={(e) => filterRegions(e)}
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
                        //onChange={(e) => filterRegions(e)}
                    >
                        {null}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth>
                    <InputLabel id="mois">Date</InputLabel>
                    <Select
                        labelId="mois"
                        id="mois"
                        value={stateMois}
                        label="mois"
                        //onChange={(e) => filterRegions(e)}
                    >
                        {null}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <Button variant="text">Clear</Button>
            </Grid>

            {/*<select name="domaine" id="domaine">
                {domaine}
            </select>
            <select name="mois" id="mois">
                {mois}
            </select>*/}
        </Grid>
    )
}