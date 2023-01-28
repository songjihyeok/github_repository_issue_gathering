import styled from 'styled-components'
import List from "@/component/home/list"
import ContentsWrapper from "@/layout/ContentsWrapper"
import SearchPart from "@/component/home/searchPart"

export default function home() {

     return (
          <ContentsWrapper>
               <SearchPart />
               <List />
          </ContentsWrapper>
     );
}





