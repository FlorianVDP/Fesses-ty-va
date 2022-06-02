import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {Button} from "@mui/material";
import {Close} from "@mui/icons-material";

export default function FavoritesListing({favoritList, addToCalendar, toggleFavorit}) {
    const favorites = favoritList.map((item, key) => {
        if (item.coordonnees_insee !== null){
            return(
                <li key={"favorittList-"+key}>
                    <div>
                        <span className="title">
                            <span>{item.nom_de_la_manifestation}</span>
                            <button onClick={() => addToCalendar(item)}>Ajouter à l'agenda</button>
                            <button onClick={()=>toggleFavorit(item)}><Close/></button>
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
        <ul className="FavoritListing">
            {favorites}
        </ul>
    )
}