import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {Button} from "@mui/material";

export default function FavoritesListing({ addToCalendar , isFavorit , favorit}) {
    const favorites = favorit.map((item , key) => { 
            return(
                <li key={"eventList-"+key}>
                            <div>
                                <span className="title">
                                    <span>{item.nom_de_la_manifestation}</span>
                                    <button onClick={()=>isFavorit(item)}><FavoriteBorderIcon/></button>
                                    <button onClick={() => addToCalendar(item)}>Ajouter à l'agenda </button>
                                </span>
                                <span>{item.domaine}</span>
                                <address>{item.commune_principale} / {item.departement}</address>
                                {item.site_web ? <Button variant="outlined" href={item.site_web} target="_blank" title={item.site_web}>Voir plus</Button> : null}
                                {item.commentaires ? <p>{item.commentaires}</p> : null}
                            </div>
                        </li>
            )
        });

    return ( 
        favorites.length === 0 ? 
            <div> 
                <span> Aucn événement à vos favoris pour le moment </span>
            </div>
            : 
            favorites
     )
}
