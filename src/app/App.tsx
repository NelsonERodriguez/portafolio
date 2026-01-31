import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { LangProvider } from '@/shared/lang/langContext'

export default function App() {
  return (
    <LangProvider>
      <RouterProvider router={router} />
    </LangProvider>
  )
}