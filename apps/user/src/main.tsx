import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { App } from './pages/App'

const router = createBrowserRouter([{ path: '/', element: <App /> }])

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
