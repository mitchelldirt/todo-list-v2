import React from 'react';
import './task.css'

export const Task = ({title, description, dueDate, priority}) => {
  return (
    <>
      <p className='task__title'>{title}</p>
      <p>{description}</p>
      <p>{dueDate}</p>
      <p>{priority}</p>
    </>
  )
}
