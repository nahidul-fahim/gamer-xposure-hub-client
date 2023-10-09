import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/router'
import AuthProvider from './Context/AuthProvider'
import ContentProvider from './WebsiteContent/ContentProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ContentProvider>
        <RouterProvider router={router} />
      </ContentProvider>
    </AuthProvider>
  </React.StrictMode>,
)