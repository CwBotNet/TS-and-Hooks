import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MousePounter } from './pages/MousePounter.tsx'
import Debounce from './pages/Debounce.tsx'
import Todo from './pages/Todo.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mouse-pointer",
    element: <MousePounter />
  },
  {
    path: "/debounce",
    element: <Debounce />
  },
  {
    path: "/todo",
    element: <Todo />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
