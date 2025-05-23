import React from 'react'
import { StrictMode } from 'react'
import { Editor } from './pages/Editor'
import { createRoot } from 'react-dom/client'
// import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Editor />
  </StrictMode>,
)
