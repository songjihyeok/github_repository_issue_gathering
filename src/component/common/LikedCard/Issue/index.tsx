import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Octokit } from "octokit"
import { issueDataInterface, issueWithRepositoryName } from "@/component/common/LikedCard/Issue/type"
import Pagination from '@mui/material/Pagination';
import IssueCard from "@/component/common/IssueCard"
import CircularProgress from '@mui/material/CircularProgress';
import CommonModal from "@/component/common/Modal"
import Alert from '@mui/material/Alert';

const octokit = new Octokit({
     auth: process.env.GITHUB_PRIVATE_KEY
})

enum statusEnum {
     open = "open",
     closed = "closed",
     all = "all"
}


export default function Issue({ full_name, opened }: { full_name: string, opened: boolean }) {
     const [issuesList, setIssuesList] = useState<issueWithRepositoryName[]>([])
     const [loading, setLoading] = useState<boolean>(true)
     const [openModal, setOpenModal] = useState<boolean>(false)
     const [status, setStatus] = useState<statusEnum>(statusEnum.all)
     const [totalCounts, setTotalCounts] = useState(0)
     const [page, setPage] = useState(1)
     const pageNumbers = Math.floor(totalCounts / 10) + 1


     const handleChange = (page: number) => {
          if (page > 100) {
               setOpenModal(true)
               return
          }
          setPage(page)
          setOpenModal(false)
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
               const repositoryNameAddedGotData: issueWithRepositoryName[] = gotItems.map((element: issueDataInterface) => {
                    return {
                         ...element,
                         repository_name: full_name
                    }
               })
               setLoading(false)
               setIssuesList(repositoryNameAddedGotData)
               setTotalCounts(gotTotalCounts)
          }
          if (opened) {
               getIssues()
          }
     }, [opened, full_name, status, page])


     if (loading) {
          return <ProgressWrapper>
               <CircularProgress size={"50px"} />
          </ProgressWrapper>
     }



     return (
          <>
               {opened ?
                    <>
                         {issuesList.map((element, index) => {
                              return <IssueCard key={index} item={element} />
                         })}
                         {issuesList.length > 0 ?
                              < PaginationWrapper >
                                   <Pagination count={pageNumbers} page={page} onChange={(_, page: number) => handleChange(page)} />
                              </PaginationWrapper>
                              : null}
                         {openModal ? <Alert severity="error">깃헙 정책 상 1000개 이후엔 검색이 되지 않습니다. </Alert> : null}
                    </> : null
               }
          </>
     );
}

const ProgressWrapper = styled.div`
     width: 100%;
     height: 800px;
     justify-content:center;
     align-items:center;
     display:flex;
`

const PaginationWrapper = styled.div`
     width: 100%;
     height: 100px;
     display: flex;
     align-items: center;
     justify-content: center;

`

