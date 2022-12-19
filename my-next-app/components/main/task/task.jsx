import React from 'react';
import styles from'../../../styles/task.module.css'

export const Task = ({ title, description, dueDate, priority }) => {
  return (
    <>
      <div className={styles.task__container}>
        {/*
        Very clean code - trust me
        <i class="fa fa-check-circle" aria-hidden="true"></i>    
        */}
        <i className='fa fa-circle-o' aria-hidden="true"></i>
        <div className={styles.task__content}>
          <h2 className={styles.task__title}>{title}</h2>
          <p className={styles.task__dueDate}>{dueDate}</p>
        </div>
      </div>
    </>
  )
}
