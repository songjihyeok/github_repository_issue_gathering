import ContentsWrapper from '@/layout/ContentsWrapper';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LikedList from '@/component/liked/List';
import { Octokit } from "octokit"
import { itemInCludeLikedInterface, itemInterface } from '@/types/common'

const octokit = new Octokit({
     auth: process.env.GITHUB_PRIVATE_KEY
})

export default function Liked() {

     const [likedList, setLikedList] = useState<itemInCludeLikedInterface[]>([])
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
               setLikedList(result)
          }
          getLikedListInfoFromGit()
     }, [])



     return (
          <ContentsWrapper>
               <LikedList searchResultList={checkLikedList} setSearchResultList={setLikedList} />
          </ContentsWrapper>
     );
}

