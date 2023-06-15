import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../store/actions/actionCreator"
import CategoriesTableRow from "./CategoriesTableRow"
import Loader from "./Loader"

export default function CategoriesTable() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const getCategoryData = async () => {
    try {
      await dispatch(fetchCategories())
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  const categories = useSelector(state => state.categoryReducer.categories)

  useEffect(() => {
    setLoading(true)
    getCategoryData()
  }, [])

  useEffect(() => {
    getCategoryData()
  }, [categories])

  return (
    <div className="overflow-x-auto h-[30rem]">
      {
        loading
          ?
          <Loader />
          :
          <table className="table w-full">
            <thead >
              <tr>
                <th className="text-center bg-gray-800 text-white text-md font-bold ">No.</th>
                <th className="text-center bg-gray-800 text-white text-md font-bold ">Name</th>
                <th className="text-center bg-gray-800 text-white text-md font-bold ">Created At</th>
                <th className="text-center bg-gray-800 text-white text-md font-bold ">Updated At</th>
                <th className="text-center bg-gray-800 text-white text-md font-bold ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                categories.map((category, index) => {
                  return <CategoriesTableRow key={category.id} category={category} index={index} />
                })
              }

            </tbody>
          </table>
      }
    </div >
  )
}