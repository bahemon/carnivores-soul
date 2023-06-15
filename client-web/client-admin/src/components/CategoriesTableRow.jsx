import { useDispatch } from "react-redux"
import { deleteCategory } from "../store/actions/actionCreator"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

export default function CategoriesTableRow({ category, index }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleDelete = async (id, event) => {
    event.preventDefault()
    try {
      const res = await dispatch(deleteCategory(id))

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: res.message,
        showConfirmButton: false,
        timer: 1500
      })
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message
      })
    }
  }

  const handleEdit = async (category, event) => {
    event.preventDefault()
    navigate('/categoryForm', {
      state: {
        id: category.id,
        category: category.name,
        action: 'edit'
      }
    })
  }

  return (
    <tr>
      <th className="text-center">{++index}</th>
      <td className="text-start">{category.name}</td>
      <td className="text-center">{new Date(category.createdAt).toLocaleString()}</td>
      <td className="text-center">{new Date(category.updatedAt).toLocaleString()}</td>
      <td className="text-center">
        <div className="flex gap-2 items-center justify-center">
          <button onClick={(event) => handleEdit(category, event)} className="p-2 text-sm rounded-lg w-16 transition ease-in-out delay-150 bg-white text-green-600 font-bold hover:scale-110 hover:bg-green-600 hover:text-white duration-300">Edit</button>
          <button onClick={(event) => handleDelete(category.id, event)} className="p-2 text-sm rounded-lg w-16 transition ease-in-out delay-150 bg-white text-red-600 font-bold hover:scale-110 hover:bg-red-600 hover:text-white duration-300">Delete</button>
        </div>
      </td>
    </tr >
  )
} 