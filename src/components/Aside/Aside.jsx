import {BottomNavigationAction, BottomNavigation, Grid, Paper} from "@mui/material";
import {useState, useEffect} from "react";
import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {List} from "@mui/icons-material";
import EventListing from "./EventListing";
import FavoritesListing from "./FavoritesListing";

export default function Aside({data, addToCalendar, currentEvent}){
    const [value, setValue] = useState(0)
    const [favorit , setFavorit] = useState([]);

    useEffect(() => {

        if (JSON.parse(localStorage.getItem('itemFav'))) {
          setFavorit(
            JSON.parse(localStorage.getItem('itemFav'))
          )
        }

    }, []);

    function isFavorit(itemFav){
      let newEntry = null;
      if (favorit.includes(itemFav)) {
        newEntry = favorit.filter(item => item !== itemFav )
      }else{
        newEntry = [...favorit.filter(item => item !== itemFav) , itemFav]
      }
      setFavorit(
          newEntry
    )
    localStorage.setItem('itemFav', JSON.stringify(newEntry));


    }

    return(
            <aside>
                <Grid container className={"Aside"} height="100%">
                    {value === 0 ? <EventListing data={data} addToCalendar={(item) => addToCalendar(item)} isFavorit={isFavorit} currentEvent={currentEvent} favorites={favorit} /> : null}
                    {value === 1 ? <FavoritesListing data={data} addToCalendar={(item) => addToCalendar(item)} isFavorit={isFavorit} favorit={favorit}/> : null}

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

                    </BottomNavigation>
                </Paper>
                </Grid>
            </aside>
    )
}
