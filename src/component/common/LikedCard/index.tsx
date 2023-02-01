import React, { useState } from 'react'
import styled from 'styled-components'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { itemInCludeLikedInterface } from '@/types/common'
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Issue from '@/component/common/LikedCard/Issue';
import Like from "@/component/common/LikeButton"

interface ExpandMoreProps extends IconButtonProps {
     expand: boolean;
}


export default function LikedCard({ item, likeHandler }:
     {
          item: itemInCludeLikedInterface,
          likeHandler: (element: itemInCludeLikedInterface) => void
     }) {

     const [expanded, setExpanded] = useState(false)

     const handleExpandClick = () => {
          setExpanded(!expanded)
     }

     return (
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
               <ListItem>
                    <FullWidthGrid container spacing={2} >

                         <ListItemText
                              primary={item?.full_name}
                              secondary={
                                   <React.Fragment>
                                        <Typography
                                             sx={{ display: 'inline' }}
                                             component="span"
                                             variant="body2"
                                             color="text.primary"
                                        >
                                             Repository: {item.full_name}
                                        </Typography>
                                        <Typography
                                             sx={{ display: 'inline' }}
                                             component="span"
                                             variant="body2"
                                             color="text.primary"
                                        >
                                             {/* {item.} */}
                                        </Typography>
                                   </React.Fragment>
                              }
                         />
                         <Grid xsOffset={1} xs={1}>
                              <Like liked={item.liked} onClick={() => likeHandler(item)}></Like>
                         </Grid>


                    </FullWidthGrid>

               </ListItem>
               <CardActions disableSpacing>
                    <p> issues:</p>
                    <ExpandMore
                         expand={expanded}
                         onClick={handleExpandClick}
                         aria-expanded={expanded}
                         aria-label="show more"
                    >
                         <ExpandMoreIcon />
                    </ExpandMore>
               </CardActions>
               <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                         <Issue full_name={item.full_name} opened={expanded} />
                    </CardContent>
               </Collapse>
               <Divider variant="inset" component="li" />
          </List>
     );
}

const FullWidthGrid = styled(Grid)`
     width: 100%;
`
const ExpandMore = styled((props: ExpandMoreProps) => {
     const { expand, ...other } = props;
     return <IconButton {...other} />;
})(({ theme, expand }) => ({
     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
     marginLeft: 'auto',
     // transition: theme.transitions.create('transform', {
     //      duration: theme.transitions.duration.shortest,
     // }),
}));
