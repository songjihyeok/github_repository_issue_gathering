import React, { useState } from 'react'
import styled from 'styled-components'
import Card from "@/component/common/Card"
import { itemInCludeLikedInterface } from '@/pages/Home/type';

export default function LikedList() {
     const localLikedList = localStorage.getItem("likedIdList") ?? JSON.stringify({ data: [] })
     const gotLikedList = JSON.parse(localLikedList).data ?? []
     const [likedList, setLikedList] = useState<itemInCludeLikedInterface[]>(gotLikedList)

     const likeHandler = (element: itemInCludeLikedInterface) => {
          console.log("element", element)
     }




     return (
          <>
               {likedList.map((element: itemInCludeLikedInterface) => {
                    return <Card key={element.id} item={element} likeHandler={likeHandler}></Card>
               })}
          </>
     );
}

