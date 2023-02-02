import React from 'react'
import styled from 'styled-components'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { issueWithRepositoryName } from '../LikedCard/Issue/type';

export default function IssueCard({ item }:
     {
          item: issueWithRepositoryName,
     }) {

     const onClickIssue = () => {
          window.open(item.html_url, "_blank")
     }


     return (
          <List sx={{ width: '100%', bgcolor: 'background.paper', cursor: "pointer" }} onClick={onClickIssue}>
               <ListItem>
                    <FullWidthGrid container spacing={2} >
                         <Grid xs={10} >
                              <ListItemText
                                   primary={item.title}
                                   secondary={
                                        <React.Fragment>
                                             <Typography
                                                  sx={{ display: 'inline' }}
                                                  component="span"
                                                  variant="body2"
                                                  color="text.primary"
                                             >
                                                  {item.repository_name}
                                             </Typography>
                                        </React.Fragment>
                                   }
                              />
                         </Grid>

                    </FullWidthGrid>
               </ListItem>
               <Divider />
          </List>
     );
}

const FullWidthGrid = styled(Grid)`
     width: 100%;
`

