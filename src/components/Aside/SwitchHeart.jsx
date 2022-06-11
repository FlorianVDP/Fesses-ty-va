import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoritesListing from './FavoritesListing';
import EventListing from './EventListing';


export default function SwitchHeart({isFavorit , item , favorites }) {



// si element EventListing est présent dans tableau favorites,
// alors afficher FavoriteIcon, sinon FavoriteBorder icon

// if favorites.includes(eventlisting) { coeur plein } else { coeur vide }
//  { FavoritesListing.includes(EventListing) ? <FavoriteIcon/> : <FavoriteBorderIcon/> }


            return(
                <>
                            <button className="pointer" onClick={() => isFavorit(item)}>
                               <FavoriteIcon/>
                            </button>

                      </>
            )

}
