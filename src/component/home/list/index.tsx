import React, { useState } from 'react'
import Card from "../../common/Card"
import { itemInCludeLikedInterface } from '@/types/common'


export default function List({ searchResultList, setSearchResultList }: {
     searchResultList: itemInCludeLikedInterface[],
     setSearchResultList: React.Dispatch<React.SetStateAction<itemInCludeLikedInterface[]>>
}) {
     const [error, setError] = useState<{
          status: boolean;
          elementId: number;
     }>({
          status: false,
          elementId: 0
     });
     const localLikedIdList = localStorage.getItem("likedIdList") ?? JSON.stringify({ data: [] })
     const likedIdList = JSON.parse(localLikedIdList).data
          .map((element: itemInCludeLikedInterface) => element.id) ?? []

     const likedCheckedSearchResultList = searchResultList.map((element) => {
          if (likedIdList.includes(element.id)) {
               return {
                    ...element,
                    liked: true
               }
          }
          return element
     })

     const likeHandler = (element: itemInCludeLikedInterface) => {

          if (likedIdList.length >= 4 && !element.liked) {
               setError({
                    status: true,
                    elementId: element.id
               })
               return
          }

          const likeHandledResultList = searchResultList.map((item) => {
               if (item.id === element.id) {
                    return {
                         ...item,
                         liked: !element.liked
                    }
               } else {
                    return item
               }
          })
          setError({
               status: false,
               elementId: 0
          })
          setSearchResultList(likeHandledResultList)
          setLocalStorage(element)
     }

     const setLocalStorage = (item: itemInCludeLikedInterface) => {
          const localLikedList = localStorage.getItem("likedIdList") ?? JSON.stringify({ data: [] })
          const likedList = JSON.parse(localLikedList)?.data
          const isIncluded = likedList.find((element: itemInCludeLikedInterface) => element.id === item.id)
          if (isIncluded) {
               const removedLikedList = JSON.stringify(
                    {
                         data: likedList
                              .filter((element: itemInCludeLikedInterface) => element.id !== item.id)
                    })
               return localStorage.setItem("likedIdList", removedLikedList)
          } else {
               const modifiedItem = {
                    ...item,
                    liked: true
               }
               const updatedLikedList = JSON.stringify(
                    {
                         data: [...likedList, modifiedItem]
                    })
               return localStorage.setItem("likedIdList", updatedLikedList)
          }
     }


     return (
          <>
               {likedCheckedSearchResultList.map((element: itemInCludeLikedInterface, index: number) => {
                    return <Card key={index}
                         item={element}
                         likeHandler={likeHandler}
                         error={error}
                    />
               })}
          </>
     )
}

