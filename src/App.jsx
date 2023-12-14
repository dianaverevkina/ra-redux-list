import { RouterProvider } from 'react-router-dom'
import './App.scss'
import { Root } from './components/Root/Root'
import { router } from './router/router'

function App() {
  return (
    <>
    <RouterProvider router={router}>
      <Root/>
    </RouterProvider>
    </>
  )
}

export default App
