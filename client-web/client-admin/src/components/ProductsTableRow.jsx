import { useDispatch } from "react-redux"
import { deleteProduct } from "../store/actions/actionCreator"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

export default function ProductsTableRow({ product, index }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = async (id, event) => {
    event.preventDefault()
    try {
      const res = await dispatch(deleteProduct(id))
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

  const handleEdit = async (product) => {
    navigate('/productForm', {
      state: {
        product,
        action: 'edit'
      }
    })
  }

  return (
    <tr>
      <th>{++index}</th>
      <td className="text-start">{product.name}</td>
      <td className="text-center">{product.Category.name}</td>
      <td className="text-center">Rp {product.price}</td>
      <td className="text-center">{product.User.username}</td>
      <td className="text-center">
        <div className="w-full flex justify-center">
          <img src={product.mainImg} alt="" />
        </div>
      </td>
      <td className="text-center">

        <label htmlFor={"modal" + index} className="p-2 text-sm rounded-lg w-16 transition ease-in-out delay-150 bg-white text-blue-600 font-bold hover:scale-110 hover:bg-blue-600 hover:text-white duration-300 cursor-pointer">View
          images</label>
        <input type="checkbox" id={"modal" + index} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">

            <label htmlFor={"modal" + index} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div className="flex flex-col justify-center items-center gap-y-5">
              <div>
                <img src={product.mainImg} className="w-96 rounded-lg" alt="" />

              </div>
              <div className="carousel flex gap-x-5">

                {
                  product.Images?.map(image => {
                    return <div className="carousel-item" key={image.id}>
                      <img src={image.imgUrl} className="w-44 rounded-lg" alt="" />
                    </div>
                  })
                }

              </div>
            </div>
          </div>


        </div>
      </td>
      <td className="text-center">
        <div className="flex gap-2">
          <button onClick={() => {
            handleEdit(product)
          }} className="p-2 text-sm rounded-lg w-16 transition ease-in-out delay-150 bg-white text-green-600 font-bold hover:scale-110 hover:bg-green-600 hover:text-white duration-300">Edit</button>
          <input type="checkbox" id="new-product-modal" className="modal-toggle" />
          <button onClick={(event) => handleDelete(product.id, event)} className="p-2 text-sm rounded-lg w-16 transition ease-in-out delay-150 bg-white text-red-600 font-bold hover:scale-110 hover:bg-red-600 hover:text-white duration-300">Delete</button>
        </div>
        <div>
        </div>
      </td>
    </tr >
  )
}