import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from "axios"
import Card from "../card"
import { Octokit } from "octokit"

export default function List() {

     const octokit = new Octokit({
          auth: process.env.GITHUB_PRIVATE_KEY
     })


     useEffect(() => {
          const getCardList = async () => {
               const result = await octokit.request('GET /search/repositories?q=namelink-frontend', {})
               console.log("result", result)
          }
          getCardList()
     }, [])



     return (
          <div>
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>
               <Card></Card>
          </div>
     );
}

