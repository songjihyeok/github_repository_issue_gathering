import React, { useEffect, useState, useReducer } from 'react'
import styled from 'styled-components'
import ContentsWrapper from "@/layout/ContentsWrapper"
import { Octokit } from "octokit"
import IssueCard from "@/component/common/IssueCard"
import { itemInCludeLikedInterface } from '@/pages/Home/type'
import { issueDataInterface } from "@/component/Issue/type"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const octokit = new Octokit({
     auth: process.env.GITHUB_PRIVATE_KEY
})

enum statusEnum {
     open = "open",
     closed = "closed",
     all = "all"
}


export default function Issue({ full_name, opened }: { full_name: string, opened: boolean }) {
     const [issuesList, setIssuesList] = useState<issueDataInterface[]>([])
     const [status, setStatus] = useState<statusEnum>(statusEnum.all)
     const [totalCounts, setTotalCounts] = useState(0)
     const [page, setPage] = useState(1)
     const pageNumbers = Math.floor(totalCounts / 10) + 1


     const handleChange = (page: number) => {
          if (page > 100) {
               return
          }
          setPage(page)
     }


     useEffect(() => {
          const getIssues = async () => {
               const queryString = `repo:${full_name}`
               const result = await octokit.request(`GET /search/issues`, {
                    q: queryString,
                    page: page,
                    per_page: 10
               })
               const gotItems = result?.data?.items ?? []
               const gotTotalCounts = result?.data?.total_count ?? 0
               const repositoryNameAddedGotData = gotItems.map((element: issueDataInterface) => {
                    return {
                         ...element,
                         repository_name: full_name
                    }
               })
               setIssuesList(repositoryNameAddedGotData)
               setTotalCounts(gotTotalCounts)
          }
          getIssues()
     }, [opened, full_name, status, page])

     return (
          <>
               {opened ?
                    <>
                         {issuesList.map((element: issueDataInterface) => {
                              return <IssueCard key={element.id} item={element} ></IssueCard>
                         })}
                         {issuesList.length > 0 ?
                              < PaginationWrapper >
                                   <Pagination count={pageNumbers} page={page} onChange={(_, page: number) => handleChange(page)} />
                              </PaginationWrapper>
                              : null}
                    </> : null
               }
          </>
     );
}

const PaginationWrapper = styled.div`
     width: 100%;
     height: 100px;
     display: flex;
     align-items: center;
     justify-content: center;

`

