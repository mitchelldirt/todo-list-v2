export const postResponse = await fetch('http://localhost:3000/project', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({
        projectName: 'Programming'
    })
});

export const getResponse = await fetch('http://localhost:3000/project?projectName=Programming', {
    headers: {
        'accept': 'text/plain'
    }
})