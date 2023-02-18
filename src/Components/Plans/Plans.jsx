import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import rightArrow from '../../assets/rightArrow.png'

const Plans = () => {
  return (
    <div className="plans-container" id='plans'>
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>
        <div className="programs-header" style={{gap: '2rem'}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'> NOW WITHUS</span>
        </div>

        {/* Plans card */}
        <div className="plans">
            {plansData.map((plan, index) =>(
                <div className='plan' key={index}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>{plan.price}$</span>
                    
                    <div className="features">
                        {plan.features.map((feature, i) => (
                            <div className='feature' key={i}>
                                <img src={whiteTick} alt="" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className='more-benefits'>
                        <span>See more benefits</span>
                        <img src={rightArrow} alt="" />
                    </div>
                    <button className='btn'>Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans
