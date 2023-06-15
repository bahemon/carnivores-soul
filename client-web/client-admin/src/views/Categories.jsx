import CategoriesTable from "../components/CategoriesTable"
import { useNavigate } from "react-router-dom"

export default function Categories() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center p-3">
        <div className="w-10/12 flex justify-between items-center">
          <p className="text-xl font-bold">Category List</p>
          <label onClick={() => {
            navigate('/categoryForm', {
              state: {
                category: '',
                action: 'add'
              }
            })
          }} className="p-3 text-sm rounded-lg bg-gray-800 text-white cursor-pointer">Add New
            Category</label>
        </div>
      </div>
      <CategoriesTable />
    </div>
  )
}