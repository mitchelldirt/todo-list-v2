import React from 'react';
import { Task } from './task';
import { useQuery } from '@tanstack/react-query'

const fetchTodoList = async() => {
  const data = await fetch('http://localhost:3000/task', {
    method: 'GET',
    headers: {
        'Content-Type': 'text/plain'
      }
});

return data.json();
}

export const TaskList = () => {
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

  return (data.tasks.map(task => <Task
    key={task.taskID}
    title={task.title}
    description={task.description}
    dueDate={task.dueDate}
    priority={task.priority}
  />)
  )
}