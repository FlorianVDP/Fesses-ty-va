import {Button} from "@mui/material";
import SwitchHeart from "./SwitchHeart";
import DateRangeIcon from '@mui/icons-material/DateRange';
import { FacebookShareButton , FacebookIcon ,  TwitterShareButton , TwitterIcon } from "react-share";

export default function FavoritesListing({ addToCalendar , isFavorit , favorit }) {
    const favorites = favorit.map((item , key) => {

            return(
                <li key={"eventList-"+key}>
                            <div>
                                <span className="title">
                                    <span>{item.nom_de_la_manifestation}</span>
                                    <SwitchHeart favorites={favorit} item={item} isFavorit={() => isFavorit(item)}/>
                                    <button onClick={() => addToCalendar(item)}><DateRangeIcon/></button>
                                </span>
                                <span>{item.domaine}</span>
                                <address>{item.commune_principale} / {item.departement}</address>
                                {item.commentaires ? <p>{item.commentaires}</p> : null}
                                <span className="links">
                                  {item.site_web ? <Button variant="outlined" href={item.site_web} target="_blank" title={item.site_web}>Voir plus</Button> : null}
                                    <span className="SocialMedia">
                                      <FacebookShareButton url={item.site_web}>
                                          <FacebookIcon  round={true}/>
                                      </FacebookShareButton>
                                      <TwitterShareButton url={item.site_web}>
                                          <TwitterIcon round={true}/>
                                      </TwitterShareButton>
                                    </span>
                          </span>

                            </div>
                        </li>
            )
        });





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
