import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/app/layout/MainLayout'

import HomePage from '@/pages/home/HomePage'
import ResumePage from '@/pages/resume/ResumePage'
import ProjectsPage from '@/pages/projects/ProjectsPage'
import BlogListPage from '@/pages/blog/BlogListPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/resume', element: <ResumePage /> },
      { path: '/blog', element: <BlogListPage /> },
    ],
  },
])