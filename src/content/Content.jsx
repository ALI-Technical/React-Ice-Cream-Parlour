import React from 'react'
import '../content/content.css'
import iceCream1 from '../Images/Ice cream 1.jpg'
import Card from './Card'
import Card2 from './Card-2'

const Content = () => {
  return (
    <section className='contentBox'>
      <div className="imgBox">
          <img src={iceCream1} alt="" />
      </div>
      <div className="cardBox">
          <Card />
          <Card2 />
      </div>
    </section>
  )
}

export default Content
