import ContentsWrapper from '@/layout/ContentsWrapper';
import React, { useState } from 'react'
import styled from 'styled-components'
import List from '@/component/home/List';
import { itemInCludeLikedInterface } from '@/pages/Home/type';

export default function Liked() {
     const localLikedList = localStorage.getItem("likedIdList") ?? JSON.stringify({ data: [] })
     const gotLikedList = JSON.parse(localLikedList).data ?? []
     const [likedList, setLikedList] = useState<itemInCludeLikedInterface[]>(gotLikedList)
     const checkLikedList = likedList.filter((element: itemInCludeLikedInterface) => element.liked === true)

     return (
          <ContentsWrapper>
               <List searchResultList={checkLikedList} setSearchResultList={setLikedList} />
          </ContentsWrapper>
     );
}

