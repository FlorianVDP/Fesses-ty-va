import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function SwitchHeart({isFavorit , item , favorites }) {

            return(
                <>
                            <button className="pointer" onClick={() => isFavorit(item)}>
                            {favorites?.some(
                                (element) => element?.nom_de_la_manifestation === item?.nom_de_la_manifestation
                                  ) ? (
                                     <FavoriteIcon />
                                  ) : (
                                      <FavoriteBorderIcon />
                                  )}
                            </button>

                      </>
            )

}
