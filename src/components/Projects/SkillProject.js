import React from 'react'

function SkillProject({ children }) {
  return (
    <li className='item__skill'>{`#${children}`}</li>
  )
}

export default SkillProject