import styled from 'styled-components'
import { useEffect, useState } from "react"
import List from "@/component/home/list"
import ContentsWrapper from "@/layout/ContentsWrapper"
import SearchPart from "@/component/home/searchPart"
import { Octokit } from "octokit"

const octokit = new Octokit({
     auth: process.env.GITHUB_PRIVATE_KEY
})

export default function Home() {

     const [query, setQuery] = useState("");

     useEffect(() => {
          const getCardList = async () => {
               const result = await octokit.request(`GET /search/repositories?q=${query}`, {})
               console.log("result", result)
          }
          getCardList()
     }, [query])

     return (
          <ContentsWrapper>
               <SearchPart setQuery={setQuery} />
               <List />
          </ContentsWrapper>
     );
}





