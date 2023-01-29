import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

export default function SearchPart({ setQuery }: { setQuery: React.Dispatch<React.SetStateAction<string>> }) {
     const [gotSearchText, setGotSearchText] = useState<string>("")

     const onSearch = useCallback(() => {
          setQuery(gotSearchText)
     }, [])

     const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          setGotSearchText(e.target.value)
     }, [setGotSearchText])

     return (
          <SearchWrapper>
               <Grid container spacing={2}>
                    <Grid xs={9}>
                         <StyledTextField id="outlined-basic" label="레포지터리  검색" variant="outlined" onChange={onChange} />
                    </Grid>
                    <Grid xs={2}>
                         <SearchButton variant="contained" onClick={onSearch}>검색</SearchButton>
                    </Grid>
               </Grid>
          </SearchWrapper>
     );
}

const StyledTextField = styled(TextField)`
     width: 100%;
`

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