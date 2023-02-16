import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'

const Hero = () => {

  const transition = {type: 'spring', duration: 3}

  return (
    <div className="hero">

        <div className="blur hero-blur"></div>

        <div className="left-hero">

            <Header />
          {/* The best ad */}
            <div className="the-best-ad">
              <motion.div
                  initial={{left: '238px'}}
                  whileInView={{left: '8px'}}
                  transition={{...transition, type: 'tween'}}
              ></motion.div>
              <span>the best fitness club in the town</span>
            </div>

          {/* Hero heading */}
            <div className="hero-text">
                <div>
                  <span className='stroke-text'>Shape </span><span>Your</span>
                </div>
                <div>
                  <span>Ideal body</span>
                </div>
                <div>
                  <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

          {/* Figures */}
          <div className="figures">
              <div>
                <span>+140</span>
                <span>expert coachs</span>
              </div>
              <div>
                <span>+978</span>
                <span>members joined</span>
              </div>
              <div>
                <span>+50</span>
                <span>fitness programs</span>
              </div>
          </div>

          {/* Hero buttons */}
          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>

        <div className="right-hero">

            <button className='btn'>Join Now</button>

            <div className='heart-rate'>
              <img src={Heart} alt="" />
              <span>Heart Rate</span>
              <span>116 bpm</span>
            </div>

            {/* Hero images */}
            <img src={hero_image} alt="" className='hero-image' />
            <img src={hero_image_back} alt="" className='hero-image_back' />
            {/* Calories */}
            <div className="calories">
              <img src={Calories} alt="" />
              <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Hero
