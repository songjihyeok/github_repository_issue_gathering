import React from 'react'
import Card from "../Card"
import { itemInCludeLikedInterface } from '@/pages/Home/type'


export default function List({ searchResultList, setSearchResultList }: {
     searchResultList: itemInCludeLikedInterface[],
     setSearchResultList: React.Dispatch<React.SetStateAction<itemInCludeLikedInterface[]>>
}) {
     const localLikedIdList = localStorage.getItem("likedList") ?? JSON.stringify({ data: [] })
     const likedIdList = JSON.parse(localLikedIdList).data ?? []
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
          setSearchResultList(likeHandledResultList)
          setLocalStorage(element.id)
     }

     const setLocalStorage = (id: number) => {
          const localLikedIdList = localStorage.getItem("likedList") ?? JSON.stringify({ data: [] })
          const gotLikedIdList = JSON.parse(localLikedIdList)?.data ?? []
          if (gotLikedIdList.includes(id)) {
               const removedLikedList = JSON.stringify(
                    {
                         data: gotLikedIdList
                              .filter((element: number) => element !== id)
                    })
               return localStorage.setItem("likedList", removedLikedList)
          } else {
               const updatedLikedList = JSON.stringify(
                    {
                         data: [...gotLikedIdList, id]
                    })
               return localStorage.setItem("likedList", updatedLikedList)
          }
     }


     return (
          <>
               {likedCheckedSearchResultList.map((element: itemInCludeLikedInterface, index: number) => {
                    return <Card key={index}
                         item={element}
                         likeHandler={likeHandler}
                    />
               })}
          </>
     )
}

