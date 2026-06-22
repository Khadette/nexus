import { RouterProvider } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { router } from './routes/Router'

export default function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}
