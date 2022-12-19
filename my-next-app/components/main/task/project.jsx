import React from 'react';
import { TaskList } from './taskList';
import styles from '../../../styles/taskList.module.css';

export function Project({ projectName, projectId }) {



  return (
    <>
      <h1>{projectName}</h1>
      <div className={styles.taskList__container}>
      <TaskList projectID={1} />
      </div>
    </>
  );
}