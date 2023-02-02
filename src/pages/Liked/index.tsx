import ContentsWrapper from '@/layout/ContentsWrapper';
import { useState, useEffect } from 'react'
import LikedList from '@/component/liked/List';
import styled from "styled-components"
import CircularProgress from '@mui/material/CircularProgress';
import { Octokit } from "octokit"
import { itemInCludeLikedInterface } from '@/types/common'

const octokit = new Octokit({
     auth: process.env.GITHUB_PRIVATE_KEY
})

export default function Liked() {

     const [likedList, setLikedList] = useState<itemInCludeLikedInterface[]>([])
     const [loading, setLoading] = useState<boolean>(true)
     const checkLikedList = likedList.filter((element: itemInCludeLikedInterface) => element.liked === true)

     useEffect(() => {
          const getLikedListInfoFromGit = async () => {
               const localLikedList = localStorage.getItem("likedIdList") ?? JSON.stringify({ data: [] })
               const gotLikedList: itemInCludeLikedInterface[] = JSON.parse(localLikedList).data ?? []
               //@ts-ignore
               const result: itemInCludeLikedInterface[] = await gotLikedList.reduce(async (accumulator: itemInCludeLikedInterface[], current: itemInCludeLikedInterface) => {
                    const gotAccumulator = await accumulator
                    const repoName = current?.full_name ?? ""
                    const liked = current.liked ?? false
                    const result = await octokit.request(`GET /search/repositories`, {
                         q: `repo:${repoName}`
                    })
                    const item = result?.data?.items[0] ?? null
                    if (item) {
                         const likedAddedItem = { liked, ...item }

                         return [...gotAccumulator, likedAddedItem]
                    } else {
                         return gotAccumulator
                    }
               }, [])
               setLoading(false)
               setLikedList(result)
          }
          getLikedListInfoFromGit()
     }, [])

     if (loading) {
          return <ProgressWrapper>
               <CircularProgress size={"70px"} />
          </ProgressWrapper>
     }

     return (
          <LikedListWrapper as={ContentsWrapper} className="likedList">
               <LikedList searchResultList={checkLikedList} setSearchResultList={setLikedList} />
          </LikedListWrapper>
     );
}

const LikedListWrapper = styled.div`
     && {
          padding: 30px 0;
     }
`



const ProgressWrapper = styled.div`
     width: 100%;
     height: calc(100vh - 68.5px);
     justify-content:center;
     align-items:center;
     display:flex;
`