import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ContentsWrapper from "@/layout/ContentsWrapper"
import { Octokit } from "octokit"
import IssueCard from "@/component/common/IssueCard"
import { itemInCludeLikedInterface } from '@/pages/Home/type'
import { issueDataInterface } from "@/pages/Issue/type"

const octokit = new Octokit({
     auth: process.env.GITHUB_PRIVATE_KEY
})


export default function Issue() {
     const [issuesList, setIssuesLIst] = useState<issueDataInterface[]>([])
     const localLikedIdList = localStorage.getItem("likedIdList") ?? JSON.stringify({ data: [] })
     const likedList = JSON.parse(localLikedIdList).data

     useEffect(() => {
          const getIssues = async () => {
               const gotResult = await Promise.all(likedList.map(async (element: itemInCludeLikedInterface) => {
                    const result = await octokit.request(`GET /repos/${element.full_name}/issues`, {
                         state: "open"
                    })
                    return [...result.data]
               }, []))
               const sortedResult = gotResult.reduce((accumulator, currentValue) => {
                    return [...accumulator, ...currentValue]
               }, []).sort((x: issueDataInterface, y: issueDataInterface) => x.id > y.id ? 1 : -1)
               setIssuesLIst(sortedResult)
          }
          getIssues()
     }, [])

     return (
          <ContentsWrapper>
               {issuesList.map((element: issueDataInterface) => {
                    return <IssueCard key={element.id} item={element}></IssueCard>
               })}
          </ContentsWrapper>
     );
}

