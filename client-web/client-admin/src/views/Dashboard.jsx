import ProductsTable from "../components/ProductsTable"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center p-3">
        <div className="w-10/12 flex justify-between items-center">
          <p className="text-xl font-bold">Product List</p>

          <label onClick={() => {
            navigate('/productForm', {
              state: {
                product: {
                  name: '',
                  description: '',
                  price: '',
                  categoryId: '',
                  mainImg: '',
                  Images: [
                    {
                      imgUrl: ''
                    }
                  ]
                },
                action: 'add'
              }
            })
          }} className="p-3 text-sm rounded-lg bg-gray-800 text-white cursor-pointer">Add New
            Product</label>

        </div>
      </div>
      <ProductsTable />
    </div >

  )
}