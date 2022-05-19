import {BottomNavigationAction, BottomNavigation, Grid, Paper} from "@mui/material";
import {useState} from "react";
import * as React from 'react';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {List, ViewAgenda} from "@mui/icons-material";

export default function Aside(){
    const [value, setValue] = useState()
    //TODO List event when filter change
    //TODO Add to calendar
    return(
        <Grid container overflow={"scroll"} className={"Aside"} >
            <aside >
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Events" icon={<List />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Agenda" icon={<ViewAgenda />} />
                    </BottomNavigation>
                </Paper>
            </aside>
        </Grid>
    )
}