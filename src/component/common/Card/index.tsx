import React, { useState } from 'react'
import styled from 'styled-components'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { itemInCludeLikedInterface } from '@/types/common'
import Grid from '@mui/material/Unstable_Grid2';
import Like from "@/component/common/LikeButton"
import Alert from '@mui/material/Alert';


export default function Card({
     item,
     likeHandler = () => { },
     error
}:
     {
          item: itemInCludeLikedInterface,
          likeHandler?: (element: itemInCludeLikedInterface) => void
          error: {
               status: boolean;
               elementId: number;
          }
     }) {



     return (<>
          <List sx={{ width: '100%' }}>
               <ListItem>
                    <FullWidthGrid container>
                         <Grid xs={10} >
                              <ListItemText
                                   primary={item.full_name}
                                   secondary={
                                        <React.Fragment>
                                             <Typography
                                                  sx={{ display: 'inline' }}
                                                  component="span"
                                                  variant="body2"
                                                  color="text.primary"
                                             >
                                                  {item.description}
                                             </Typography>
                                        </React.Fragment>
                                   }
                              />
                         </Grid>
                         <Grid xsOffset={1} xs={1}>
                              <Like liked={item.liked} onClick={() => likeHandler(item)}></Like>
                         </Grid>

                    </FullWidthGrid>

               </ListItem>
               {error.status && error.elementId === item.id ? <><Alert severity="error"> 5개 이상 등록되지 않습니다. </Alert>
               </> : null}
               <Divider />
          </List>
     </>
     );
}

const FullWidthGrid = styled(Grid)`
     width: 100%;
`

