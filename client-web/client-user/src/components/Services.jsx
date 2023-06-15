export default function Services() {
  return <div className="flex flex-wrap gap-12 justify-center items-center">
    <div className="flex flex-col justify-center items-center gap-y-5 border w-80 p-5">
      <img src={require('../assets/SizeTrading.png')} className="w-32" alt="" />
      <p className="font-bold">Size Trading</p>
    </div>
    <div className="flex flex-col justify-center items-center gap-y-5 border w-80 p-5">
      <img src={require('../assets/LifetimeHardwareWarranty.png')} className="w-32" alt="" />
      <p className="font-bold">Lifetime Hardware Warranty</p>
    </div>
    <div className="flex flex-col justify-center items-center gap-y-5 border w-80 p-5">
      <img src={require('../assets/FreeHemmingRepair.png')} className="w-32" alt="" />
      <p className="font-bold">Free Hemming & Repair</p>
    </div>
    <div className="flex flex-col justify-center items-center gap-y-5 border w-80 p-5">
      <img src={require('../assets/EasyPayment.png')} className="w-32" alt="" />
      <p className="font-bold">Easy Payment</p>
    </div>
    <div className="flex flex-col justify-center items-center gap-y-5 border w-80 p-5">
      <img src={require('../assets/ReturnExchange.png')} className="w-32" alt="" />
      <p className="font-bold">Return & Exchange</p>
    </div>
    <div className="flex flex-col justify-center items-center gap-y-5 border w-80 p-5">
      <img src={require('../assets/FreeShipping.png')} className="w-32" alt="" />
      <p className="font-bold">Free Shipping</p>
    </div>
  </div>
}