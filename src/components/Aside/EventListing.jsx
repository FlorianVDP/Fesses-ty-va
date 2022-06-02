import {Button} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import sanitize from "../../functions/sanitize";

export default function EventListing({data, addToCalendar, isFavorit, currentEvent}) {
    const events = data.map((item, key) => {
        if (item.coordonnees_insee !== null){
          
            return(
                <li key={"eventList-"+key} className={currentEvent === item ? "active": null} id={sanitize(item.nom_de_la_manifestation)}>
                    <div>
                        <span className="title">
                            <span>{item.nom_de_la_manifestation}</span>
                            <button onClick={() => addToCalendar(item)}>Ajouter à l'agenda</button>
                            <button onClick={()=>isFavorit(item)}>
                               <FavoriteBorderIcon/>
                            </button>
                        </span>
                        <span>{item.domaine}</span>
                        <address>{item.commune_principale} / {item.departement}</address>
                        {item.site_web ? <Button variant="outlined" href={item.site_web} target="_blank" title={item.site_web}>Voir plus</Button> : null}
                        {item.commentaires ? <p>{item.commentaires}</p> : null}
                    </div>
                </li>
            )
        }else{
            return (
                <></>
            )
        }
    })
    return(
            <ul className="EventListing">
                {events}
            </ul>
    )
}