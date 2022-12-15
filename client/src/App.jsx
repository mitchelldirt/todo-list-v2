import { useState } from 'react'
// import { getResponse, postResponse } from './services/testAPI'
import reactLogo from './assets/react.svg'
import './App.css'
import { TaskList } from './components/main/task/taskList'
import { Project } from './components/main/task/project'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
