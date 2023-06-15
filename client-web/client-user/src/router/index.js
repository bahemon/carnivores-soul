import {
  createBrowserRouter
} from "react-router-dom"
import Layout from "../components/Layout"
import LandingPage from "../views/LandingPage"
import ProductDetail from "../views/ProductDetail"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/:slug',
      element: <ProductDetail />
    }
    ]
  },
])

export default router