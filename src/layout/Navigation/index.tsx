import { useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from "@/assets/images/logo.jpeg"
import styled from "styled-components"
import { pages } from "./values"
import { pageListType } from './types';
import { useNavigate, Outlet } from "react-router-dom";

export default function Navigation() {
     const navigate = useNavigate()

     const handleOpenNavMenu = useCallback((page: string) => {
          navigate(`/${page}`)
     }, [navigate])

     return (
          <>
               <AppBar position="static">
                    <Container maxWidth="xl">
                         <Toolbar disableGutters>
                              <StyledLogoWrapper />
                              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                   {pages.map((page: pageListType) => {
                                        return <Button
                                             key={page.key}
                                             onClick={() => handleOpenNavMenu(page.key)}
                                             sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                             {page.label}
                                        </Button>
                                   })
                                   }
                              </Box>
                         </Toolbar>
                    </Container>
               </AppBar >
               <Outlet />
          </>
     );
}





const StyledLogoWrapper = styled.div`
     width: 50px;
     height: 50px;
     display: inline-block;
     background: url(${Logo}) center no-repeat;
     background-size: contain;
`