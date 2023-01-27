import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PgHome } from './pages'

export default function getRoutes() {
  const routes = [
    {
        to: '/',
        element: <PgHome/>
    }
  ]
  return (
    <Router>
        <Routes>
            {
                routes.map((route, i) => {
                    return <Route key={i} path={route.to} element={route.element}/>
                })
            }
        </Routes>
    </Router>
  )
}
