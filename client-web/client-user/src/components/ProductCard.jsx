import { useNavigate } from "react-router-dom"

export default function ProductCard({ product }) {
  const navigate = useNavigate()
  const handleClick = async (slug) => {
    navigate('/' + slug)
  }

  return <div onClick={() => {
    handleClick(product.slug)
  }} className="w-60 h-96 cursor-pointer">
    <img src={product.mainImg} alt="" />
    <div className="flex flex-col gap-1">
      <p className="font-extralight text-xs text-gray-500">{product.Category.name}</p>
      <p className="text-sm text-blue-800"><a href="#">{product.name}</a></p>
      <p className="text-sm font-bold">Rp {product.price}</p>
    </div>
  </div>
}