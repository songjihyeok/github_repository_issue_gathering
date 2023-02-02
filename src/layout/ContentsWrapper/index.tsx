import React from 'react'
import styled from 'styled-components'

export default function ContentsWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
     return (
          <StyledContentsWrapper className={className}>
               {children}
          </StyledContentsWrapper>
     );
}

const StyledContentsWrapper = styled.div`
     max-width: 900px;
     margin: 0 auto;
`


