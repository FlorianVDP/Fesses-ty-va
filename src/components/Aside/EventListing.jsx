import {Marker} from "@react-google-maps/api";
import {Button , grid} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function EventListing({data, addToCalendar}) {
    const events = data.map((item, key) => {
        if (item.coordonnees_insee !== null){
            /*
            item.nom_de_la_manifestation
            item.domaine
            item.site_web
            item.commune_principale
            item.commentaires
            item.departement

            TODO : changement icon au click
             */
            return(
                <li key={"eventList-"+key}>
                    <div>
                        <span className="title">
                            <span>{item.nom_de_la_manifestation}</span>
                            <FavoriteBorderIcon/>
                            <button onClick={() => addToCalendar(item)}>Ajouter à l'agenda</button>
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