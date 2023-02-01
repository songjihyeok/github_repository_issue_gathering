import { Fab } from '@mui/material';
import Favorite from "@mui/icons-material/Favorite"


export default function likeButton({ liked = false, onClick }: { liked?: boolean, onClick: React.MouseEventHandler<HTMLButtonElement> | undefined }) {
     return (
          <>
               {liked ?
                    <Fab aria-label="like" color="error" onClick={onClick}>
                         <Favorite />
                    </Fab> :
                    <Fab aria-label="like" color="default" onClick={onClick}>
                         <Favorite />
                    </Fab>
               }
          </>

     );
}

