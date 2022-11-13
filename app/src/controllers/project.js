export const postProject = (req, res) => {
  if (!req.body.projectName) {
    res.status(400)
      .json({ Error: 'Missing project name!' });
    res.end();
  }
  res.status(200)
    .json({ message: { response: `Project '${req.body.projectName}' has been created` } });
};

export const getProject = (req, res) => {
  res.status(200)
    .send(`Sending ${req.query.projectName}!`);
};
