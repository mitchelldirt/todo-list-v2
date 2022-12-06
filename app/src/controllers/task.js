export const postTask = (req, res) => {
  res.status(200).send(`Sending task with ID: ${req.query.taskID}!`);
};

export const getTask = (req, res) => {
  res.status(200).json({
    tasks: [
      {
        taskID: 1,
        title: 'Work on your ToDo List Project',
        description: 'Make some mock data to work with for the front end',
        dueDate: '2022-12-13 19:00:00',
        priority: 3,
        userID: '124awfh3435u465ijerfh',
        projectID: 1
      },
      {
        taskID: 2,
        title: 'Learn TypeScript',
        description: 'Learn how to use typescript with JSX (aka TSX)',
        dueDate: '2022-12-13 14:00:00',
        priority: 3,
        userID: '124awfh3435u465ijerfh',
        projectID: 1
      },
      {
        taskID: 3,
        title: 'Finish your Shopify store',
        description: 'Will provide value to the company',
        dueDate: '2022-02-11 19:00:00',
        priority: 4,
        userID: '124awfh3435u465ijerfh',
        projectID: 2
      },
      {
        taskID: 4,
        title: 'Create awesome automation in Jira',
        description: 'Create an automation to rule all automation',
        dueDate: '2022-12-22 19:00:00',
        priority: 2,
        userID: '124awfh3435u465ijerfh',
        projectID: 2
      },
      {
        taskID: 5,
        title: 'Send the green V4',
        description: 'Send the green V4 by being more confident in your footing',
        dueDate: '2022-12-15 19:00:00',
        priority: 1,
        userID: '124awfh3435u465ijerfh',
        projectID: 3
      },
      {
        taskID: 6,
        title: 'Send your first V5',
        description: 'Keep working on V4 climbs until you feel pretty good about them, then it\'s V5 time!',
        dueDate: '2022-01-13 19:00:00',
        priority: 5,
        userID: '124awfh3435u465ijerfh',
        projectID: 3
      }
    ]
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
      priority: 3,
    },
  });
};
