import React from 'react';
import './task.css'

export const Task = ({ title, description, dueDate, priority }) => {
  return (
    <>
      <div className='task__container'>
        {/*
        Very clean code - trust me
        <i class="fa fa-check-circle" aria-hidden="true"></i>    
        */}
        <i className='fa fa-circle-o' aria-hidden="true"></i>
        <div className='task__content'>
          <h2 className='task__title'>{title}</h2>
          <p className='task__dueDate'>{dueDate}</p>
        </div>
      </div>
    </>
  )
}
