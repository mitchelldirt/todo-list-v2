import { useState } from 'react'
// import { getResponse, postResponse } from './services/testAPI'
import { TaskList } from './main/task/taskList'
import { Project } from './main/task/project'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import LoginButton from './Auth/login'
import LogoutButton from './Auth/logout'
import Profile from './Auth/profile'

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <div className="App">
        <Project
          projectName={'Project'}
          projectId={2}>
        </Project>
      </div>
    </QueryClientProvider>
  )
}

export default App
