import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function SwitchHeart({isFavorit , item}) {



            return(
                <>
                            <button onClick={() => isFavorit(item)}>
                                <FavoriteBorderIcon />
                            </button>

                      </>
            )

}
