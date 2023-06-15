import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../store/actions/actionCreator"
import ProductsTableRow from "./ProductsTableRow"
import Loader from "./Loader"

export default function ProductsTable() {
  const dispatch = useDispatch()
  const getProductData = async () => {
    try {
      await dispatch(fetchProducts())
      setLoading(false)

    } catch (err) {
      console.log(err)
    }
  }
  const products = useSelector(state => state.productReducer.products)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProductData()
  }, [])

  useEffect(() => {
    getProductData()
  }, [products])

  return (
    <div className="overflow-x-auto h-[30rem]">
      {
        loading
          ?
          <Loader />
          : <table className="table w-full">
            <thead>
              <tr>
                <th className="text-center bg-gray-800 text-white text-md font-bold ">No.</th>
                <th className="text-center bg-gray-800 text-white text-md font-bold ">Name</th>
                <th className="text-center bg-gray-800 text-white text-md font-bold ">Category</th>
                <th className="text-center bg-gray-800 text-white text-md font-bold ">Price</th>
                <th className="text-center bg-gray-800 text-white text-md font-bold ">Created by</th>
                <th className="text-center bg-gray-800 text-white text-md font-bold ">Main image</th>
                <th className="text-center bg-gray-800 text-white text-md font-bold ">Images</th>
                <th className="text-center bg-gray-800 text-white text-md font-bold ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                products?.map((product, index) => {
                  return <ProductsTableRow product={product} index={index} key={product.id} />
                })
              }
            </tbody>
          </table>
      }

    </div>
  )
}