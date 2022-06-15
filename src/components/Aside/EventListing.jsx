import sanitize from "../../functions/sanitize";
import {Button} from "@mui/material";
import DateRangeIcon from '@mui/icons-material/DateRange';
import SwitchHeart from "./SwitchHeart";
import {useState, useEffect} from "react";
import { FacebookShareButton , FacebookIcon ,  TwitterShareButton , TwitterIcon } from "react-share";



export default function EventListing({data, addToCalendar, isFavorit, currentEvent , favorites}) {
  //const [events, setEvents] = useState();

  const events = data.map((item, key) => {
        if (item.coordonnees_insee !== null){
       // const baseUrl = new URL(item.site_web , '')
            return(
                <li key={"eventList-"+key} className={currentEvent === item ? "active": null} id={sanitize(item.nom_de_la_manifestation)}>
                    <div>
                        <span className="title">
                            <span>{item.nom_de_la_manifestation}</span>

                            <SwitchHeart favorites={favorites} item={item} isFavorit={() => isFavorit(item)}/>
                            <button className="pointer" onClick={() => addToCalendar(item)}><DateRangeIcon /></button>

                        </span>
                        <span>{item.domaine}</span>
                        <address>{item.commune_principale} / {item.departement}</address>
                        <span className="links">

                        {item.site_web ? <Button variant="outlined" href={item.site_web} target="_blank" title={item.site_web}>Voir plus</Button> : null}
                            <span className="SocialMedia">
                              <FacebookShareButton url={item.site_web}>
                                  <FacebookIcon  round={true}/>
                              </FacebookShareButton>
                              <TwitterShareButton url={item.site_web}>
                                  <TwitterIcon  round={true}/>
                              </TwitterShareButton>
                            </span>
                          </span>

                        {item.commentaires ? <p>{item.commentaires}</p> : null}
                    </div>
                </li>
            )
        }else{
            return (
                <></>
            )
        }
    });


    function sortBy(){
      const sortedData = data.sort((a, b)=>{
        const nameA = a.nom_de_la_manifestation;
        const nameB = b.nom_de_la_manifestation;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      });

      //setEvents(sortedData)
    }

    return(
            <ul className="EventListing">
              <Button variant="text" onClick={sortBy}> Trier A-Z</Button>
                {events}
            </ul>
    )
}
