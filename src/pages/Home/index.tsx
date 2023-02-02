import { useState, useCallback } from "react"
import List from "@/component/home/List"
import ContentsWrapper from "@/layout/ContentsWrapper"
import SearchPart from "@/component/home/SearchPart"
import { Octokit } from "octokit"
import { itemInterface, resultInterface, itemInCludeLikedInterface } from '@/types/common'

const octokit = new Octokit({
     auth: process.env.GITHUB_PRIVATE_KEY
})

export default function Home() {
     const [searchResultList, setSearchResultList] = useState<itemInCludeLikedInterface[]>([])
     const [searchingText, setSearchingText] = useState("")

     const getRepoList = useCallback(async () => {
          const result: resultInterface = await octokit.request(`GET /search/repositories?q=${searchingText}`, {})
          if (result.status === 200) {
               const gotResult = result?.data?.items ?? []
               const inCludedLikedPropertyList = gotResult.map((element: itemInterface) => {
                    return {
                         ...element,
                         liked: false
                    }
               })
               return inCludedLikedPropertyList
          }
          return []
     }
          , [searchingText])

     const onSearch = useCallback(async () => {
          const result = await getRepoList()
          setSearchResultList(result)
     }, [getRepoList, setSearchResultList])


     return (
          <ContentsWrapper>
               <SearchPart setSearchingText={setSearchingText} onSearch={onSearch} />
               <List searchResultList={searchResultList} setSearchResultList={setSearchResultList} />
          </ContentsWrapper>
     );
}





