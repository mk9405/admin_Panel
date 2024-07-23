import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { IoIosArrowForward } from 'react-icons/io'

export default function AddAttributes() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="bg-gray-100">
        <div className="flex justify-between items-center p-4 ">
          <h1 className="font-bold text-2xl ">Add Attribute </h1>
          <div className="flex gap-4 items-center ">
            <h1>Dashboard </h1>
            <IoIosArrowForward />
            <h1>Attributes</h1>
            <IoIosArrowForward />
            <h1>Add Attributes </h1>
          </div>
        </div>

        <div className="border-2 rounded-xl font-bold   shadow-xl bg-white w-[95%] mx-10 p-4 ">
          <div className='flex justify-between my-2 items-center'>
            <h1 >Attribute name </h1>
            <input className='w-[70%] h-[50px] rounded-xl px-2 border-2' type="text" placeholder='Attribute name' />
          </div>
          <div className='flex justify-between my-2 items-center'>
            <h1>Attribute value </h1>
            <input className='w-[70%] h-[50px] rounded-xl px-2 border-2' type="text" placeholder='Attirbute value' />
          </div>
          <button className="w-[200px] ml-[50%] my-2 font-bold text-white bg-blue-500 border-2 rounded-xl px-4 py-2 hover:text-blue-500 hover:bg-white hover:border-blue-500">
              Save
            </button>
          </div>
          </main>


          <footer>
            <Footer />
          </footer>
    </div>
  )
}
