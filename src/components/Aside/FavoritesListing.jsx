import {Button} from "@mui/material";
import SwitchHeart from "./SwitchHeart";
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function FavoritesListing({ addToCalendar , isFavorit , favorit}) {
    const favorites = favorit.map((item , key) => {

            return(
                <li key={"eventList-"+key}>
                            <div>
                                <span className="title">
                                    <span>{item.nom_de_la_manifestation}</span>
                                    <SwitchHeart isFavorit={() => isFavorit(item)}/>
                                    <button onClick={() => addToCalendar(item)}><DateRangeIcon/></button>
                                </span>
                                <span>{item.domaine}</span>
                                <address>{item.commune_principale} / {item.departement}</address>
                                {item.site_web ? <Button variant="outlined" href={item.site_web} target="_blank" title={item.site_web}>Voir plus</Button> : null}
                                {item.commentaires ? <p>{item.commentaires}</p> : null}
                            </div>
                        </li>
            )
        });
        console.log(favorites , 'favorites');





    return (
        favorites.length === 0 ?
            <div className="Noevent">
                <span> Aucun événement à vos favoris pour le moment </span>
            </div>
            :

            <ul className="EventListing">
               {favorites}
             </ul>

     )
}
