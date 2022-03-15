import { memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Article } from '../components/pages/Article'
import { Home } from '../components/pages/Home'
import { Layout } from '../components/templates/Layout'

export const Router = memo(() => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path="/article"
      element={
        <Layout>
          <Article />
        </Layout>
      }
    />
  </Routes>
))
