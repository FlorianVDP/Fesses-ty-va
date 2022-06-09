import {Marker} from "@react-google-maps/api";
import {Button , grid} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function SwitchHeart({data , Favorit, isFavorit , item}) {



            return(
                <>
                            <button onClick={() => isFavorit(item)}>
                                <FavoriteBorderIcon />
                            </button>

                      </>
            )

}
