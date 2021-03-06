import { memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from '../components/pages/SignIn'
import { Layout } from '../components/templates/Layout'
import { PagesRoutes } from './PagesRoutes'

export const Router = memo(() => (
  <Routes>
    {PagesRoutes.map((route) => (
      <Route key={route.path} path={route.path} element={<Layout title={route.title}>{route.children}</Layout>} />
    ))}
    <Route path="/signin" element={<SignIn />} />
  </Routes>
))
