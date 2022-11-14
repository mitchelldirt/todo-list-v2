export const postResponse = await fetch('http://localhost:3000/task', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'text/plain'
      }
});

export const getResponse = await fetch('http://localhost:3000/project?projectName=Programming', {
    headers: {
        'accept': 'text/plain'
    }
})