import React, { useState } from 'react'
import styled from 'styled-components'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { issueDataInterface } from "@/component/Issue/type"


export default function IssueCard({ item }:
     {
          item: issueDataInterface,
     }) {


     const onOpenGitRepository = () => {
          window.open(item.html_url, '_blank')
     }

     return (
          <List sx={{ width: '100%', bgcolor: 'background.paper' }} onClick={onOpenGitRepository}>
               <ListItem>
                    <FullWidthGrid container spacing={2} >
                         <Grid xs={12} >
                              <ListItemText
                                   primary={item?.title}
                                   secondary={
                                        <React.Fragment>
                                             <Typography
                                                  sx={{ display: 'inline' }}
                                                  component="span"
                                                  variant="body2"
                                                  color="text.primary"
                                             >
                                                  Repository: {item?.repository_name}
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
                         </Grid>
                    </FullWidthGrid>
               </ListItem>
               <Divider variant="inset" component="li" />
          </List>
     );
}

const FullWidthGrid = styled(Grid)`
     width: 100%;
`