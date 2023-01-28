import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { Row, Col } from "antd"
import Grid from '@mui/material/Unstable_Grid2';

export default function SearchPart() {

     const gitOptions = [{ title: "title" }]


     const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          console.log("e", e.target.value)

     }

     return (
          <SearchWrapper>
               <Grid container spacing={2}>
                    <Grid xs={9}>
                         <Autocomplete
                              freeSolo
                              id="free-solo-2-demo"
                              disableClearable
                              options={gitOptions.map((option) => option.title)}
                              renderInput={(params) => (
                                   <TextField
                                        {...params}
                                        onChange={(e) => onChangeText(e)}
                                        label="깃 레포지토리 검색"
                                        InputProps={{
                                             ...params.InputProps,
                                             type: 'search',
                                        }}
                                   />
                              )}
                         />
                    </Grid>
                    <Grid xs={2}>
                         <SearchButton variant="contained" >검색</SearchButton>
                    </Grid>
               </Grid>
          </SearchWrapper>
     );
}

const SearchButton = styled(Button)`
     width: 100%;
     height: 100%;
     &&{
          font-size: 25px;
     }
`


const SearchWrapper = styled.div`
     margin: 50px auto;
     max-width: 600px;
`