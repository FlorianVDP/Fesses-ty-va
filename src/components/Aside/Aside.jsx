import {BottomNavigationAction, BottomNavigation, Grid, Paper} from "@mui/material";
import {useEffect, useState} from "react";
import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {List} from "@mui/icons-material";
import EventListing from "./EventListing";
import FavoritesListing from "./FavoritesListing";

export default function Aside({data, addToCalendar, currentEvent}){
    const [value, setValue] = useState(0)
    const [favoritList, setFavoritList] = useState([])

    useEffect(()=>{
        setFavoritList(
            JSON.parse(localStorage.getItem("favoritList")) ? JSON.parse(localStorage.getItem("favoritList")) : []
        )
    }, [])

    function toggleFavorit(itemToAddFav){

            setFavoritList( prevState => {
                const newFav = prevState.includes(itemToAddFav) ? prevState.filter(item => item !== itemToAddFav) : [...prevState.filter(item => item !== itemToAddFav), itemToAddFav];
                localStorage.setItem("favoritList", JSON.stringify(newFav))
                return newFav
            })
        }

    return(
            <aside>
                <Grid container className={"Aside"} height="100%">
                    {value === 0 ? <EventListing currentEvent={currentEvent} toggleFavorit={toggleFavorit} favoritList={favoritList} data={data} addToCalendar={(item) => addToCalendar(item)} /> : null}
                    {value === 1 ? <FavoritesListing toggleFavorit={toggleFavorit} favoritList={favoritList} addToCalendar={(item) => addToCalendar(item)} /> : null}
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