import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from "@/assets/images/logo.jpeg"
import styled from "styled-components"

const pages = ['검색', "등록한 레포지토리", "issues"];

export default function Navigation() {

     const handleOpenNavMenu = (page: string) => {
          console.log(page);
     };



     return (
          <AppBar position="static">
               <Container maxWidth="xl">
                    <Toolbar disableGutters>
                         <StyledLogoWrapper />
                         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                              {pages.map((page) => (
                                   <Button
                                        key={page}
                                        onClick={() => handleOpenNavMenu(page)}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                   >
                                        {page}
                                   </Button>
                              ))}
                         </Box>
                    </Toolbar>
               </Container>
          </AppBar >
     );
}

const StyledLogoWrapper = styled.div`
     width: 50px;
     height: 50px;
     display: inline-block;
     background: url(${Logo}) center no-repeat;
     background-size: contain;
`