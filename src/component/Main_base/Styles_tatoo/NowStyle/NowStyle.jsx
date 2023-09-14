import React, { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ids from './NowStyleContainer'

const NowStyle = (props) => {
  console.log(props.card)
// let id_card = useParams()
// props.ids(id_card.id)
//useEffect(()=> ids(id_card), [])


  return (
    <div><img src={props.card[0].img} alt="" /></div>
  )
}

export default NowStyle