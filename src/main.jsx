import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.scss"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./pages/layoutPage/Layout.jsx"
import Layout from './pages/layoutPage/Layout.jsx';
import HomePage from './pages/homePage/homePage.jsx';
import ListingPage from './pages/listingPage/ListingPage.jsx';
import SinglePage from './pages/singlePage/singlePage.jsx';

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<HomePage/>}/>
      <Route path='list' element={<ListingPage/>}/>
      <Route path= "/:id" element={<SinglePage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)