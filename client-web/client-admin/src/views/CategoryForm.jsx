import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { addCategory, editCategory } from "../store/actions/actionCreator"
import Swal from "sweetalert2"

export default function AddCategory() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  console.log(location, "><<<<<<<<<<<")

  const [form, setForm] = useState({
    name: location.state.category
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let res

      if (location.state.action === 'add') {
        res = await dispatch(addCategory(form))
      } else if (location.state.action === 'edit') {
        res = await dispatch(editCategory({
          name: form.name,
          id: location.state.id
        }))
      }

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: res.message,
        showConfirmButton: false,
        timer: 1500
      })

      setForm({
        name: ''
      })

      await navigate('/categories')
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err
      })
    }
  }


  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-96 p-10">
        <p className="font-bold text-2xl text-start">Add New Category</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-7">
          <div className="flex flex-col">
            <label className="label">
              <span className="label-text">Category name</span>
            </label>
            <input value={form.name} onChange={handleChange} name="name" type="text" className="input input-bordered w-full" />
          </div>
          <div className="flex gap-5">
            <label onClick={() => {
              navigate('/categories')
            }} htmlFor="new-category-modal" className="p-2 text-sm rounded-lg bg-white border-2 text-black cursor-pointer">Cancel</label>
            <button className="p-2 text-sm rounded-lg bg-blue-700 text-white">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}