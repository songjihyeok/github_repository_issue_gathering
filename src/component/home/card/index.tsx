import React, { useState } from 'react'
import styled from 'styled-components'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Like from "@/component/common/like"

export default function Card() {
     const [liked, setLiked] = useState(false)

     const likeHandler = () => {
          setLiked(!liked)
     }

     return (
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
               <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                         primary="Brunch this weekend?"
                         secondary={
                              <React.Fragment>
                                   <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                   >
                                        Ali Connors
                                   </Typography>
                                   {" — I'll be in your neighborhood doing errands this…"}
                              </React.Fragment>
                         }
                    />
                    <Like liked={liked} onClick={likeHandler}></Like>
               </ListItem>
               <Divider variant="inset" component="li" />
          </List>
     );
}

