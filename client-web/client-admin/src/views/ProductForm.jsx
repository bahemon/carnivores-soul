import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProducts, editProduct, fetchCategories } from "../store/actions/actionCreator"
import Swal from "sweetalert2"
import { useLocation, useNavigate } from "react-router-dom"

export default function ProductForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const [imageInput, setImageInput] = useState(location.state.product.Images)

  const handleAddImage = (event) => {
    event.preventDefault()

    let input = structuredClone(imageInput)
    input.push({ imgUrl: '' })
    setImageInput(input)
  }

  const handleImageState = (index, event) => {
    const clone = structuredClone(imageInput)
    clone[index].imgUrl = event.target.value
    setImageInput(clone)
  }

  const handleRemoveImage = (index) => {
    let input = structuredClone(imageInput)
    input.splice(index, 1)
    setImageInput(input)
  }

  const getCategoryData = async () => {
    try {
      await dispatch(fetchCategories())
    } catch (err) {
      console.log(err)
    }
  }

  const categories = useSelector(state => state.categoryReducer.categories)
  useEffect(() => {
    getCategoryData()
  }, [])


  const [addProductForm, setAddProductForm] = useState({
    name: location.state.product.name,
    description: location.state.product.description,
    price: location.state.product.price,
    mainImg: location.state.product.mainImg,
    categoryId: location.state.product.categoryId,
    images: location.state.product.Images
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setAddProductForm({
      ...addProductForm,
      [name]: value
    })
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let res;
      if (location.state.action === 'add') {
        res = await dispatch(addProducts({ product: addProductForm, images: imageInput }))
      } else if (location.state.action === 'edit') {
        res = await dispatch(editProduct({ product: addProductForm, images: imageInput, id: location.state.product.id }))
      }

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: res.message,
        showConfirmButton: false,
        timer: 1500
      })

      setAddProductForm({
        name: '',
        description: '',
        price: '',
        mainImg: '',
        categoryId: '',
        images: []
      })

      await navigate('/')

    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message
      })
    }
  }


  return (
    <div className="my-10 w-96">
      <p className="font-bold text-2xl text-start">Add New Product</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-7">
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input value={addProductForm.name} onChange={handleChange} name="name" type="text" className="input input-bordered w-full" />
        </div>

        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea value={addProductForm.description} onChange={handleChange} name="description" className="textarea textarea-bordered"></textarea>
        </div>

        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input value={addProductForm.price} onChange={handleChange} name="price" type="number" className="input input-bordered w-full" />
        </div>

        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select value={addProductForm.categoryId} onChange={handleChange} name="categoryId" className="select select-bordered w-full">
            <option>Select Category</option>
            {
              categories.map(category => {
                return <option key={category.id} value={category.id}>{category.name}</option>
              })
            }
          </select>

        </div>
        <div className="flex flex-col">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <div className="flex flex-col gap-3">
            <input value={addProductForm.mainImg} onChange={handleChange} name="mainImg" type="text" placeholder="Main image URL" className="input input-bordered w-full" />
            {
              imageInput.map((input, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <input value={input.imgUrl} name="images" onChange={(event) => {
                      event.preventDefault()
                      handleImageState(index, event)
                    }} type="text" placeholder="Additional image URL" className="input input-bordered w-full cursor-pointer" />
                    {
                      index === 0 ? '' :
                        <label className="bg-red-600 p-2 rounded-xl text-sm text-white cursor-pointer" onClick={() => {
                          handleRemoveImage(index)
                        }} type="button">Remove</label>
                    }
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <button onClick={handleAddImage} onChange={handleChange} className="p-2 text-sm rounded-lg bg-green-700 text-white">Add Image</button>
          </div>
          <div className="flex gap-5">
            <label onClick={(event) => {
              event.preventDefault()
              navigate('/')
            }} className="p-2 text-sm rounded-lg bg-white border-2 text-black cursor-pointer">Cancel</label>
            <button className="p-2 text-sm rounded-lg bg-blue-700 text-white">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}