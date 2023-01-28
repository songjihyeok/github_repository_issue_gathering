import React from 'react'
import styled from 'styled-components'

export default function ContentsWrapper({ children }: { children: React.ReactNode }) {
     return (
          <StyledContentsWrapper>
               {children}
          </StyledContentsWrapper>
     );
}

const StyledContentsWrapper = styled.div`
     max-width: 900px;
     margin: 0 auto;
`


