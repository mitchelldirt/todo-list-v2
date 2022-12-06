import { useState } from 'react'
// import { getResponse, postResponse } from './services/testAPI'
import reactLogo from './assets/react.svg'
import './App.css'
import { TaskList } from './components/main/task/taskList'
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
        <TaskList

        />
      </div>
    </QueryClientProvider>
  )
}

export default App
