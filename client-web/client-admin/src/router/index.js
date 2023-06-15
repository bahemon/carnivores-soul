import { createBrowserRouter, redirect } from 'react-router-dom';
import Login from '../views/Login'
import Register from '../views/Register';
import Dashboard from '../views/Dashboard';
import Categories from '../views/Categories';
import Layout from '../components/Layout';
import NotFound from '../views/NotFound';
import CategoryForm from '../views/CategoryForm';
import ProductForm from '../views/ProductForm';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    loader: () => {
      if (!localStorage.access_token) {
        return redirect('/login')
      }
      return null
    },
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: '/categoryForm',
        element: <CategoryForm />
      },
      {
        path: '/productForm',
        element: <ProductForm />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect('/')
      }
      return null
    },
  }
]);

export default router