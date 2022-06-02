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

export default function Aside({data, addToCalendar}){
    const [value, setValue] = useState(0)
    const [favorit , setFavorit] = useState([]); 
    //TODO List event when filter change
    //TODO Add to calendar

    // function on click 
    function isFavorit(itemFav){ 

        setFavorit(prevFav => {
            const newFav = favorit.includes(itemFav) ? 
                setFavorit(prevState => prevFav.filter(item => item !== itemFav ))
                : 
                setFavorit(prevState => [...prevFav.filter(item => item !== itemFav) , itemFav])    
                

            localStorage.setItem('itemFav', newFav); 
            return newFav
    })
        
       console.log('ajouter')
    }
    

    return(
            <aside>
                <Grid container className={"Aside"} height="100%">
                    {value === 0 ? <EventListing data={data} addToCalendar={(item) => addToCalendar(item)} isFavorit={isFavorit} /> : null}
                    {value === 1 ? <FavoritesListing data={data} addToCalendar={(item) => addToCalendar(item)} isFavorit={isFavorit} favorit={favorit}/> : null}
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
{/*
                        <BottomNavigationAction label="Agenda" icon={<ViewAgenda />} className="hidden"/>
*/}
                    </BottomNavigation>
                </Paper>
                </Grid>
            </aside>
    )
}