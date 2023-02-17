import React, { Component, Suspense, useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))

function App(): JSX.Element {
  // States
  const { client } = useSelector((state: any) => state.client)
  const { jwt } = useSelector((state: any) => state.jwt)

  function clientInitialized(): boolean {
    return client !== '' && jwt !== ''
  }

  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="*" element={clientInitialized() ? <DefaultLayout /> : <Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
