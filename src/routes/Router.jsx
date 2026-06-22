import { createBrowserRouter, Navigate } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import DashboardPage from '../pages/DashboardPage'
import ImagesPage from '../pages/ImagesPage'
import VideosPage from '../pages/VideosPage'
import DocumentsPage from '../pages/DocumentsPage'
import AllFilesPage from '../pages/AllFilesPage'
import TrashPage from '../pages/TrashPage'

/**
 * Top-level route table. The root path renders the real Dashboard
 * (folders overview, storage, activity) — the file-type pages live
 * under their own paths.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'images', element: <ImagesPage /> },
      { path: 'videos', element: <VideosPage /> },
      { path: 'documents', element: <DocumentsPage /> },
      { path: 'all-files', element: <AllFilesPage /> },
      { path: 'trash', element: <TrashPage /> },
      { path: '*', element: <Navigate to="/" replace /> }
    ]
  }
])
