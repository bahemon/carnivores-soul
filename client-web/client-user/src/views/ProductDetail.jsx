import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchDetail } from "../store/actions/actionCreator"

export default function ProductDetail() {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const productDetail = useSelector(state => state.productReducer.productDetail)
  const getDetail = async () => {
    try {
      await dispatch(fetchDetail(slug))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getDetail()
  }, [])

  const handleClickHome = () => {
    navigate('/')
  }

  if (!productDetail || !productDetail.Images || !productDetail.Category) {
    return <></>
  }
  return (
    <div className="w-full flex items-center justify-center my-10">
      <div className="w-10/12 flex flex-col ">
        <div className="mb-5">
          <p><span className="cursor-pointer" onClick={handleClickHome}>HOME</span> / <span>{productDetail.Category.name} </span></p>
        </div>
        <div className="flex gap-x-10">
          <div className="w-full flex flex-col">
            <img src={productDetail.mainImg} alt="" />
            <div className="carousel h-full flex justify-center gap-2 mt-2">
              {
                productDetail.Images.map(image => {
                  return <img key={image.id} src={image.imgUrl} alt="" className="carousel-item h-40 w-40 object-cover" />
                })
              }
            </div>
          </div>
          <div className="w-full text-sm flex flex-col gap-y-5">
            <p className="font-bold text-2xl">{productDetail.name}</p>
            <p className="font-bold text-xl">Rp {productDetail.price}</p>
            <p>Specification:</p>
            <p className="text-justify">{productDetail.description}</p>
            <img src="https://www.carnivoressoul.com/wp-content/uploads/2023/02/Size-Chart-Work-Jacket.png" alt="" className="w-full" />
            <p className="font-bold">Size</p>
            <div className="flex gap-2">
              <button className="flex justify-center items-center border-2 p-1 w-10 h-8 rounded-md ">S</button>
              <button className="flex justify-center items-center border-2 p-1 w-10 h-8 rounded-md ">M</button>
              <button className="flex justify-center items-center border-2 p-1 w-10 h-8 rounded-md ">L</button>
              <button className="flex justify-center items-center border-2 p-1 w-10 h-8 rounded-md ">XL</button>
              <button className="flex justify-center items-center border-2 p-1 w-10 h-8 rounded-md ">XXL</button>
            </div>
            <button className="w-40 p-2 bg-gray-500 font-extrabold text-lg text-white">ADD TO CART</button>
          </div>
        </div>
      </div >
    </div>
  )
}