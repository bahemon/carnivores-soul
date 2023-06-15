import { useNavigate } from "react-router-dom"

export default function ProductCarousel({ product }) {
  const navigate = useNavigate()
  const handleClickDetail = (slug, event) => {
    event.preventDefault()
    navigate('/' + slug)
  }
  return (
    <div onClick={(event) => {
      handleClickDetail(product.slug, event)
    }} className="carousel-item cursor-pointer">
      {
        product ? <div className="w-60 h-96">
          <img src={product.mainImg} className="w-60 mb-2" />
          <div className="flex flex-col gap-1">
            <p className="font-extralight text-xs text-gray-500">{product.Category.name}</p>
            <p className="text-sm text-blue-800"><a href="#">{product.name}</a></p>
            <p className="text-sm font-bold">Rp {product.price} </p>
          </div>
        </div>
          :
          <></>
      }
    </div>
  )
}