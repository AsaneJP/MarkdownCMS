import { VFC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Layout } from './components/templates/Layout'

const App: VFC = () => (
  <RecoilRoot>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </RecoilRoot>
)

export default App
