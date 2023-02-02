import styled from 'styled-components'
import ErrorIcon from '@mui/icons-material/ErrorOutline';

export default function Nopage() {
     return (
          <FullPageCenter>
               <div>
                    <CenterWrapper>
                         <ErrorIcon fontSize="large"></ErrorIcon>
                    </CenterWrapper>
                    <CenterWrapper>
                         <h2>없는 페이지입니다</h2>
                    </CenterWrapper>
               </div>
          </FullPageCenter >
     );
}

const CenterWrapper = styled.div`
     width: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
`

const FullPageCenter = styled.div`
     width: 100%;
     height: calc(100vh - 68.5px);
     display: flex;
     justify-content: center;
     align-items: center;
`
