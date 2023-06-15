import { ThreeDots } from "react-loader-spinner"

export default function Loader() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#000000"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  )
}