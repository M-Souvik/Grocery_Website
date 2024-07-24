import React from 'react'
import Slider from '@/components/Slider'

const Home = () => {
  return (
    <div className="p-10 flex justify-space-between flex-col gap-3">
        <Slider/>
      <div className="flex justify-center items-center gap-4 text-black">
        <div className="flex justify-center text-lg px-10 py-6 bg-red-600 rounded-xl">
          Get Top Discounts on products
        </div>
        <div className="flex justify-center rounded-xl px-10 py-6 text-lg bg-green-600 ">
          Get Good Quality Products
        </div>
        <div className="flex justify-center rounded-xl  px-10 py-6 text-lg bg-yellow-600">
          Get Delivery On Time
        </div>
      </div>
    </div>
  )
}

export default Home
