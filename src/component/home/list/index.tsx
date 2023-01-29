import React, { useEffect } from 'react'
import styled from 'styled-components'
import Card from "../Card"
import { itemInCludeLikedInterface } from '@/pages/Home/type'


export default function List({ searchResultList, setSearchResultList }: {
     searchResultList: itemInCludeLikedInterface[],
     setSearchResultList: React.Dispatch<React.SetStateAction<itemInCludeLikedInterface[]>>
}) {

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
     }







     return (
          <>
               {searchResultList.map((element: itemInCludeLikedInterface, index: number) => {
                    return <Card key={index}
                         item={element}
                         likeHandler={likeHandler}
                    />
               })}
          </>
     )
}

