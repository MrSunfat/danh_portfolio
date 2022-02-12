import React from 'react'
import SkillProject from './SkillProject'
import hcImg from '../../images/hc_img.png';
import { BsFileEarmarkCodeFill, BsFillFileEarmarkRichtextFill } from "react-icons/bs";

function ProjectItem({ img, name, urlCode, urlIF, skills }) {
  return (
    <li className='projects__main__item shadowB'>
        <div className="item__img">
            <img src={hcImg} alt={name} />
        </div>
        <div className="item__name">
            {name}
        </div>
        <ul className="item__skills">
            {skills.map((skill, index) => <SkillProject key={index}>{skill}</SkillProject>)}
        </ul>
        <ul className="item__links">
            <li className='item__link'>
                <a href={urlCode} className='item__link__sc'>
                    <BsFileEarmarkCodeFill className='item__link__sc__icon' />
                    Soure Code
                </a>
            </li>
            <li className='item__link'>
                <a href={urlIF} className='item__link__if'>
                    <BsFillFileEarmarkRichtextFill className='item__link__sc__icon' />
                    Xem sản phẩm
                </a>
            </li>
        </ul>
    </li>
  )
}

export default ProjectItem