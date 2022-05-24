import {BottomNavigationAction, BottomNavigation, Grid, Paper} from "@mui/material";
import {useEffect, useState} from "react";
import * as React from 'react';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {List, ViewAgenda} from "@mui/icons-material";
import EventListing from "./EventListing";
import Calendar from "./Calendar";
import FavoritesListing from "./FavoritesListing";

export default function Aside({data}){
    const [value, setValue] = useState(0)
    //TODO List event when filter change
    //TODO Add to calendar

    return(
            <aside>
                <Grid container className={"Aside"} height="100%">
                    {value === 0 ? <EventListing data={data} /> : null}
                    {value === 1 ? <FavoritesListing /> : null}
                    {value === 2 ? <Calendar /> : null}
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
                        <BottomNavigationAction label="Agenda" icon={<ViewAgenda />} className="hidden"/>
                    </BottomNavigation>
                </Paper>
                </Grid>
            </aside>
    )
}