import styled from 'styled-components'
import { useEffect, useState } from "react"
import List from "@/component/home/List"
import ContentsWrapper from "@/layout/ContentsWrapper"
import SearchPart from "@/component/home/SearchPart"
import { Octokit } from "octokit"
import { itemInterface, resultInterface, itemInCludeLikedInterface } from '@/pages/Home/type'

const octokit = new Octokit({
     auth: process.env.GITHUB_PRIVATE_KEY
})



export default function Home() {
     const [query, setQuery] = useState<string>("hello");
     const [searchResultList, setSearchResultLIst] = useState<itemInCludeLikedInterface[]>([])

     useEffect(() => {
          const getCardList = async () => {
               const result: resultInterface = await octokit.request(`GET /search/repositories?q=${query}`, {})
               if (result.status === 200) {
                    const gotResult = result?.data?.items ?? []
                    const inCludedLikedPropertyList = gotResult.map((element: itemInterface) => {
                         return {
                              ...element,
                              liked: false
                         }
                    })
                    setSearchResultLIst(inCludedLikedPropertyList);
               }
          }
          getCardList()
     }, [])

     return (
          <ContentsWrapper>
               <SearchPart setQuery={setQuery} />
               <List searchResultList={searchResultList} setSearchResultList={setSearchResultLIst} />
          </ContentsWrapper>
     );
}





