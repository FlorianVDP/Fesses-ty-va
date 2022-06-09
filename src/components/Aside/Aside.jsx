import {BottomNavigationAction, BottomNavigation, Grid, Paper} from "@mui/material";
import {useState} from "react";
import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {List} from "@mui/icons-material";
import EventListing from "./EventListing";
import FavoritesListing from "./FavoritesListing";

export default function Aside({data, addToCalendar, currentEvent}){
    const [value, setValue] = useState(0)

    const [favorit , setFavorit] = useState([]);

    function isFavorit(itemFav){

      setFavorit(prevFav => {
          const newFav = favorit.includes(itemFav) ?
              setFavorit(prevFav.filter(item => item !== itemFav ))
              :
              setFavorit([...prevFav.filter(item => item !== itemFav) , itemFav])
          return newFav
    })

    }



    return(
            <aside>
                <Grid container className={"Aside"} height="100%">
                    {value === 0 ? <EventListing data={data} addToCalendar={(item) => addToCalendar(item)} isFavorit={isFavorit} currentEvent={currentEvent} /> : null}
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
