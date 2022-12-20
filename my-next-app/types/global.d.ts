export { };

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  type Task = {
    title: string;
    description?: string;
    dueDate?: string;
    priority?: number;
    projectID?: number;
    userID?: string;
    taskID?: string;
  }

  type Project = {
    name: string;
    id: number;
  };

  type User = {
    name: string;
  }
}
