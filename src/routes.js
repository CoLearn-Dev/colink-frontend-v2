import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Settings = React.lazy(() => import('./views/dashboard/Settings'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/storage', name: 'Storage', element: Dashboard },
  { path: '/settings', name: 'Settings', element: Settings },
]

export default routes
