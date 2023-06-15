import HomeCarousel from '../components/HomeCarousel';
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductCarousel from '../components/ProductCarousel';
import Services from '../components/Services';
import { fetchProducts } from '../store/actions/actionCreator';
import { useDispatch, useSelector } from 'react-redux';

export default function LandingPage() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.productReducer.products)
  console.log(products, "sleector")

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      <HomeCarousel />

      <Services />

      {/* <!-- New Article Section  --> */}
      <div className="w-full my-10">
        <p className="font-bold text-xl text-center">OUR NEW ARTICLE</p>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="flex gap-7 w-10/12 justify-center items-center flex-wrap">
          {
            products?.map(product => {
              return <ProductCard product={product} key={product.id} />
            })
          }

        </div>
      </div>


      {/* <!-- Best Seller Section  --> */}
      <div className="w-full my-10">
        <p className="font-bold text-xl text-center">OUR BEST SELLER</p>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="carousel w-10/12 gap-6">
          {
            products?.map(product => {
              return <ProductCarousel key={product.id} product={product} />
            })
          }
        </div>
      </div>
    </>
  )
}