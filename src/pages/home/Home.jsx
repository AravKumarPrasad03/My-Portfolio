import React from 'react'
import Profile from "../../assets/Home.png"
import {Link} from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import "./home.css"

export const Home = () => {
  return (
    <section className='home section grid'>
      <img src= {Profile} alt ='' className='home__img' />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I,m Arav Kumar Prasad.</span> Consultant  
          </h1>

          <p className="home__description">I work as a Consultant at PwC, supporting clients in designing, implementing, and strengthening management systems to achieve ISO certification and compliance.</p>

          <Link to='/about' className='button'>
            More About Me {' '}
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home;
