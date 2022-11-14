export const getTask = (req, res) => {
  res.status(200)
    .send(`Sending task with ID: ${req.query.taskID}!`);
};

export const postTask = (req, res) => {
  res.status(200)
    .json({
      task: {
        id: '1234',
        title: 'Finish the todo list project',
        description: 'Complete the front end and the back end and have everything hosted',
        dueDate: '2022-10-07',
        priority: 4
      }
    });
};

export const deleteTask = (req, res) => {
  res.status(200).send('Task has been deleted');
};

export const patchTask = (req, res) => {
  res.status(200).json({
    task: {
      id: '111',
      title: 'Update the task',
      description: '',
      dueDate: '2022-10-07',
      priority: 3
    }
  });
};
