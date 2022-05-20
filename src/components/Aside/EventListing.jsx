import {Marker} from "@react-google-maps/api";
import {Grid} from "@mui/material";

export default function EventListing({data}) {
    const events = data.map((item, key) => {
        if (item.coordonnees_insee !== null){
            /*
            item.nom_de_la_manifestation
            item.domaine
            item.site_web
            item.commune_principale
            item.commentaires
            item.departement
             */
            return(
                <li key={"filtredList-"+key}>
                    <span className="title">{item.nom_de_la_manifestation}<span>{item.domaine}</span></span>
                    <address>{item.commune_principale} / {item.departement}</address>
                    {item.site_web ? <a href={"https://"+item.site_web} target="_blank" title={item.site_web}>{item.site_web}</a> : null}
                    {item.commentaires ? <p>{item.commentaires}</p> : null}
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