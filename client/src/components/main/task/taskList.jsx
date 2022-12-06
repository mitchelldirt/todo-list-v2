import React from 'react';
import { Task } from './task';


export const TaskList = ({ taskData }) => {
  return (taskData.map(task => <Task
    key={task.id}
    title={task.title}
    description={task.description}
    dueDate={task.dueDate}
    priority={task.priority}
  />)
  )
}