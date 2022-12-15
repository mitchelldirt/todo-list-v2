import React from 'react';
import { TaskList } from './taskList';

export function Project({ projectName, projectId }) {



  return (
    <>
      <h1>{projectName}</h1>
      <TaskList projectID={1} />
    </>
  );
}