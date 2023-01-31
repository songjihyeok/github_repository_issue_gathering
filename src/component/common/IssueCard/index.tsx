import React, { useState } from 'react'
import styled from 'styled-components'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Like from "@/component/common/like"
import { } from '@/pages/Home/type';
import Grid from '@mui/material/Unstable_Grid2';
import { issueDataInterface } from "@/pages/Issue/type"


export default function IssueCard({ item }:
     {
          item: issueDataInterface,
     }) {



     return (
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
               <ListItem>
                    <FullWidthGrid container spacing={2} >
                         <Grid xs={12} >
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
                                                  {item.state}
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