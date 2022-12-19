import React from 'react';
import { Task } from './task';
import { useQuery } from '@tanstack/react-query'
import styles from '../../../styles/taskList.module.css'

const fetchTodoList = async() => {
  const data = await fetch('/api/mockData', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
      }
});

return data.json();
}

export const TaskList = ({projectID}) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodoList,
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    data.tasks.filter(task => task.projectID === projectID).map(task => <Task
    key={task.taskID}
    title={task.title}
    description={task.description}
    dueDate={task.dueDate}
    priority={task.priority}
  />)
  )
}