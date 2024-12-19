import React from 'react'
import Card from '../sharedComponent/Card'

const Home = (props) => {
const shop = ", happy shopping."
  return (
    <div>
       {props.user}!

      <Card userincard = {props.user} shop = {shop}/>
    </div>
  )
}

export default Home
