import { createBrowserRouter } from 'react-router-dom'
import { ServicesList } from '../components/ServicesList/ServicesList'
import { ServiceView } from '../components/ServiceView/ServiceView'
import { Root } from '../components/Root/Root'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <ServicesList />
      },
      {
        path: ':id/details',
        element: <ServiceView />
      }
    ]
  }
])