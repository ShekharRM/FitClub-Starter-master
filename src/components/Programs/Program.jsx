import React from 'react';
import {programsData} from '../../data/programsData.js';
import RightArrow from '../../assets/rightArrow.png';
import './Programs.css';
const Program = () => {
  return (
    <div className="programs" id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"><span>Join Now</span> <img src={RightArrow} alt="" /></div>
                </div>
            ))}
        </div>

    </div>
  );
}

export default Program