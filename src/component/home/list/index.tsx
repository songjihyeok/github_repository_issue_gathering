import React from 'react'
import Card from "../../common/Card"
import { itemInCludeLikedInterface } from '@/pages/Home/type'


export default function List({ searchResultList, setSearchResultList }: {
     searchResultList: itemInCludeLikedInterface[],
     setSearchResultList: React.Dispatch<React.SetStateAction<itemInCludeLikedInterface[]>>
}) {
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
                    id: item?.id,
                    description: item?.description,
                    issues_url: item?.issues_url,
                    full_name: item?.full_name,
                    forks_count: item?.forks_count,
                    created_at: item?.created_at,
                    html_url: item?.html_url,
                    liked: true
               }
               const likedCheckedItem = { ...modifiedItem, liked: true }
               const updatedLikedList = JSON.stringify(
                    {
                         data: [...likedList, likedCheckedItem]
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
                    />
               })}
          </>
     )
}

