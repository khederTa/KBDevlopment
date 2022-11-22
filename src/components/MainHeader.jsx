import React from 'react'
import { SiKnowledgebase } from 'react-icons/si'
import { Link } from 'react-router-dom'
import Image from '../images/main__header3.png'
const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#4BetterWorld</h4>
          <h1>{/*Join The Legends Of The Fitness World*/}Knowledge Based Development</h1>
          <p>
            {/* Lorem ipsum dolor sit amet, consector adipisicing elit. Aliquam excepturi similique eius optio. Dolorum, quaerat. */}
            Drawing on these proposals and advancements, KBD can be defined as: the collective identification and enhancement of the value set whose dynamic balance furthers the viability and transcendence of a given community.

            <div className="from">From: Carrillo, F. J. (2014). What 'knowledge-based' stands for? A position paper. International Journal of Knowledge-Based Development, 5(4), 402-421.</div>
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle">
            <div className="main__header-image">
              <img src={Image} alt="Main Header Image" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
